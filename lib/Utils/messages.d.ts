import { Logger } from "pino";
import { type Transform } from "stream";
import { proto } from "../../WAProto";
import {
  AnyMediaMessageContent,
  AnyMessageContent,
  MediaGenerationOptions,
  MessageContentGenerationOptions,
  MessageGenerationOptions,
  MessageGenerationOptionsFromContent,
  MessageUserReceipt,
  WAMessage,
  WAMessageContent,
  WAProto,
} from "../Types";
import { MediaDownloadOptions } from "./messages-media";
export declare const extractUrlFromText: (text: string) => string | undefined;
export declare const generateLinkPreviewIfRequired: (
  text: string,
  getUrlInfo: MessageGenerationOptions["getUrlInfo"],
  logger: MessageGenerationOptions["logger"],
) => Promise<import("../Types").WAUrlInfo | undefined>;
export declare const prepareWAMessageMedia: (
  message: AnyMediaMessageContent,
  options: MediaGenerationOptions,
) => Promise<proto.Message>;
export declare const prepareDisappearingMessageSettingContent: (
  ephemeralExpiration?: number,
) => proto.Message;
export declare const generateForwardMessageContent: (
  message: WAMessage,
  forceForward?: boolean,
) => proto.IMessage;
export declare const generateWAMessageContent: (
  message: AnyMessageContent,
  options: MessageContentGenerationOptions,
) => Promise<proto.Message>;
export declare const generateWAMessageFromContent: (
  jid: string,
  message: WAMessageContent,
  options: MessageGenerationOptionsFromContent,
) => proto.WebMessageInfo;
export declare const generateWAMessage: (
  jid: string,
  content: AnyMessageContent,
  options: MessageGenerationOptions,
) => Promise<proto.WebMessageInfo>;
export declare const getContentType: (
  content: WAProto.IMessage | undefined,
) => keyof proto.IMessage | undefined;
export declare const normalizeMessageContent: (
  content: WAMessageContent | null | undefined,
) => WAMessageContent | undefined;
export declare const extractMessageContent: (
  content: WAMessageContent | undefined | null,
) => WAMessageContent | undefined;
export declare const getDevice: (
  id: string,
) => "android" | "unknown" | "web" | "ios" | "desktop";
export declare const updateMessageWithReceipt: (
  msg: Pick<WAMessage, "userReceipt">,
  receipt: MessageUserReceipt,
) => void;
export declare const updateMessageWithReaction: (
  msg: Pick<WAMessage, "reactions">,
  reaction: proto.IReaction,
) => void;
export declare const updateMessageWithPollUpdate: (
  msg: Pick<WAMessage, "pollUpdates">,
  update: proto.IPollUpdate,
) => void;
type VoteAggregation = {
  name: string;
  voters: string[];
};
export declare function getAggregateVotesInPollMessage(
  { message, pollUpdates }: Pick<WAMessage, "pollUpdates" | "message">,
  meId?: string,
): VoteAggregation[];
export declare const aggregateMessageKeysNotFromMe: (
  keys: proto.IMessageKey[],
) => {
  jid: string;
  participant: string | undefined;
  messageIds: string[];
}[];
type DownloadMediaMessageContext = {
  reuploadRequest: (msg: WAMessage) => Promise<WAMessage>;
  logger: Logger;
};
export declare const downloadMediaMessage: <Type extends "stream" | "buffer">(
  message: WAMessage,
  type: Type,
  options: MediaDownloadOptions,
  ctx?: DownloadMediaMessageContext,
) => Promise<Type extends "buffer" ? Buffer : Transform>;
export declare const assertMediaContent: (
  content: proto.IMessage | null | undefined,
) =>
  | proto.Message.IVideoMessage
  | proto.Message.IImageMessage
  | proto.Message.IAudioMessage
  | proto.Message.IDocumentMessage
  | proto.Message.IStickerMessage;
export {};
