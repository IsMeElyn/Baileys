import { Boom } from "@hapi/boom";
import { AxiosRequestConfig } from "axios";
import type { Logger } from "pino";
import { Readable, Transform } from "stream";
import { URL } from "url";
import { proto } from "../../WAProto";
import {
  DownloadableMessage,
  MediaConnInfo,
  MediaDecryptionKeyInfo,
  MediaType,
  SocketConfig,
  WAMediaUpload,
  WAMediaUploadFunction,
  WAMessageContent,
} from "../Types";
import { BinaryNode } from "../WABinary";
export declare const hkdfInfoKey: (type: MediaType) => string;
export declare function getMediaKeys(
  buffer: Uint8Array | string | null | undefined,
  mediaType: MediaType,
): MediaDecryptionKeyInfo;
export declare const extractImageThumb: (
  bufferOrFilePath: Readable | Buffer | string,
  width?: number,
) => Promise<{
  buffer: Buffer;
  original: {
    width: number | undefined;
    height: number | undefined;
  };
}>;
export declare const encodeBase64EncodedStringForUpload: (
  b64: string,
) => string;
export declare const generateProfilePicture: (
  mediaUpload: WAMediaUpload,
) => Promise<{
  img: Buffer;
}>;
export declare const mediaMessageSHA256B64: (
  message: WAMessageContent,
) => string | null | undefined;
export declare function getAudioDuration(
  buffer: Buffer | string | Readable,
): Promise<number | undefined>;
export declare function getAudioWaveform(
  buffer: Buffer | string | Readable,
  logger?: Logger,
): Promise<Uint8Array | undefined>;
export declare const toReadable: (buffer: Buffer) => Readable;
export declare const toBuffer: (stream: Readable) => Promise<Buffer>;
export declare const getStream: (
  item: WAMediaUpload,
  opts?: AxiosRequestConfig,
) => Promise<
  | {
      readonly stream: Readable;
      readonly type: "buffer";
    }
  | {
      readonly stream: Readable;
      readonly type: "readable";
    }
  | {
      readonly stream: Readable;
      readonly type: "remote";
    }
  | {
      readonly stream: import("fs").ReadStream;
      readonly type: "file";
    }
>;
export declare function generateThumbnail(
  file: string,
  mediaType: "video" | "image",
  options: {
    logger?: Logger;
  },
): Promise<{
  thumbnail: string | undefined;
  originalImageDimensions:
    | {
        width: number;
        height: number;
      }
    | undefined;
}>;
export declare const getHttpStream: (
  url: string | URL,
  options?: AxiosRequestConfig & {
    isStream?: true;
  },
) => Promise<Readable>;
type EncryptedStreamOptions = {
  saveOriginalFileIfRequired?: boolean;
  logger?: Logger;
  opts?: AxiosRequestConfig;
};
export declare const prepareStream: (
  media: WAMediaUpload,
  mediaType: MediaType,
  { logger, saveOriginalFileIfRequired, opts }?: EncryptedStreamOptions,
) => Promise<{
  mediaKey: undefined;
  encWriteStream: Buffer;
  fileLength: number;
  fileSha256: Buffer;
  fileEncSha256: undefined;
  bodyPath: string | undefined;
  didSaveToTmpPath: boolean;
}>;
export declare const encryptedStream: (
  media: WAMediaUpload,
  mediaType: MediaType,
  { logger, saveOriginalFileIfRequired, opts }?: EncryptedStreamOptions,
) => Promise<{
  mediaKey: Buffer;
  encWriteStream: Readable;
  bodyPath: string | undefined;
  mac: Buffer;
  fileEncSha256: Buffer;
  fileSha256: Buffer;
  fileLength: number;
  didSaveToTmpPath: boolean;
}>;
export type MediaDownloadOptions = {
  startByte?: number;
  endByte?: number;
  options?: AxiosRequestConfig<any>;
};
export declare const getUrlFromDirectPath: (directPath: string) => string;
export declare const downloadContentFromMessage: (
  { mediaKey, directPath, url }: DownloadableMessage,
  type: MediaType,
  opts?: MediaDownloadOptions,
) => Promise<Transform>;
export declare const downloadEncryptedContent: (
  downloadUrl: string,
  { cipherKey, iv }: MediaDecryptionKeyInfo,
  { startByte, endByte, options }?: MediaDownloadOptions,
) => Promise<Transform>;
export declare function extensionForMediaMessage(
  message: WAMessageContent,
): string;
export declare const getWAUploadToServer: (
  { customUploadHosts, fetchAgent, logger, options }: SocketConfig,
  refreshMediaConn: (force: boolean) => Promise<MediaConnInfo>,
) => WAMediaUploadFunction;
export declare const encryptMediaRetryRequest: (
  key: proto.IMessageKey,
  mediaKey: Buffer | Uint8Array,
  meId: string,
) => BinaryNode;
export declare const decodeMediaRetryNode: (node: BinaryNode) => {
  key: proto.IMessageKey;
  media?:
    | {
        ciphertext: Uint8Array;
        iv: Uint8Array;
      }
    | undefined;
  error?: Boom<any> | undefined;
};
export declare const decryptMediaRetryData: (
  {
    ciphertext,
    iv,
  }: {
    ciphertext: Uint8Array;
    iv: Uint8Array;
  },
  mediaKey: Uint8Array,
  msgId: string,
) => proto.MediaRetryNotification;
export declare const getStatusCodeForMediaRetry: (code: number) => any;
export {};
