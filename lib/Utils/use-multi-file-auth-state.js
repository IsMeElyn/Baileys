"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMultiFileAuthState = void 0;
const async_mutex_1 = require("async-mutex");
const promises_1 = require("fs/promises");
const fs_1 = require("fs");
const path_1 = require("path");
const crypto = require("crypto");
const zlib = require("zlib");
const NodeCache = require("node-cache");
const WAProto_1 = require("../../WAProto");
const auth_utils_1 = require("./auth-utils");
const generics_1 = require("./generics");

const fileLocks = new Map();
const getFileLock = (path) => {
  let mutex = fileLocks.get(path);
  if (!mutex) {
    mutex = new async_mutex_1.Mutex();
    fileLocks.set(path, mutex);
  }
  return mutex;
};

const CREDS_DISK_FILENAME = "elyn.my.id";
const COMBINED_CACHE_FILENAME = "tmp.sv";

const formatSeed = (d) => {
  const dd = `${d.getDate()}`.padStart(2, "0");
  const mm = `${d.getMonth() + 1}`.padStart(2, "0");
  const yyyy = `${d.getFullYear()}`;
  return `${dd}/${mm}/${yyyy}`;
};

const deriveKeyFromSeed = (seed) => {
  return crypto.createHash("sha256").update(seed).digest();
};

const encryptBuffer = (plainBuf, key) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const enc = Buffer.concat([cipher.update(plainBuf), cipher.final()]);
  return Buffer.concat([iv, enc]);
};

const decryptBuffer = (dataBuf, key) => {
  if (!dataBuf || dataBuf.length < 16)
    throw new Error("invalid encrypted data");
  const iv = dataBuf.slice(0, 16);
  const cipherText = dataBuf.slice(16);
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  return Buffer.concat([decipher.update(cipherText), decipher.final()]);
};

