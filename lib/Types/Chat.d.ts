import type { proto } from "../../WAProto";
import type { AccountSettings } from "./Auth";
import type { BufferedEventData } from "./Events";
import type { ChatLabelAssociationActionBody } from "./LabelAssociation";
import type { MessageLabelAssociationActionBody } from "./LabelAssociation";
import type { MinimalMessage } from "./Message";
export type WAPrivacyValue = "all" | "contacts" | "contact_blacklist" | "none";
export type WAPrivacyOnlineValue = "all" | "match_last_seen";
export type WAReadReceiptsValue = "all" | "none";
export type WAPresence =
  | "unavailable"
  | "available"
  | "composing"
  | "recording"
  | "paused";
export declare const ALL_WA_PATCH_NAMES: readonly [
  "critical_block",
  "critical_unblock_low",
  "regular_high",
  "regular_low",
  "regular",
];
export type WAPatchName = (typeof ALL_WA_PATCH_NAMES)[number];
export interface PresenceData {
  lastKnownPresence: WAPresence;
  lastSeen?: number;
}
export type ChatMutation = {
  syncAction: proto.ISyncActionData;
  index: string[];
};
export type WAPatchCreate = {
  syncAction: proto.ISyncActionValue;
  index: string[];
  type: WAPatchName;
  apiVersion: number;
  operation: proto.SyncdMutation.SyncdOperation;
};
export type Chat = proto.IConversation & {
  lastMessageRecvTimestamp?: number;
};
export type ChatUpdate = Partial<
  Chat & {
    conditional: (bufferedData: BufferedEventData) => boolean | undefined;
  }
>;
export type LastMessageList =
  | MinimalMessage[]
  | proto.SyncActionValue.ISyncActionMessageRange;
export type ChatModification =
  | {
      archive: boolean;
      lastMessages: LastMessageList;
    }
  | {
      pushNameSetting: string;
    }
  | {
      pin: boolean;
    }
  | {
      mute: number | null;
    }
  | {
      clear:
        | "all"
        | {
            messages: {
              id: string;
              fromMe?: boolean;
              timestamp: number;
            }[];
          };
    }
  | {
      star: {
        messages: {
          id: string;
          fromMe?: boolean;
        }[];
        star: boolean;
      };
    }
  | {
      markRead: boolean;
      lastMessages: LastMessageList;
    }
  | {
      delete: true;
      lastMessages: LastMessageList;
    }
  | {
      addChatLabel: ChatLabelAssociationActionBody;
    }
  | {
      removeChatLabel: ChatLabelAssociationActionBody;
    }
  | {
      addMessageLabel: MessageLabelAssociationActionBody;
    }
  | {
      removeMessageLabel: MessageLabelAssociationActionBody;
    };
export type InitialReceivedChatsState = {
  [jid: string]: {
    lastMsgRecvTimestamp?: number;
    lastMsgTimestamp: number;
  };
};
export type InitialAppStateSyncOptions = {
  accountSettings: AccountSettings;
};
