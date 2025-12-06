import { AxiosRequestConfig } from "axios";
import type { Agent } from "https";
import type { Logger } from "pino";
import type { URL } from "url";
import { proto } from "../../WAProto";
import {
  AuthenticationState,
  SignalAuthState,
  TransactionCapabilityOptions,
} from "./Auth";
import { MediaConnInfo } from "./Message";
import { SignalRepository } from "./Signal";
export type WAVersion = [number, number, number];
export type WABrowserDescription = [string, string, string];
export type CacheStore = {
  get<T>(key: string): T | undefined;
  set<T>(key: string, value: T): void;
  del(key: string): void;
  flushAll(): void;
};
export type SocketConfig = {
  waWebSocketUrl: string | URL;
  connectTimeoutMs: number;
  defaultQueryTimeoutMs: number | undefined;
  keepAliveIntervalMs: number;
  mobile?: boolean;
  agent?: Agent;
  logger: Logger;
  version: WAVersion;
  browser: WABrowserDescription;
  fetchAgent?: Agent;
  printQRInTerminal: boolean;
  emitOwnEvents: boolean;
  customUploadHosts: MediaConnInfo["hosts"];
  retryRequestDelayMs: number;
  maxMsgRetryCount: number;
  qrTimeout?: number;
  auth: AuthenticationState;
  shouldSyncHistoryMessage: (
    msg: proto.Message.IHistorySyncNotification,
  ) => boolean;
  transactionOpts: TransactionCapabilityOptions;
  markOnlineOnConnect: boolean;
  mediaCache?: CacheStore;
  msgRetryCounterCache?: CacheStore;
  userDevicesCache?: CacheStore;
  callOfferCache?: CacheStore;
  linkPreviewImageThumbnailWidth: number;
  syncFullHistory: boolean;
  fireInitQueries: boolean;
  generateHighQualityLinkPreview: boolean;
  shouldIgnoreJid: (jid: string) => boolean | undefined;
  patchMessageBeforeSending: (
    msg: proto.IMessage,
    recipientJids: string[],
  ) => Promise<proto.IMessage> | proto.IMessage;
  appStateMacVerification: {
    patch: boolean;
    snapshot: boolean;
  };
  options: AxiosRequestConfig<{}>;
  getMessage: (key: proto.IMessageKey) => Promise<proto.IMessage | undefined>;
  makeSignalRepository: (auth: SignalAuthState) => SignalRepository;
  socket?: any;
};
