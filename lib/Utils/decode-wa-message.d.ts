import { Logger } from "pino";
import { proto } from "../../WAProto";
import { SignalRepository } from "../Types";
import { BinaryNode } from "../WABinary";
export declare function decodeMessageNode(
  stanza: BinaryNode,
  meId: string,
  meLid: string,
): {
  fullMessage: proto.IWebMessageInfo;
  author: string;
  sender: string;
};
export declare const decryptMessageNode: (
  stanza: BinaryNode,
  meId: string,
  meLid: string,
  repository: SignalRepository,
  logger: Logger,
) => {
  fullMessage: proto.IWebMessageInfo;
  category: string;
  author: string;
  decrypt(): Promise<void>;
};
