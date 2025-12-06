import { AxiosRequestConfig } from "axios";
import type { Logger } from "pino";
import { proto } from "../../WAProto";
import {
  AuthenticationCreds,
  BaileysEventEmitter,
  SignalKeyStoreWithTransaction,
  SocketConfig,
} from "../Types";
type ProcessMessageContext = {
  shouldProcessHistoryMsg: boolean;
  creds: AuthenticationCreds;
  keyStore: SignalKeyStoreWithTransaction;
  ev: BaileysEventEmitter;
  getMessage: SocketConfig["getMessage"];
  logger?: Logger;
  options: AxiosRequestConfig<{}>;
};
export declare const cleanMessage: (
  message: proto.IWebMessageInfo,
  meId: string,
) => void;
export declare const isRealMessage: (
  message: proto.IWebMessageInfo,
  meId: string,
) => boolean | undefined;
export declare const shouldIncrementChatUnread: (
  message: proto.IWebMessageInfo,
) => boolean;
export declare const getChatId: ({
  remoteJid,
  participant,
  fromMe,
}: proto.IMessageKey) => string;
type PollContext = {
  pollCreatorJid: string;
  pollMsgId: string;
  pollEncKey: Uint8Array;
  voterJid: string;
};
export declare function decryptPollVote(
  { encPayload, encIv }: proto.Message.IPollEncValue,
  { pollCreatorJid, pollMsgId, pollEncKey, voterJid }: PollContext,
): proto.Message.PollVoteMessage;
declare const processMessage: (
  message: proto.IWebMessageInfo,
  {
    shouldProcessHistoryMsg,
    ev,
    creds,
    keyStore,
    logger,
    options,
    getMessage,
  }: ProcessMessageContext,
) => Promise<void>;
export default processMessage;