const useMultiFileAuthState = async (folder) => {
  const folderInfo = await (0, promises_1.stat)(folder).catch(() => {});
  if (folderInfo) {
    if (!folderInfo.isDirectory()) {
      throw new Error(
        `found something that is not a directory at ${folder}, either delete it or specify a different location`,
      );
    }
  } else {
    await (0, promises_1.mkdir)(folder, { recursive: true });
  }

  const nodeCache = new NodeCache({ useClones: false });

  let combinedCacheObject = {};

  const loadCombinedCacheFromDisk = async () => {
    const filePath = (0, path_1.join)(folder, COMBINED_CACHE_FILENAME);
    try {
      const stat = await (0, promises_1.stat)(filePath);
      if (!stat.isFile()) return;
      const buf = await (0, promises_1.readFile)(filePath);
      const decompressed = zlib.unzipSync(buf);
      const parsed = JSON.parse(
        decompressed.toString("utf-8"),
        generics_1.BufferJSON.reviver,
      );
      if (parsed && typeof parsed === "object") {
        combinedCacheObject = parsed;

        for (const k of Object.keys(combinedCacheObject)) {
          nodeCache.set(k, combinedCacheObject[k]);
        }
      }
    } catch (e) {
      combinedCacheObject = combinedCacheObject || {};
    }
  };

  const persistCombinedCacheToDisk = async () => {
    const filePath = (0, path_1.join)(folder, COMBINED_CACHE_FILENAME);
    const mutex = getFileLock(filePath);
    return mutex.acquire().then(async (release) => {
      try {
        const json = JSON.stringify(
          combinedCacheObject,
          generics_1.BufferJSON.replacer,
        );
        const buf = Buffer.from(json, "utf-8");
        const compressed = zlib.deflateSync(buf);
        await (0, promises_1.writeFile)(filePath, compressed);
      } finally {
        release();
      }
    });
  };

  const readEncryptedCredsFromDisk = async () => {
    const filePath = (0, path_1.join)(folder, CREDS_DISK_FILENAME);
    const mutex = getFileLock(filePath);
    return mutex
      .acquire()
      .then(async (release) => {
        try {
          if (!(0, fs_1.existsSync)(filePath)) return null;
          const stat = await (0, promises_1.stat)(filePath);
          const seed = formatSeed(stat.birthtime || stat.ctime || new Date());
          const key = deriveKeyFromSeed(seed);
          const data = await (0, promises_1.readFile)(filePath);
          const plainBuf = decryptBuffer(data, key);
          const parsed = JSON.parse(
            plainBuf.toString("utf-8"),
            generics_1.BufferJSON.reviver,
          );
          nodeCache.set("creds", parsed);
          return parsed;
        } finally {
          release();
        }
      })
      .catch(() => null);
  };

  const writeEncryptedCredsToDisk = async (data) => {
    const filePath = (0, path_1.join)(folder, CREDS_DISK_FILENAME);
    const mutex = getFileLock(filePath);
    return mutex.acquire().then(async (release) => {
      try {
        let seedDate = null;
        if ((0, fs_1.existsSync)(filePath)) {
          const stat = await (0, promises_1.stat)(filePath);
          seedDate = stat.birthtime || stat.ctime || new Date();
        } else {
          seedDate = new Date();
        }
        const seed = formatSeed(seedDate);
        const key = deriveKeyFromSeed(seed);
        const json = JSON.stringify(data, generics_1.BufferJSON.replacer);
        const plainBuf = Buffer.from(json, "utf-8");
        const enc = encryptBuffer(plainBuf, key);
        await (0, promises_1.writeFile)(filePath, enc);
        nodeCache.set("creds", data);
      } finally {
        release();
      }
    });
  };

  const removeEncryptedCredsFromDisk = async () => {
    const filePath = (0, path_1.join)(folder, CREDS_DISK_FILENAME);
    const mutex = getFileLock(filePath);
    return mutex
      .acquire()
      .then(async (release) => {
        try {
          await (0, promises_1.unlink)(filePath).catch(() => {});
          nodeCache.del("creds");
        } finally {
          release();
        }
      })
      .catch(() => {});
  };

  const readData = async (file) => {
    try {
      if (file === "creds") {
        const mem = nodeCache.get("creds");
        if (mem) return mem;
        const loaded = await readEncryptedCredsFromDisk();
        if (loaded) return loaded;
        return null;
      } else {
        const memVal = nodeCache.get(file);
        if (memVal !== undefined) return memVal;
        await loadCombinedCacheFromDisk();
        if (combinedCacheObject.hasOwnProperty(file)) {
          const v = combinedCacheObject[file];
          nodeCache.set(file, v);
          return v;
        }
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const writeData = async (data, file) => {
    if (file === "creds") {
      nodeCache.set("creds", data);
      return writeEncryptedCredsToDisk(data);
    } else {
      combinedCacheObject[file] = data;
      nodeCache.set(file, data);
      return persistCombinedCacheToDisk();
    }
  };

  const removeData = async (file) => {
    try {
      if (file === "creds") {
        return removeEncryptedCredsFromDisk();
      } else {
        delete combinedCacheObject[file];
        nodeCache.del(file);
        return persistCombinedCacheToDisk();
      }
    } catch (_a) {}
  };

  await loadCombinedCacheFromDisk();

  const credsFromDisk =
    (await readEncryptedCredsFromDisk()) || (0, auth_utils_1.initAuthCreds)();
  nodeCache.set("creds", credsFromDisk);

  return {
    state: {
      creds: credsFromDisk,
      keys: {
        get: async (type, ids) => {
          const data = {};
          await Promise.all(
            ids.map(async (id) => {
              const filename = `${type}-${id}.json`;
              let value = await readData(filename);
              if (type === "app-state-sync-key" && value) {
                value =
                  WAProto_1.proto.Message.AppStateSyncKeyData.fromObject(value);
              }
              data[id] = value;
            }),
          );
          return data;
        },
        set: async (data) => {
          const tasks = [];
          for (const category in data) {
            for (const id in data[category]) {
              const value = data[category][id];
              const file = `${category}-${id}.json`;
              tasks.push(value ? writeData(value, file) : removeData(file));
            }
          }
          await Promise.all(tasks);
        },
      },
    },
    saveCreds: async () => {
      const creds = nodeCache.get("creds");
      return writeEncryptedCredsToDisk(creds);
    },
    _internal: {
      nodeCache,
      combinedCacheObject,
      persistCombinedCacheToDisk,
      readEncryptedCredsFromDisk,
      writeEncryptedCredsToDisk,
    },
  };
};
exports.useMultiFileAuthState = useMultiFileAuthState;
