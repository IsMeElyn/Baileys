import { proto } from "../../WAProto";

export type NewsletterReactionMode = "ALL" | "BASIC" | "NONE";
export type NewsletterState = "ACTIVE" | "GEOSUSPENDED" | "SUSPENDED";
export type NewsletterVerification = "VERIFIED" | "UNVERIFIED";
export type NewsletterMute = "ON" | "OFF" | "UNDEFINED";
export type NewsletterViewRole = "ADMIN" | "GUEST" | "OWNER" | "SUBSCRIBER";

export type NewsletterViewerMetadata = {
  mute: NewsletterMute;
  view_role: NewsletterViewRole;
};

export type NewsletterMetadata = {
  id: string;
  state: NewsletterState;
  creation_time: number;
  name: string;
  nameTime: number;
  description: string;
  descriptionTime: number;
  invite: string;
  picture: string | null;
  preview: string | null;
  reaction_codes?: NewsletterReactionMode;
  subscribers: number;
  verification: NewsletterVerification;
  viewer_metadata: NewsletterViewerMetadata;
};

export type SubscriberAction = "promote" | "demote";

export type ReactionModeUpdate = {
  reaction_codes: {
    blocked_codes: null;
    enabled_ts_sec: null;
    value: NewsletterReactionMode;
  };
};

export type NewsletterSettingsUpdate = ReactionModeUpdate;

export type NewsletterReaction = {
  count: number;
  code: string;
};

export type NewsletterFetchedUpdate = {
  server_id: string;
  views?: number;
  reactions: NewsletterReaction[];
  message?: proto.IWebMessageInfo;
};

export const MexOperations = {
  PROMOTE: "NotificationNewsletterAdminPromote",
  DEMOTE: "NotificationNewsletterAdminDemote",
  UPDATE: "NotificationNewsletterUpdate",
} as const;

export const XWAPaths = {
  PROMOTE: "xwa2_notify_newsletter_admin_promote",
  DEMOTE: "xwa2_notify_newsletter_admin_demote",
  ADMIN_COUNT: "xwa2_newsletter_admin",
  CREATE: "xwa2_newsletter_create",
  NEWSLETTER: "xwa2_newsletter",
  SUBSCRIBED: "xwa2_newsletter_subscribed",
  METADATA_UPDATE: "xwa2_notify_newsletter_on_metadata_update",
} as const;

export const QueryIds = {
  JOB_MUTATION: "7150902998257522",
  METADATA: "6620195908089573",
  UNFOLLOW: "7238632346214362",
  FOLLOW: "7871414976211147",
  UNMUTE: "7337137176362961",
  MUTE: "25151904754424642",
  CREATE: "6996806640408138",
  ADMIN_COUNT: "7130823597031706",
  CHANGE_OWNER: "7341777602580933",
  DELETE: "8316537688363079",
  DEMOTE: "6551828931592903",
  SUBSCRIBED: "6388546374527196",
} as const;
