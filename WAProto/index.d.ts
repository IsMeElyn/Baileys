import * as $protobuf from "protobufjs";
export namespace proto {
  interface IADVDeviceIdentity {
    rawId?: number | null;

    timestamp?: number | Long | null;

    keyIndex?: number | null;

    accountType?: proto.ADVEncryptionType | null;

    deviceType?: proto.ADVEncryptionType | null;
  }

  class ADVDeviceIdentity implements IADVDeviceIdentity {
    constructor(properties?: proto.IADVDeviceIdentity);

    public rawId: number;

    public timestamp: number | Long;

    public keyIndex: number;

    public accountType: proto.ADVEncryptionType;

    public deviceType: proto.ADVEncryptionType;

    public static create(
      properties?: proto.IADVDeviceIdentity,
    ): proto.ADVDeviceIdentity;

    public static encode(
      message: proto.IADVDeviceIdentity,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IADVDeviceIdentity,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ADVDeviceIdentity;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ADVDeviceIdentity;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.ADVDeviceIdentity;

    public static toObject(
      message: proto.ADVDeviceIdentity,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  enum ADVEncryptionType {
    E2EE = 0,
    HOSTED = 1,
  }

  interface IADVKeyIndexList {
    rawId?: number | null;

    timestamp?: number | Long | null;

    currentIndex?: number | null;

    validIndexes?: number[] | null;

    accountType?: proto.ADVEncryptionType | null;
  }

  class ADVKeyIndexList implements IADVKeyIndexList {
    constructor(properties?: proto.IADVKeyIndexList);

    public rawId: number;

    public timestamp: number | Long;

    public currentIndex: number;

    public validIndexes: number[];

    public accountType: proto.ADVEncryptionType;

    public static create(
      properties?: proto.IADVKeyIndexList,
    ): proto.ADVKeyIndexList;

    public static encode(
      message: proto.IADVKeyIndexList,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IADVKeyIndexList,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ADVKeyIndexList;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ADVKeyIndexList;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.ADVKeyIndexList;

    public static toObject(
      message: proto.ADVKeyIndexList,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IADVSignedDeviceIdentity {
    details?: Uint8Array | null;

    accountSignatureKey?: Uint8Array | null;

    accountSignature?: Uint8Array | null;

    deviceSignature?: Uint8Array | null;
  }

  class ADVSignedDeviceIdentity implements IADVSignedDeviceIdentity {
    constructor(properties?: proto.IADVSignedDeviceIdentity);

    public details: Uint8Array;

    public accountSignatureKey: Uint8Array;

    public accountSignature: Uint8Array;

    public deviceSignature: Uint8Array;

    public static create(
      properties?: proto.IADVSignedDeviceIdentity,
    ): proto.ADVSignedDeviceIdentity;

    public static encode(
      message: proto.IADVSignedDeviceIdentity,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IADVSignedDeviceIdentity,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ADVSignedDeviceIdentity;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ADVSignedDeviceIdentity;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.ADVSignedDeviceIdentity;

    public static toObject(
      message: proto.ADVSignedDeviceIdentity,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IADVSignedDeviceIdentityHMAC {
    details?: Uint8Array | null;

    hmac?: Uint8Array | null;

    accountType?: proto.ADVEncryptionType | null;
  }

  class ADVSignedDeviceIdentityHMAC implements IADVSignedDeviceIdentityHMAC {
    constructor(properties?: proto.IADVSignedDeviceIdentityHMAC);

    public details: Uint8Array;

    public hmac: Uint8Array;

    public accountType: proto.ADVEncryptionType;

    public static create(
      properties?: proto.IADVSignedDeviceIdentityHMAC,
    ): proto.ADVSignedDeviceIdentityHMAC;

    public static encode(
      message: proto.IADVSignedDeviceIdentityHMAC,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IADVSignedDeviceIdentityHMAC,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ADVSignedDeviceIdentityHMAC;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ADVSignedDeviceIdentityHMAC;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.ADVSignedDeviceIdentityHMAC;

    public static toObject(
      message: proto.ADVSignedDeviceIdentityHMAC,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IADVSignedKeyIndexList {
    details?: Uint8Array | null;

    accountSignature?: Uint8Array | null;

    accountSignatureKey?: Uint8Array | null;
  }

  class ADVSignedKeyIndexList implements IADVSignedKeyIndexList {
    constructor(properties?: proto.IADVSignedKeyIndexList);

    public details: Uint8Array;

    public accountSignature: Uint8Array;

    public accountSignatureKey: Uint8Array;

    public static create(
      properties?: proto.IADVSignedKeyIndexList,
    ): proto.ADVSignedKeyIndexList;

    public static encode(
      message: proto.IADVSignedKeyIndexList,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IADVSignedKeyIndexList,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ADVSignedKeyIndexList;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ADVSignedKeyIndexList;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.ADVSignedKeyIndexList;

    public static toObject(
      message: proto.ADVSignedKeyIndexList,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IActionLink {
    url?: string | null;

    buttonTitle?: string | null;
  }

  class ActionLink implements IActionLink {
    constructor(properties?: proto.IActionLink);

    public url: string;

    public buttonTitle: string;

    public static create(properties?: proto.IActionLink): proto.ActionLink;

    public static encode(
      message: proto.IActionLink,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IActionLink,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ActionLink;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ActionLink;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.ActionLink;

    public static toObject(
      message: proto.ActionLink,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IAutoDownloadSettings {
    downloadImages?: boolean | null;

    downloadAudio?: boolean | null;

    downloadVideo?: boolean | null;

    downloadDocuments?: boolean | null;
  }

  class AutoDownloadSettings implements IAutoDownloadSettings {
    constructor(properties?: proto.IAutoDownloadSettings);

    public downloadImages: boolean;

    public downloadAudio: boolean;

    public downloadVideo: boolean;

    public downloadDocuments: boolean;

    public static create(
      properties?: proto.IAutoDownloadSettings,
    ): proto.AutoDownloadSettings;

    public static encode(
      message: proto.IAutoDownloadSettings,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IAutoDownloadSettings,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.AutoDownloadSettings;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.AutoDownloadSettings;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.AutoDownloadSettings;

    public static toObject(
      message: proto.AutoDownloadSettings,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IAvatarUserSettings {
    fbid?: string | null;

    password?: string | null;
  }

  class AvatarUserSettings implements IAvatarUserSettings {
    constructor(properties?: proto.IAvatarUserSettings);

    public fbid: string;

    public password: string;

    public static create(
      properties?: proto.IAvatarUserSettings,
    ): proto.AvatarUserSettings;

    public static encode(
      message: proto.IAvatarUserSettings,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IAvatarUserSettings,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.AvatarUserSettings;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.AvatarUserSettings;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.AvatarUserSettings;

    public static toObject(
      message: proto.AvatarUserSettings,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IBizAccountLinkInfo {
    whatsappBizAcctFbid?: number | Long | null;

    whatsappAcctNumber?: string | null;

    issueTime?: number | Long | null;

    hostStorage?: proto.BizAccountLinkInfo.HostStorageType | null;

    accountType?: proto.BizAccountLinkInfo.AccountType | null;
  }

  class BizAccountLinkInfo implements IBizAccountLinkInfo {
    constructor(properties?: proto.IBizAccountLinkInfo);

    public whatsappBizAcctFbid: number | Long;

    public whatsappAcctNumber: string;

    public issueTime: number | Long;

    public hostStorage: proto.BizAccountLinkInfo.HostStorageType;

    public accountType: proto.BizAccountLinkInfo.AccountType;

    public static create(
      properties?: proto.IBizAccountLinkInfo,
    ): proto.BizAccountLinkInfo;

    public static encode(
      message: proto.IBizAccountLinkInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IBizAccountLinkInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.BizAccountLinkInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.BizAccountLinkInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.BizAccountLinkInfo;

    public static toObject(
      message: proto.BizAccountLinkInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace BizAccountLinkInfo {
    enum AccountType {
      ENTERPRISE = 0,
    }

    enum HostStorageType {
      ON_PREMISE = 0,
      FACEBOOK = 1,
    }
  }

  interface IBizAccountPayload {
    vnameCert?: proto.IVerifiedNameCertificate | null;

    bizAcctLinkInfo?: Uint8Array | null;
  }

  class BizAccountPayload implements IBizAccountPayload {
    constructor(properties?: proto.IBizAccountPayload);

    public vnameCert?: proto.IVerifiedNameCertificate | null;

    public bizAcctLinkInfo: Uint8Array;

    public static create(
      properties?: proto.IBizAccountPayload,
    ): proto.BizAccountPayload;

    public static encode(
      message: proto.IBizAccountPayload,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IBizAccountPayload,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.BizAccountPayload;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.BizAccountPayload;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.BizAccountPayload;

    public static toObject(
      message: proto.BizAccountPayload,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IBizIdentityInfo {
    vlevel?: proto.BizIdentityInfo.VerifiedLevelValue | null;

    vnameCert?: proto.IVerifiedNameCertificate | null;

    signed?: boolean | null;

    revoked?: boolean | null;

    hostStorage?: proto.BizIdentityInfo.HostStorageType | null;

    actualActors?: proto.BizIdentityInfo.ActualActorsType | null;

    privacyModeTs?: number | Long | null;

    featureControls?: number | Long | null;
  }

  class BizIdentityInfo implements IBizIdentityInfo {
    constructor(properties?: proto.IBizIdentityInfo);

    public vlevel: proto.BizIdentityInfo.VerifiedLevelValue;

    public vnameCert?: proto.IVerifiedNameCertificate | null;

    public signed: boolean;

    public revoked: boolean;

    public hostStorage: proto.BizIdentityInfo.HostStorageType;

    public actualActors: proto.BizIdentityInfo.ActualActorsType;

    public privacyModeTs: number | Long;

    public featureControls: number | Long;

    public static create(
      properties?: proto.IBizIdentityInfo,
    ): proto.BizIdentityInfo;

    public static encode(
      message: proto.IBizIdentityInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IBizIdentityInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.BizIdentityInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.BizIdentityInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.BizIdentityInfo;

    public static toObject(
      message: proto.BizIdentityInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace BizIdentityInfo {
    enum ActualActorsType {
      SELF = 0,
      BSP = 1,
    }

    enum HostStorageType {
      ON_PREMISE = 0,
      FACEBOOK = 1,
    }

    enum VerifiedLevelValue {
      UNKNOWN = 0,
      LOW = 1,
      HIGH = 2,
    }
  }

  interface IBotAvatarMetadata {
    sentiment?: number | null;

    behaviorGraph?: string | null;

    action?: number | null;

    intensity?: number | null;

    wordCount?: number | null;
  }

  class BotAvatarMetadata implements IBotAvatarMetadata {
    constructor(properties?: proto.IBotAvatarMetadata);

    public sentiment: number;

    public behaviorGraph: string;

    public action: number;

    public intensity: number;

    public wordCount: number;

    public static create(
      properties?: proto.IBotAvatarMetadata,
    ): proto.BotAvatarMetadata;

    public static encode(
      message: proto.IBotAvatarMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IBotAvatarMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.BotAvatarMetadata;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.BotAvatarMetadata;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.BotAvatarMetadata;

    public static toObject(
      message: proto.BotAvatarMetadata,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IBotMetadata {
    avatarMetadata?: proto.IBotAvatarMetadata | null;

    personaId?: string | null;

    pluginMetadata?: proto.IBotPluginMetadata | null;

    suggestedPromptMetadata?: proto.IBotSuggestedPromptMetadata | null;

    invokerJid?: string | null;
  }

  class BotMetadata implements IBotMetadata {
    constructor(properties?: proto.IBotMetadata);

    public avatarMetadata?: proto.IBotAvatarMetadata | null;

    public personaId: string;

    public pluginMetadata?: proto.IBotPluginMetadata | null;

    public suggestedPromptMetadata?: proto.IBotSuggestedPromptMetadata | null;

    public invokerJid: string;

    public static create(properties?: proto.IBotMetadata): proto.BotMetadata;

    public static encode(
      message: proto.IBotMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IBotMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.BotMetadata;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.BotMetadata;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.BotMetadata;

    public static toObject(
      message: proto.BotMetadata,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IBotPluginMetadata {
    provider?: proto.BotPluginMetadata.SearchProvider | null;

    pluginType?: proto.BotPluginMetadata.PluginType | null;

    thumbnailCdnUrl?: string | null;

    profilePhotoCdnUrl?: string | null;

    searchProviderUrl?: string | null;

    referenceIndex?: number | null;

    expectedLinksCount?: number | null;

    pluginVersion?: number | null;
  }

  class BotPluginMetadata implements IBotPluginMetadata {
    constructor(properties?: proto.IBotPluginMetadata);

    public provider: proto.BotPluginMetadata.SearchProvider;

    public pluginType: proto.BotPluginMetadata.PluginType;

    public thumbnailCdnUrl: string;

    public profilePhotoCdnUrl: string;

    public searchProviderUrl: string;

    public referenceIndex: number;

    public expectedLinksCount: number;

    public pluginVersion: number;

    public static create(
      properties?: proto.IBotPluginMetadata,
    ): proto.BotPluginMetadata;

    public static encode(
      message: proto.IBotPluginMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IBotPluginMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.BotPluginMetadata;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.BotPluginMetadata;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.BotPluginMetadata;

    public static toObject(
      message: proto.BotPluginMetadata,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace BotPluginMetadata {
    enum PluginType {
      REELS = 1,
      SEARCH = 2,
    }

    enum SearchProvider {
      BING = 1,
      GOOGLE = 2,
    }
  }

  interface IBotSuggestedPromptMetadata {
    suggestedPrompts?: string[] | null;

    selectedPromptIndex?: number | null;
  }

  class BotSuggestedPromptMetadata implements IBotSuggestedPromptMetadata {
    constructor(properties?: proto.IBotSuggestedPromptMetadata);

    public suggestedPrompts: string[];

    public selectedPromptIndex: number;

    public static create(
      properties?: proto.IBotSuggestedPromptMetadata,
    ): proto.BotSuggestedPromptMetadata;

    public static encode(
      message: proto.IBotSuggestedPromptMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IBotSuggestedPromptMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.BotSuggestedPromptMetadata;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.BotSuggestedPromptMetadata;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.BotSuggestedPromptMetadata;

    public static toObject(
      message: proto.BotSuggestedPromptMetadata,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ICallLogRecord {
    callResult?: proto.CallLogRecord.CallResult | null;

    isDndMode?: boolean | null;

    silenceReason?: proto.CallLogRecord.SilenceReason | null;

    duration?: number | Long | null;

    startTime?: number | Long | null;

    isIncoming?: boolean | null;

    isVideo?: boolean | null;

    isCallLink?: boolean | null;

    callLinkToken?: string | null;

    scheduledCallId?: string | null;

    callId?: string | null;

    callCreatorJid?: string | null;

    groupJid?: string | null;

    participants?: proto.CallLogRecord.IParticipantInfo[] | null;

    callType?: proto.CallLogRecord.CallType | null;
  }

  class CallLogRecord implements ICallLogRecord {
    constructor(properties?: proto.ICallLogRecord);

    public callResult: proto.CallLogRecord.CallResult;

    public isDndMode: boolean;

    public silenceReason: proto.CallLogRecord.SilenceReason;

    public duration: number | Long;

    public startTime: number | Long;

    public isIncoming: boolean;

    public isVideo: boolean;

    public isCallLink: boolean;

    public callLinkToken: string;

    public scheduledCallId: string;

    public callId: string;

    public callCreatorJid: string;

    public groupJid: string;

    public participants: proto.CallLogRecord.IParticipantInfo[];

    public callType: proto.CallLogRecord.CallType;

    public static create(
      properties?: proto.ICallLogRecord,
    ): proto.CallLogRecord;

    public static encode(
      message: proto.ICallLogRecord,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ICallLogRecord,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.CallLogRecord;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.CallLogRecord;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.CallLogRecord;

    public static toObject(
      message: proto.CallLogRecord,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace CallLogRecord {
    enum CallResult {
      CONNECTED = 0,
      REJECTED = 1,
      CANCELLED = 2,
      ACCEPTEDELSEWHERE = 3,
      MISSED = 4,
      INVALID = 5,
      UNAVAILABLE = 6,
      UPCOMING = 7,
      FAILED = 8,
      ABANDONED = 9,
      ONGOING = 10,
    }

    enum CallType {
      REGULAR = 0,
      SCHEDULED_CALL = 1,
      VOICE_CHAT = 2,
    }

    interface IParticipantInfo {
      userJid?: string | null;

      callResult?: proto.CallLogRecord.CallResult | null;
    }

    class ParticipantInfo implements IParticipantInfo {
      constructor(properties?: proto.CallLogRecord.IParticipantInfo);

      public userJid: string;

      public callResult: proto.CallLogRecord.CallResult;

      public static create(
        properties?: proto.CallLogRecord.IParticipantInfo,
      ): proto.CallLogRecord.ParticipantInfo;

      public static encode(
        message: proto.CallLogRecord.IParticipantInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.CallLogRecord.IParticipantInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.CallLogRecord.ParticipantInfo;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.CallLogRecord.ParticipantInfo;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.CallLogRecord.ParticipantInfo;

      public static toObject(
        message: proto.CallLogRecord.ParticipantInfo,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    enum SilenceReason {
      NONE = 0,
      SCHEDULED = 1,
      PRIVACY = 2,
      LIGHTWEIGHT = 3,
    }
  }

  interface ICertChain {
    leaf?: proto.CertChain.INoiseCertificate | null;

    intermediate?: proto.CertChain.INoiseCertificate | null;
  }

  class CertChain implements ICertChain {
    constructor(properties?: proto.ICertChain);

    public leaf?: proto.CertChain.INoiseCertificate | null;

    public intermediate?: proto.CertChain.INoiseCertificate | null;

    public static create(properties?: proto.ICertChain): proto.CertChain;

    public static encode(
      message: proto.ICertChain,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ICertChain,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.CertChain;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.CertChain;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.CertChain;

    public static toObject(
      message: proto.CertChain,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace CertChain {
    interface INoiseCertificate {
      details?: Uint8Array | null;

      signature?: Uint8Array | null;
    }

    class NoiseCertificate implements INoiseCertificate {
      constructor(properties?: proto.CertChain.INoiseCertificate);

      public details: Uint8Array;

      public signature: Uint8Array;

      public static create(
        properties?: proto.CertChain.INoiseCertificate,
      ): proto.CertChain.NoiseCertificate;

      public static encode(
        message: proto.CertChain.INoiseCertificate,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.CertChain.INoiseCertificate,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.CertChain.NoiseCertificate;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.CertChain.NoiseCertificate;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.CertChain.NoiseCertificate;

      public static toObject(
        message: proto.CertChain.NoiseCertificate,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace NoiseCertificate {
      interface IDetails {
        serial?: number | null;

        issuerSerial?: number | null;

        key?: Uint8Array | null;

        notBefore?: number | Long | null;

        notAfter?: number | Long | null;
      }

      class Details implements IDetails {
        constructor(properties?: proto.CertChain.NoiseCertificate.IDetails);

        public serial: number;

        public issuerSerial: number;

        public key: Uint8Array;

        public notBefore: number | Long;

        public notAfter: number | Long;

        public static create(
          properties?: proto.CertChain.NoiseCertificate.IDetails,
        ): proto.CertChain.NoiseCertificate.Details;

        public static encode(
          message: proto.CertChain.NoiseCertificate.IDetails,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.CertChain.NoiseCertificate.IDetails,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.CertChain.NoiseCertificate.Details;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.CertChain.NoiseCertificate.Details;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.CertChain.NoiseCertificate.Details;

        public static toObject(
          message: proto.CertChain.NoiseCertificate.Details,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }
  }

  interface IChatRowOpaqueData {
    draftMessage?: proto.ChatRowOpaqueData.IDraftMessage | null;
  }

  class ChatRowOpaqueData implements IChatRowOpaqueData {
    constructor(properties?: proto.IChatRowOpaqueData);

    public draftMessage?: proto.ChatRowOpaqueData.IDraftMessage | null;

    public static create(
      properties?: proto.IChatRowOpaqueData,
    ): proto.ChatRowOpaqueData;

    public static encode(
      message: proto.IChatRowOpaqueData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IChatRowOpaqueData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ChatRowOpaqueData;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ChatRowOpaqueData;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.ChatRowOpaqueData;

    public static toObject(
      message: proto.ChatRowOpaqueData,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace ChatRowOpaqueData {
    interface IDraftMessage {
      text?: string | null;

      omittedUrl?: string | null;

      ctwaContextLinkData?: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData | null;

      ctwaContext?: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextData | null;

      timestamp?: number | Long | null;
    }

    class DraftMessage implements IDraftMessage {
      constructor(properties?: proto.ChatRowOpaqueData.IDraftMessage);

      public text: string;

      public omittedUrl: string;

      public ctwaContextLinkData?: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData | null;

      public ctwaContext?: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextData | null;

      public timestamp: number | Long;

      public static create(
        properties?: proto.ChatRowOpaqueData.IDraftMessage,
      ): proto.ChatRowOpaqueData.DraftMessage;

      public static encode(
        message: proto.ChatRowOpaqueData.IDraftMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ChatRowOpaqueData.IDraftMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ChatRowOpaqueData.DraftMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ChatRowOpaqueData.DraftMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ChatRowOpaqueData.DraftMessage;

      public static toObject(
        message: proto.ChatRowOpaqueData.DraftMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace DraftMessage {
      interface ICtwaContextData {
        conversionSource?: string | null;

        conversionData?: Uint8Array | null;

        sourceUrl?: string | null;

        sourceId?: string | null;

        sourceType?: string | null;

        title?: string | null;

        description?: string | null;

        thumbnail?: string | null;

        thumbnailUrl?: string | null;

        mediaType?: proto.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType | null;

        mediaUrl?: string | null;

        isSuspiciousLink?: boolean | null;
      }

      class CtwaContextData implements ICtwaContextData {
        constructor(
          properties?: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextData,
        );

        public conversionSource: string;

        public conversionData: Uint8Array;

        public sourceUrl: string;

        public sourceId: string;

        public sourceType: string;

        public title: string;

        public description: string;

        public thumbnail: string;

        public thumbnailUrl: string;

        public mediaType: proto.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType;

        public mediaUrl: string;

        public isSuspiciousLink: boolean;

        public static create(
          properties?: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextData,
        ): proto.ChatRowOpaqueData.DraftMessage.CtwaContextData;

        public static encode(
          message: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextData,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextData,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.ChatRowOpaqueData.DraftMessage.CtwaContextData;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.ChatRowOpaqueData.DraftMessage.CtwaContextData;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.ChatRowOpaqueData.DraftMessage.CtwaContextData;

        public static toObject(
          message: proto.ChatRowOpaqueData.DraftMessage.CtwaContextData,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      namespace CtwaContextData {
        enum ContextInfoExternalAdReplyInfoMediaType {
          NONE = 0,
          IMAGE = 1,
          VIDEO = 2,
        }
      }

      interface ICtwaContextLinkData {
        context?: string | null;

        sourceUrl?: string | null;

        icebreaker?: string | null;

        phone?: string | null;
      }

      class CtwaContextLinkData implements ICtwaContextLinkData {
        constructor(
          properties?: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData,
        );

        public context: string;

        public sourceUrl: string;

        public icebreaker: string;

        public phone: string;

        public static create(
          properties?: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData,
        ): proto.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;

        public static encode(
          message: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;

        public static toObject(
          message: proto.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }
  }

  interface IClientPayload {
    username?: number | Long | null;

    passive?: boolean | null;

    userAgent?: proto.ClientPayload.IUserAgent | null;

    webInfo?: proto.ClientPayload.IWebInfo | null;

    pushName?: string | null;

    sessionId?: number | null;

    shortConnect?: boolean | null;

    connectType?: proto.ClientPayload.ConnectType | null;

    connectReason?: proto.ClientPayload.ConnectReason | null;

    shards?: number[] | null;

    dnsSource?: proto.ClientPayload.IDNSSource | null;

    connectAttemptCount?: number | null;

    device?: number | null;

    devicePairingData?: proto.ClientPayload.IDevicePairingRegistrationData | null;

    product?: proto.ClientPayload.Product | null;

    fbCat?: Uint8Array | null;

    fbUserAgent?: Uint8Array | null;

    oc?: boolean | null;

    lc?: number | null;

    iosAppExtension?: proto.ClientPayload.IOSAppExtension | null;

    fbAppId?: number | Long | null;

    fbDeviceId?: Uint8Array | null;

    pull?: boolean | null;

    paddingBytes?: Uint8Array | null;

    yearClass?: number | null;

    memClass?: number | null;

    interopData?: proto.ClientPayload.IInteropData | null;
  }

  class ClientPayload implements IClientPayload {
    constructor(properties?: proto.IClientPayload);

    public username: number | Long;

    public passive: boolean;

    public userAgent?: proto.ClientPayload.IUserAgent | null;

    public webInfo?: proto.ClientPayload.IWebInfo | null;

    public pushName: string;

    public sessionId: number;

    public shortConnect: boolean;

    public connectType: proto.ClientPayload.ConnectType;

    public connectReason: proto.ClientPayload.ConnectReason;

    public shards: number[];

    public dnsSource?: proto.ClientPayload.IDNSSource | null;

    public connectAttemptCount: number;

    public device: number;

    public devicePairingData?: proto.ClientPayload.IDevicePairingRegistrationData | null;

    public product: proto.ClientPayload.Product;

    public fbCat: Uint8Array;

    public fbUserAgent: Uint8Array;

    public oc: boolean;

    public lc: number;

    public iosAppExtension: proto.ClientPayload.IOSAppExtension;

    public fbAppId: number | Long;

    public fbDeviceId: Uint8Array;

    public pull: boolean;

    public paddingBytes: Uint8Array;

    public yearClass: number;

    public memClass: number;

    public interopData?: proto.ClientPayload.IInteropData | null;

    public static create(
      properties?: proto.IClientPayload,
    ): proto.ClientPayload;

    public static encode(
      message: proto.IClientPayload,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IClientPayload,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ClientPayload;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ClientPayload;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.ClientPayload;

    public static toObject(
      message: proto.ClientPayload,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace ClientPayload {
    enum ConnectReason {
      PUSH = 0,
      USER_ACTIVATED = 1,
      SCHEDULED = 2,
      ERROR_RECONNECT = 3,
      NETWORK_SWITCH = 4,
      PING_RECONNECT = 5,
      UNKNOWN = 6,
    }

    enum ConnectType {
      CELLULAR_UNKNOWN = 0,
      WIFI_UNKNOWN = 1,
      CELLULAR_EDGE = 100,
      CELLULAR_IDEN = 101,
      CELLULAR_UMTS = 102,
      CELLULAR_EVDO = 103,
      CELLULAR_GPRS = 104,
      CELLULAR_HSDPA = 105,
      CELLULAR_HSUPA = 106,
      CELLULAR_HSPA = 107,
      CELLULAR_CDMA = 108,
      CELLULAR_1XRTT = 109,
      CELLULAR_EHRPD = 110,
      CELLULAR_LTE = 111,
      CELLULAR_HSPAP = 112,
    }

    interface IDNSSource {
      dnsMethod?: proto.ClientPayload.DNSSource.DNSResolutionMethod | null;

      appCached?: boolean | null;
    }

    class DNSSource implements IDNSSource {
      constructor(properties?: proto.ClientPayload.IDNSSource);

      public dnsMethod: proto.ClientPayload.DNSSource.DNSResolutionMethod;

      public appCached: boolean;

      public static create(
        properties?: proto.ClientPayload.IDNSSource,
      ): proto.ClientPayload.DNSSource;

      public static encode(
        message: proto.ClientPayload.IDNSSource,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ClientPayload.IDNSSource,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ClientPayload.DNSSource;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ClientPayload.DNSSource;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ClientPayload.DNSSource;

      public static toObject(
        message: proto.ClientPayload.DNSSource,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace DNSSource {
      enum DNSResolutionMethod {
        SYSTEM = 0,
        GOOGLE = 1,
        HARDCODED = 2,
        OVERRIDE = 3,
        FALLBACK = 4,
      }
    }

    interface IDevicePairingRegistrationData {
      eRegid?: Uint8Array | null;

      eKeytype?: Uint8Array | null;

      eIdent?: Uint8Array | null;

      eSkeyId?: Uint8Array | null;

      eSkeyVal?: Uint8Array | null;

      eSkeySig?: Uint8Array | null;

      buildHash?: Uint8Array | null;

      deviceProps?: Uint8Array | null;
    }

    class DevicePairingRegistrationData
      implements IDevicePairingRegistrationData
    {
      constructor(
        properties?: proto.ClientPayload.IDevicePairingRegistrationData,
      );

      public eRegid: Uint8Array;

      public eKeytype: Uint8Array;

      public eIdent: Uint8Array;

      public eSkeyId: Uint8Array;

      public eSkeyVal: Uint8Array;

      public eSkeySig: Uint8Array;

      public buildHash: Uint8Array;

      public deviceProps: Uint8Array;

      public static create(
        properties?: proto.ClientPayload.IDevicePairingRegistrationData,
      ): proto.ClientPayload.DevicePairingRegistrationData;

      public static encode(
        message: proto.ClientPayload.IDevicePairingRegistrationData,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ClientPayload.IDevicePairingRegistrationData,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ClientPayload.DevicePairingRegistrationData;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ClientPayload.DevicePairingRegistrationData;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ClientPayload.DevicePairingRegistrationData;

      public static toObject(
        message: proto.ClientPayload.DevicePairingRegistrationData,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    enum IOSAppExtension {
      SHARE_EXTENSION = 0,
      SERVICE_EXTENSION = 1,
      INTENTS_EXTENSION = 2,
    }

    interface IInteropData {
      accountId?: number | Long | null;

      token?: Uint8Array | null;
    }

    class InteropData implements IInteropData {
      constructor(properties?: proto.ClientPayload.IInteropData);

      public accountId: number | Long;

      public token: Uint8Array;

      public static create(
        properties?: proto.ClientPayload.IInteropData,
      ): proto.ClientPayload.InteropData;

      public static encode(
        message: proto.ClientPayload.IInteropData,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ClientPayload.IInteropData,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ClientPayload.InteropData;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ClientPayload.InteropData;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ClientPayload.InteropData;

      public static toObject(
        message: proto.ClientPayload.InteropData,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    enum Product {
      WHATSAPP = 0,
      MESSENGER = 1,
      INTEROP = 2,
      INTEROP_MSGR = 3,
    }

    interface IUserAgent {
      platform?: proto.ClientPayload.UserAgent.Platform | null;

      appVersion?: proto.ClientPayload.UserAgent.IAppVersion | null;

      mcc?: string | null;

      mnc?: string | null;

      osVersion?: string | null;

      manufacturer?: string | null;

      device?: string | null;

      osBuildNumber?: string | null;

      phoneId?: string | null;

      releaseChannel?: proto.ClientPayload.UserAgent.ReleaseChannel | null;

      localeLanguageIso6391?: string | null;

      localeCountryIso31661Alpha2?: string | null;

      deviceBoard?: string | null;

      deviceExpId?: string | null;

      deviceType?: proto.ClientPayload.UserAgent.DeviceType | null;
    }

    class UserAgent implements IUserAgent {
      constructor(properties?: proto.ClientPayload.IUserAgent);

      public platform: proto.ClientPayload.UserAgent.Platform;

      public appVersion?: proto.ClientPayload.UserAgent.IAppVersion | null;

      public mcc: string;

      public mnc: string;

      public osVersion: string;

      public manufacturer: string;

      public device: string;

      public osBuildNumber: string;

      public phoneId: string;

      public releaseChannel: proto.ClientPayload.UserAgent.ReleaseChannel;

      public localeLanguageIso6391: string;

      public localeCountryIso31661Alpha2: string;

      public deviceBoard: string;

      public deviceExpId: string;

      public deviceType: proto.ClientPayload.UserAgent.DeviceType;

      public static create(
        properties?: proto.ClientPayload.IUserAgent,
      ): proto.ClientPayload.UserAgent;

      public static encode(
        message: proto.ClientPayload.IUserAgent,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ClientPayload.IUserAgent,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ClientPayload.UserAgent;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ClientPayload.UserAgent;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ClientPayload.UserAgent;

      public static toObject(
        message: proto.ClientPayload.UserAgent,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace UserAgent {
      interface IAppVersion {
        primary?: number | null;

        secondary?: number | null;

        tertiary?: number | null;

        quaternary?: number | null;

        quinary?: number | null;
      }

      class AppVersion implements IAppVersion {
        constructor(properties?: proto.ClientPayload.UserAgent.IAppVersion);

        public primary: number;

        public secondary: number;

        public tertiary: number;

        public quaternary: number;

        public quinary: number;

        public static create(
          properties?: proto.ClientPayload.UserAgent.IAppVersion,
        ): proto.ClientPayload.UserAgent.AppVersion;

        public static encode(
          message: proto.ClientPayload.UserAgent.IAppVersion,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.ClientPayload.UserAgent.IAppVersion,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.ClientPayload.UserAgent.AppVersion;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.ClientPayload.UserAgent.AppVersion;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.ClientPayload.UserAgent.AppVersion;

        public static toObject(
          message: proto.ClientPayload.UserAgent.AppVersion,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      enum DeviceType {
        PHONE = 0,
        TABLET = 1,
        DESKTOP = 2,
        WEARABLE = 3,
        VR = 4,
      }

      enum Platform {
        ANDROID = 0,
        IOS = 1,
        WINDOWS_PHONE = 2,
        BLACKBERRY = 3,
        BLACKBERRYX = 4,
        S40 = 5,
        S60 = 6,
        PYTHON_CLIENT = 7,
        TIZEN = 8,
        ENTERPRISE = 9,
        SMB_ANDROID = 10,
        KAIOS = 11,
        SMB_IOS = 12,
        WINDOWS = 13,
        WEB = 14,
        PORTAL = 15,
        GREEN_ANDROID = 16,
        GREEN_IPHONE = 17,
        BLUE_ANDROID = 18,
        BLUE_IPHONE = 19,
        FBLITE_ANDROID = 20,
        MLITE_ANDROID = 21,
        IGLITE_ANDROID = 22,
        PAGE = 23,
        MACOS = 24,
        OCULUS_MSG = 25,
        OCULUS_CALL = 26,
        MILAN = 27,
        CAPI = 28,
        WEAROS = 29,
        ARDEVICE = 30,
        VRDEVICE = 31,
        BLUE_WEB = 32,
        IPAD = 33,
        TEST = 34,
        SMART_GLASSES = 35,
      }

      enum ReleaseChannel {
        RELEASE = 0,
        BETA = 1,
        ALPHA = 2,
        DEBUG = 3,
      }
    }

    interface IWebInfo {
      refToken?: string | null;

      version?: string | null;

      webdPayload?: proto.ClientPayload.WebInfo.IWebdPayload | null;

      webSubPlatform?: proto.ClientPayload.WebInfo.WebSubPlatform | null;
    }

    class WebInfo implements IWebInfo {
      constructor(properties?: proto.ClientPayload.IWebInfo);

      public refToken: string;

      public version: string;

      public webdPayload?: proto.ClientPayload.WebInfo.IWebdPayload | null;

      public webSubPlatform: proto.ClientPayload.WebInfo.WebSubPlatform;

      public static create(
        properties?: proto.ClientPayload.IWebInfo,
      ): proto.ClientPayload.WebInfo;

      public static encode(
        message: proto.ClientPayload.IWebInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ClientPayload.IWebInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ClientPayload.WebInfo;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ClientPayload.WebInfo;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ClientPayload.WebInfo;

      public static toObject(
        message: proto.ClientPayload.WebInfo,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace WebInfo {
      enum WebSubPlatform {
        WEB_BROWSER = 0,
        APP_STORE = 1,
        WIN_STORE = 2,
        DARWIN = 3,
        WIN32 = 4,
      }

      interface IWebdPayload {
        usesParticipantInKey?: boolean | null;

        supportsStarredMessages?: boolean | null;

        supportsDocumentMessages?: boolean | null;

        supportsUrlMessages?: boolean | null;

        supportsMediaRetry?: boolean | null;

        supportsE2EImage?: boolean | null;

        supportsE2EVideo?: boolean | null;

        supportsE2EAudio?: boolean | null;

        supportsE2EDocument?: boolean | null;

        documentTypes?: string | null;

        features?: Uint8Array | null;
      }

      class WebdPayload implements IWebdPayload {
        constructor(properties?: proto.ClientPayload.WebInfo.IWebdPayload);

        public usesParticipantInKey: boolean;

        public supportsStarredMessages: boolean;

        public supportsDocumentMessages: boolean;

        public supportsUrlMessages: boolean;

        public supportsMediaRetry: boolean;

        public supportsE2EImage: boolean;

        public supportsE2EVideo: boolean;

        public supportsE2EAudio: boolean;

        public supportsE2EDocument: boolean;

        public documentTypes: string;

        public features: Uint8Array;

        public static create(
          properties?: proto.ClientPayload.WebInfo.IWebdPayload,
        ): proto.ClientPayload.WebInfo.WebdPayload;

        public static encode(
          message: proto.ClientPayload.WebInfo.IWebdPayload,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.ClientPayload.WebInfo.IWebdPayload,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.ClientPayload.WebInfo.WebdPayload;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.ClientPayload.WebInfo.WebdPayload;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.ClientPayload.WebInfo.WebdPayload;

        public static toObject(
          message: proto.ClientPayload.WebInfo.WebdPayload,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }
  }

  interface ICommentMetadata {
    commentParentKey?: proto.IMessageKey | null;

    replyCount?: number | null;
  }

  class CommentMetadata implements ICommentMetadata {
    constructor(properties?: proto.ICommentMetadata);

    public commentParentKey?: proto.IMessageKey | null;

    public replyCount: number;

    public static create(
      properties?: proto.ICommentMetadata,
    ): proto.CommentMetadata;

    public static encode(
      message: proto.ICommentMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ICommentMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.CommentMetadata;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.CommentMetadata;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.CommentMetadata;

    public static toObject(
      message: proto.CommentMetadata,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IContextInfo {
    stanzaId?: string | null;

    participant?: string | null;

    quotedMessage?: proto.IMessage | null;

    remoteJid?: string | null;

    mentionedJid?: string[] | null;

    conversionSource?: string | null;

    conversionData?: Uint8Array | null;

    conversionDelaySeconds?: number | null;

    forwardingScore?: number | null;

    isForwarded?: boolean | null;

    quotedAd?: proto.ContextInfo.IAdReplyInfo | null;

    placeholderKey?: proto.IMessageKey | null;

    expiration?: number | null;

    ephemeralSettingTimestamp?: number | Long | null;

    ephemeralSharedSecret?: Uint8Array | null;

    externalAdReply?: proto.ContextInfo.IExternalAdReplyInfo | null;

    entryPointConversionSource?: string | null;

    entryPointConversionApp?: string | null;

    entryPointConversionDelaySeconds?: number | null;

    disappearingMode?: proto.IDisappearingMode | null;

    actionLink?: proto.IActionLink | null;

    groupSubject?: string | null;

    parentGroupJid?: string | null;

    trustBannerType?: string | null;

    trustBannerAction?: number | null;

    isSampled?: boolean | null;

    groupMentions?: proto.IGroupMention[] | null;

    utm?: proto.ContextInfo.IUTMInfo | null;

    forwardedNewsletterMessageInfo?: proto.ContextInfo.IForwardedNewsletterMessageInfo | null;

    businessMessageForwardInfo?: proto.ContextInfo.IBusinessMessageForwardInfo | null;

    smbClientCampaignId?: string | null;

    smbServerCampaignId?: string | null;

    dataSharingContext?: proto.ContextInfo.IDataSharingContext | null;
  }

  class ContextInfo implements IContextInfo {
    constructor(properties?: proto.IContextInfo);

    public stanzaId: string;

    public participant: string;

    public quotedMessage?: proto.IMessage | null;

    public remoteJid: string;

    public mentionedJid: string[];

    public conversionSource: string;

    public conversionData: Uint8Array;

    public conversionDelaySeconds: number;

    public forwardingScore: number;

    public isForwarded: boolean;

    public quotedAd?: proto.ContextInfo.IAdReplyInfo | null;

    public placeholderKey?: proto.IMessageKey | null;

    public expiration: number;

    public ephemeralSettingTimestamp: number | Long;

    public ephemeralSharedSecret: Uint8Array;

    public externalAdReply?: proto.ContextInfo.IExternalAdReplyInfo | null;

    public entryPointConversionSource: string;

    public entryPointConversionApp: string;

    public entryPointConversionDelaySeconds: number;

    public disappearingMode?: proto.IDisappearingMode | null;

    public actionLink?: proto.IActionLink | null;

    public groupSubject: string;

    public parentGroupJid: string;

    public trustBannerType: string;

    public trustBannerAction: number;

    public isSampled: boolean;

    public groupMentions: proto.IGroupMention[];

    public utm?: proto.ContextInfo.IUTMInfo | null;

    public forwardedNewsletterMessageInfo?: proto.ContextInfo.IForwardedNewsletterMessageInfo | null;

    public businessMessageForwardInfo?: proto.ContextInfo.IBusinessMessageForwardInfo | null;

    public smbClientCampaignId: string;

    public smbServerCampaignId: string;

    public dataSharingContext?: proto.ContextInfo.IDataSharingContext | null;

    public static create(properties?: proto.IContextInfo): proto.ContextInfo;

    public static encode(
      message: proto.IContextInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IContextInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ContextInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ContextInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.ContextInfo;

    public static toObject(
      message: proto.ContextInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace ContextInfo {
    interface IAdReplyInfo {
      advertiserName?: string | null;

      mediaType?: proto.ContextInfo.AdReplyInfo.MediaType | null;

      jpegThumbnail?: Uint8Array | null;

      caption?: string | null;
    }

    class AdReplyInfo implements IAdReplyInfo {
      constructor(properties?: proto.ContextInfo.IAdReplyInfo);

      public advertiserName: string;

      public mediaType: proto.ContextInfo.AdReplyInfo.MediaType;

      public jpegThumbnail: Uint8Array;

      public caption: string;

      public static create(
        properties?: proto.ContextInfo.IAdReplyInfo,
      ): proto.ContextInfo.AdReplyInfo;

      public static encode(
        message: proto.ContextInfo.IAdReplyInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ContextInfo.IAdReplyInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ContextInfo.AdReplyInfo;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ContextInfo.AdReplyInfo;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ContextInfo.AdReplyInfo;

      public static toObject(
        message: proto.ContextInfo.AdReplyInfo,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace AdReplyInfo {
      enum MediaType {
        NONE = 0,
        IMAGE = 1,
        VIDEO = 2,
      }
    }

    interface IBusinessMessageForwardInfo {
      businessOwnerJid?: string | null;
    }

    class BusinessMessageForwardInfo implements IBusinessMessageForwardInfo {
      constructor(properties?: proto.ContextInfo.IBusinessMessageForwardInfo);

      public businessOwnerJid: string;

      public static create(
        properties?: proto.ContextInfo.IBusinessMessageForwardInfo,
      ): proto.ContextInfo.BusinessMessageForwardInfo;

      public static encode(
        message: proto.ContextInfo.IBusinessMessageForwardInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ContextInfo.IBusinessMessageForwardInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ContextInfo.BusinessMessageForwardInfo;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ContextInfo.BusinessMessageForwardInfo;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ContextInfo.BusinessMessageForwardInfo;

      public static toObject(
        message: proto.ContextInfo.BusinessMessageForwardInfo,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IDataSharingContext {
      showMmDisclosure?: boolean | null;
    }

    class DataSharingContext implements IDataSharingContext {
      constructor(properties?: proto.ContextInfo.IDataSharingContext);

      public showMmDisclosure: boolean;

      public static create(
        properties?: proto.ContextInfo.IDataSharingContext,
      ): proto.ContextInfo.DataSharingContext;

      public static encode(
        message: proto.ContextInfo.IDataSharingContext,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ContextInfo.IDataSharingContext,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ContextInfo.DataSharingContext;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ContextInfo.DataSharingContext;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ContextInfo.DataSharingContext;

      public static toObject(
        message: proto.ContextInfo.DataSharingContext,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IExternalAdReplyInfo {
      title?: string | null;

      body?: string | null;

      mediaType?: proto.ContextInfo.ExternalAdReplyInfo.MediaType | null;

      thumbnailUrl?: string | null;

      mediaUrl?: string | null;

      thumbnail?: Uint8Array | null;

      sourceType?: string | null;

      sourceId?: string | null;

      sourceUrl?: string | null;

      containsAutoReply?: boolean | null;

      renderLargerThumbnail?: boolean | null;

      showAdAttribution?: boolean | null;

      ctwaClid?: string | null;

      ref?: string | null;
    }

    class ExternalAdReplyInfo implements IExternalAdReplyInfo {
      constructor(properties?: proto.ContextInfo.IExternalAdReplyInfo);

      public title: string;

      public body: string;

      public mediaType: proto.ContextInfo.ExternalAdReplyInfo.MediaType;

      public thumbnailUrl: string;

      public mediaUrl: string;

      public thumbnail: Uint8Array;

      public sourceType: string;

      public sourceId: string;

      public sourceUrl: string;

      public containsAutoReply: boolean;

      public renderLargerThumbnail: boolean;

      public showAdAttribution: boolean;

      public ctwaClid: string;

      public ref: string;

      public static create(
        properties?: proto.ContextInfo.IExternalAdReplyInfo,
      ): proto.ContextInfo.ExternalAdReplyInfo;

      public static encode(
        message: proto.ContextInfo.IExternalAdReplyInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ContextInfo.IExternalAdReplyInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ContextInfo.ExternalAdReplyInfo;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ContextInfo.ExternalAdReplyInfo;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ContextInfo.ExternalAdReplyInfo;

      public static toObject(
        message: proto.ContextInfo.ExternalAdReplyInfo,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ExternalAdReplyInfo {
      enum MediaType {
        NONE = 0,
        IMAGE = 1,
        VIDEO = 2,
      }
    }

    interface IForwardedNewsletterMessageInfo {
      newsletterJid?: string | null;

      serverMessageId?: number | null;

      newsletterName?: string | null;

      contentType?: proto.ContextInfo.ForwardedNewsletterMessageInfo.ContentType | null;

      accessibilityText?: string | null;
    }

    class ForwardedNewsletterMessageInfo
      implements IForwardedNewsletterMessageInfo
    {
      constructor(
        properties?: proto.ContextInfo.IForwardedNewsletterMessageInfo,
      );

      public newsletterJid: string;

      public serverMessageId: number;

      public newsletterName: string;

      public contentType: proto.ContextInfo.ForwardedNewsletterMessageInfo.ContentType;

      public accessibilityText: string;

      public static create(
        properties?: proto.ContextInfo.IForwardedNewsletterMessageInfo,
      ): proto.ContextInfo.ForwardedNewsletterMessageInfo;

      public static encode(
        message: proto.ContextInfo.IForwardedNewsletterMessageInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ContextInfo.IForwardedNewsletterMessageInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ContextInfo.ForwardedNewsletterMessageInfo;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ContextInfo.ForwardedNewsletterMessageInfo;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ContextInfo.ForwardedNewsletterMessageInfo;

      public static toObject(
        message: proto.ContextInfo.ForwardedNewsletterMessageInfo,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ForwardedNewsletterMessageInfo {
      enum ContentType {
        UPDATE = 1,
        UPDATE_CARD = 2,
        LINK_CARD = 3,
      }
    }

    interface IUTMInfo {
      utmSource?: string | null;

      utmCampaign?: string | null;
    }

    class UTMInfo implements IUTMInfo {
      constructor(properties?: proto.ContextInfo.IUTMInfo);

      public utmSource: string;

      public utmCampaign: string;

      public static create(
        properties?: proto.ContextInfo.IUTMInfo,
      ): proto.ContextInfo.UTMInfo;

      public static encode(
        message: proto.ContextInfo.IUTMInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.ContextInfo.IUTMInfo,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.ContextInfo.UTMInfo;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.ContextInfo.UTMInfo;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.ContextInfo.UTMInfo;

      public static toObject(
        message: proto.ContextInfo.UTMInfo,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }
  }

  interface IConversation {
    id: string;

    messages?: proto.IHistorySyncMsg[] | null;

    newJid?: string | null;

    oldJid?: string | null;

    lastMsgTimestamp?: number | Long | null;

    unreadCount?: number | null;

    readOnly?: boolean | null;

    endOfHistoryTransfer?: boolean | null;

    ephemeralExpiration?: number | null;

    ephemeralSettingTimestamp?: number | Long | null;

    endOfHistoryTransferType?: proto.Conversation.EndOfHistoryTransferType | null;

    conversationTimestamp?: number | Long | null;

    name?: string | null;

    pHash?: string | null;

    notSpam?: boolean | null;

    archived?: boolean | null;

    disappearingMode?: proto.IDisappearingMode | null;

    unreadMentionCount?: number | null;

    markedAsUnread?: boolean | null;

    participant?: proto.IGroupParticipant[] | null;

    tcToken?: Uint8Array | null;

    tcTokenTimestamp?: number | Long | null;

    contactPrimaryIdentityKey?: Uint8Array | null;

    pinned?: number | null;

    muteEndTime?: number | Long | null;

    wallpaper?: proto.IWallpaperSettings | null;

    mediaVisibility?: proto.MediaVisibility | null;

    tcTokenSenderTimestamp?: number | Long | null;

    suspended?: boolean | null;

    terminated?: boolean | null;

    createdAt?: number | Long | null;

    createdBy?: string | null;

    description?: string | null;

    support?: boolean | null;

    isParentGroup?: boolean | null;

    parentGroupId?: string | null;

    isDefaultSubgroup?: boolean | null;

    displayName?: string | null;

    pnJid?: string | null;

    shareOwnPn?: boolean | null;

    pnhDuplicateLidThread?: boolean | null;

    lidJid?: string | null;

    username?: string | null;

    lidOriginType?: string | null;

    commentsCount?: number | null;
  }

  class Conversation implements IConversation {
    constructor(properties?: proto.IConversation);

    public id: string;

    public messages: proto.IHistorySyncMsg[];

    public newJid: string;

    public oldJid: string;

    public lastMsgTimestamp: number | Long;

    public unreadCount: number;

    public readOnly: boolean;

    public endOfHistoryTransfer: boolean;

    public ephemeralExpiration: number;

    public ephemeralSettingTimestamp: number | Long;

    public endOfHistoryTransferType: proto.Conversation.EndOfHistoryTransferType;

    public conversationTimestamp: number | Long;

    public name: string;

    public pHash: string;

    public notSpam: boolean;

    public archived: boolean;

    public disappearingMode?: proto.IDisappearingMode | null;

    public unreadMentionCount: number;

    public markedAsUnread: boolean;

    public participant: proto.IGroupParticipant[];

    public tcToken: Uint8Array;

    public tcTokenTimestamp: number | Long;

    public contactPrimaryIdentityKey: Uint8Array;

    public pinned: number;

    public muteEndTime: number | Long;

    public wallpaper?: proto.IWallpaperSettings | null;

    public mediaVisibility: proto.MediaVisibility;

    public tcTokenSenderTimestamp: number | Long;

    public suspended: boolean;

    public terminated: boolean;

    public createdAt: number | Long;

    public createdBy: string;

    public description: string;

    public support: boolean;

    public isParentGroup: boolean;

    public parentGroupId: string;

    public isDefaultSubgroup: boolean;

    public displayName: string;

    public pnJid: string;

    public shareOwnPn: boolean;

    public pnhDuplicateLidThread: boolean;

    public lidJid: string;

    public username: string;

    public lidOriginType: string;

    public commentsCount: number;

    public static create(properties?: proto.IConversation): proto.Conversation;

    public static encode(
      message: proto.IConversation,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IConversation,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.Conversation;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.Conversation;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.Conversation;

    public static toObject(
      message: proto.Conversation,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace Conversation {
    enum EndOfHistoryTransferType {
      COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY = 0,
      COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY = 1,
      COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY = 2,
    }
  }

  interface IDeviceConsistencyCodeMessage {
    generation?: number | null;

    signature?: Uint8Array | null;
  }

  class DeviceConsistencyCodeMessage implements IDeviceConsistencyCodeMessage {
    constructor(properties?: proto.IDeviceConsistencyCodeMessage);

    public generation: number;

    public signature: Uint8Array;

    public static create(
      properties?: proto.IDeviceConsistencyCodeMessage,
    ): proto.DeviceConsistencyCodeMessage;

    public static encode(
      message: proto.IDeviceConsistencyCodeMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IDeviceConsistencyCodeMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.DeviceConsistencyCodeMessage;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.DeviceConsistencyCodeMessage;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.DeviceConsistencyCodeMessage;

    public static toObject(
      message: proto.DeviceConsistencyCodeMessage,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IDeviceListMetadata {
    senderKeyHash?: Uint8Array | null;

    senderTimestamp?: number | Long | null;

    senderKeyIndexes?: number[] | null;

    senderAccountType?: proto.ADVEncryptionType | null;

    receiverAccountType?: proto.ADVEncryptionType | null;

    recipientKeyHash?: Uint8Array | null;

    recipientTimestamp?: number | Long | null;

    recipientKeyIndexes?: number[] | null;
  }

  class DeviceListMetadata implements IDeviceListMetadata {
    constructor(properties?: proto.IDeviceListMetadata);

    public senderKeyHash: Uint8Array;

    public senderTimestamp: number | Long;

    public senderKeyIndexes: number[];

    public senderAccountType: proto.ADVEncryptionType;

    public receiverAccountType: proto.ADVEncryptionType;

    public recipientKeyHash: Uint8Array;

    public recipientTimestamp: number | Long;

    public recipientKeyIndexes: number[];

    public static create(
      properties?: proto.IDeviceListMetadata,
    ): proto.DeviceListMetadata;

    public static encode(
      message: proto.IDeviceListMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IDeviceListMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.DeviceListMetadata;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.DeviceListMetadata;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.DeviceListMetadata;

    public static toObject(
      message: proto.DeviceListMetadata,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IDeviceProps {
    os?: string | null;

    version?: proto.DeviceProps.IAppVersion | null;

    platformType?: proto.DeviceProps.PlatformType | null;

    requireFullSync?: boolean | null;

    historySyncConfig?: proto.DeviceProps.IHistorySyncConfig | null;
  }

  class DeviceProps implements IDeviceProps {
    constructor(properties?: proto.IDeviceProps);

    public os: string;

    public version?: proto.DeviceProps.IAppVersion | null;

    public platformType: proto.DeviceProps.PlatformType;

    public requireFullSync: boolean;

    public historySyncConfig?: proto.DeviceProps.IHistorySyncConfig | null;

    public static create(properties?: proto.IDeviceProps): proto.DeviceProps;

    public static encode(
      message: proto.IDeviceProps,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IDeviceProps,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.DeviceProps;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.DeviceProps;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.DeviceProps;

    public static toObject(
      message: proto.DeviceProps,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace DeviceProps {
    interface IAppVersion {
      primary?: number | null;

      secondary?: number | null;

      tertiary?: number | null;

      quaternary?: number | null;

      quinary?: number | null;
    }

    class AppVersion implements IAppVersion {
      constructor(properties?: proto.DeviceProps.IAppVersion);

      public primary: number;

      public secondary: number;

      public tertiary: number;

      public quaternary: number;

      public quinary: number;

      public static create(
        properties?: proto.DeviceProps.IAppVersion,
      ): proto.DeviceProps.AppVersion;

      public static encode(
        message: proto.DeviceProps.IAppVersion,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.DeviceProps.IAppVersion,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.DeviceProps.AppVersion;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.DeviceProps.AppVersion;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.DeviceProps.AppVersion;

      public static toObject(
        message: proto.DeviceProps.AppVersion,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IHistorySyncConfig {
      fullSyncDaysLimit?: number | null;

      fullSyncSizeMbLimit?: number | null;

      storageQuotaMb?: number | null;

      inlineInitialPayloadInE2EeMsg?: boolean | null;

      recentSyncDaysLimit?: number | null;

      supportCallLogHistory?: boolean | null;

      supportBotUserAgentChatHistory?: boolean | null;

      supportCagReactionsAndPolls?: boolean | null;
    }

    class HistorySyncConfig implements IHistorySyncConfig {
      constructor(properties?: proto.DeviceProps.IHistorySyncConfig);

      public fullSyncDaysLimit: number;

      public fullSyncSizeMbLimit: number;

      public storageQuotaMb: number;

      public inlineInitialPayloadInE2EeMsg: boolean;

      public recentSyncDaysLimit: number;

      public supportCallLogHistory: boolean;

      public supportBotUserAgentChatHistory: boolean;

      public supportCagReactionsAndPolls: boolean;

      public static create(
        properties?: proto.DeviceProps.IHistorySyncConfig,
      ): proto.DeviceProps.HistorySyncConfig;

      public static encode(
        message: proto.DeviceProps.IHistorySyncConfig,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.DeviceProps.IHistorySyncConfig,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.DeviceProps.HistorySyncConfig;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.DeviceProps.HistorySyncConfig;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.DeviceProps.HistorySyncConfig;

      public static toObject(
        message: proto.DeviceProps.HistorySyncConfig,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    enum PlatformType {
      UNKNOWN = 0,
      CHROME = 1,
      FIREFOX = 2,
      IE = 3,
      OPERA = 4,
      SAFARI = 5,
      EDGE = 6,
      DESKTOP = 7,
      IPAD = 8,
      ANDROID_TABLET = 9,
      OHANA = 10,
      ALOHA = 11,
      CATALINA = 12,
      TCL_TV = 13,
      IOS_PHONE = 14,
      IOS_CATALYST = 15,
      ANDROID_PHONE = 16,
      ANDROID_AMBIGUOUS = 17,
      WEAR_OS = 18,
      AR_WRIST = 19,
      AR_DEVICE = 20,
      UWP = 21,
      VR = 22,
    }
  }

  interface IDisappearingMode {
    initiator?: proto.DisappearingMode.Initiator | null;

    trigger?: proto.DisappearingMode.Trigger | null;

    initiatorDeviceJid?: string | null;

    initiatedByMe?: boolean | null;
  }

  class DisappearingMode implements IDisappearingMode {
    constructor(properties?: proto.IDisappearingMode);

    public initiator: proto.DisappearingMode.Initiator;

    public trigger: proto.DisappearingMode.Trigger;

    public initiatorDeviceJid: string;

    public initiatedByMe: boolean;

    public static create(
      properties?: proto.IDisappearingMode,
    ): proto.DisappearingMode;

    public static encode(
      message: proto.IDisappearingMode,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IDisappearingMode,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.DisappearingMode;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.DisappearingMode;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.DisappearingMode;

    public static toObject(
      message: proto.DisappearingMode,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace DisappearingMode {
    enum Initiator {
      CHANGED_IN_CHAT = 0,
      INITIATED_BY_ME = 1,
      INITIATED_BY_OTHER = 2,
      BIZ_UPGRADE_FB_HOSTING = 3,
    }

    enum Trigger {
      UNKNOWN = 0,
      CHAT_SETTING = 1,
      ACCOUNT_SETTING = 2,
      BULK_CHANGE = 3,
      BIZ_SUPPORTS_FB_HOSTING = 4,
    }
  }

  interface IEphemeralSetting {
    duration?: number | null;

    timestamp?: number | Long | null;
  }

  class EphemeralSetting implements IEphemeralSetting {
    constructor(properties?: proto.IEphemeralSetting);

    public duration: number;

    public timestamp: number | Long;

    public static create(
      properties?: proto.IEphemeralSetting,
    ): proto.EphemeralSetting;

    public static encode(
      message: proto.IEphemeralSetting,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IEphemeralSetting,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.EphemeralSetting;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.EphemeralSetting;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.EphemeralSetting;

    public static toObject(
      message: proto.EphemeralSetting,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IEventResponse {
    eventResponseMessageKey?: proto.IMessageKey | null;

    timestampMs?: number | Long | null;

    eventResponseMessage?: proto.Message.IEventResponseMessage | null;

    unread?: boolean | null;
  }

  class EventResponse implements IEventResponse {
    constructor(properties?: proto.IEventResponse);

    public eventResponseMessageKey?: proto.IMessageKey | null;

    public timestampMs: number | Long;

    public eventResponseMessage?: proto.Message.IEventResponseMessage | null;

    public unread: boolean;

    public static create(
      properties?: proto.IEventResponse,
    ): proto.EventResponse;

    public static encode(
      message: proto.IEventResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IEventResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.EventResponse;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.EventResponse;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.EventResponse;

    public static toObject(
      message: proto.EventResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IExitCode {
    code?: number | Long | null;

    text?: string | null;
  }

  class ExitCode implements IExitCode {
    constructor(properties?: proto.IExitCode);

    public code: number | Long;

    public text: string;

    public static create(properties?: proto.IExitCode): proto.ExitCode;

    public static encode(
      message: proto.IExitCode,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IExitCode,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ExitCode;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ExitCode;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.ExitCode;

    public static toObject(
      message: proto.ExitCode,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IExternalBlobReference {
    mediaKey?: Uint8Array | null;

    directPath?: string | null;

    handle?: string | null;

    fileSizeBytes?: number | Long | null;

    fileSha256?: Uint8Array | null;

    fileEncSha256?: Uint8Array | null;
  }

  class ExternalBlobReference implements IExternalBlobReference {
    constructor(properties?: proto.IExternalBlobReference);

    public mediaKey: Uint8Array;

    public directPath: string;

    public handle: string;

    public fileSizeBytes: number | Long;

    public fileSha256: Uint8Array;

    public fileEncSha256: Uint8Array;

    public static create(
      properties?: proto.IExternalBlobReference,
    ): proto.ExternalBlobReference;

    public static encode(
      message: proto.IExternalBlobReference,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IExternalBlobReference,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ExternalBlobReference;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ExternalBlobReference;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.ExternalBlobReference;

    public static toObject(
      message: proto.ExternalBlobReference,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IGlobalSettings {
    lightThemeWallpaper?: proto.IWallpaperSettings | null;

    mediaVisibility?: proto.MediaVisibility | null;

    darkThemeWallpaper?: proto.IWallpaperSettings | null;

    autoDownloadWiFi?: proto.IAutoDownloadSettings | null;

    autoDownloadCellular?: proto.IAutoDownloadSettings | null;

    autoDownloadRoaming?: proto.IAutoDownloadSettings | null;

    showIndividualNotificationsPreview?: boolean | null;

    showGroupNotificationsPreview?: boolean | null;

    disappearingModeDuration?: number | null;

    disappearingModeTimestamp?: number | Long | null;

    avatarUserSettings?: proto.IAvatarUserSettings | null;

    fontSize?: number | null;

    securityNotifications?: boolean | null;

    autoUnarchiveChats?: boolean | null;

    videoQualityMode?: number | null;

    photoQualityMode?: number | null;

    individualNotificationSettings?: proto.INotificationSettings | null;

    groupNotificationSettings?: proto.INotificationSettings | null;
  }

  class GlobalSettings implements IGlobalSettings {
    constructor(properties?: proto.IGlobalSettings);

    public lightThemeWallpaper?: proto.IWallpaperSettings | null;

    public mediaVisibility: proto.MediaVisibility;

    public darkThemeWallpaper?: proto.IWallpaperSettings | null;

    public autoDownloadWiFi?: proto.IAutoDownloadSettings | null;

    public autoDownloadCellular?: proto.IAutoDownloadSettings | null;

    public autoDownloadRoaming?: proto.IAutoDownloadSettings | null;

    public showIndividualNotificationsPreview: boolean;

    public showGroupNotificationsPreview: boolean;

    public disappearingModeDuration: number;

    public disappearingModeTimestamp: number | Long;

    public avatarUserSettings?: proto.IAvatarUserSettings | null;

    public fontSize: number;

    public securityNotifications: boolean;

    public autoUnarchiveChats: boolean;

    public videoQualityMode: number;

    public photoQualityMode: number;

    public individualNotificationSettings?: proto.INotificationSettings | null;

    public groupNotificationSettings?: proto.INotificationSettings | null;

    public static create(
      properties?: proto.IGlobalSettings,
    ): proto.GlobalSettings;

    public static encode(
      message: proto.IGlobalSettings,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IGlobalSettings,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.GlobalSettings;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.GlobalSettings;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.GlobalSettings;

    public static toObject(
      message: proto.GlobalSettings,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IGroupMention {
    groupJid?: string | null;

    groupSubject?: string | null;
  }

  class GroupMention implements IGroupMention {
    constructor(properties?: proto.IGroupMention);

    public groupJid: string;

    public groupSubject: string;

    public static create(properties?: proto.IGroupMention): proto.GroupMention;

    public static encode(
      message: proto.IGroupMention,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IGroupMention,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.GroupMention;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.GroupMention;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.GroupMention;

    public static toObject(
      message: proto.GroupMention,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IGroupParticipant {
    userJid: string;

    rank?: proto.GroupParticipant.Rank | null;
  }

  class GroupParticipant implements IGroupParticipant {
    constructor(properties?: proto.IGroupParticipant);

    public userJid: string;

    public rank: proto.GroupParticipant.Rank;

    public static create(
      properties?: proto.IGroupParticipant,
    ): proto.GroupParticipant;

    public static encode(
      message: proto.IGroupParticipant,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IGroupParticipant,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.GroupParticipant;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.GroupParticipant;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.GroupParticipant;

    public static toObject(
      message: proto.GroupParticipant,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace GroupParticipant {
    enum Rank {
      REGULAR = 0,
      ADMIN = 1,
      SUPERADMIN = 2,
    }
  }

  interface IHandshakeMessage {
    clientHello?: proto.HandshakeMessage.IClientHello | null;

    serverHello?: proto.HandshakeMessage.IServerHello | null;

    clientFinish?: proto.HandshakeMessage.IClientFinish | null;
  }

  class HandshakeMessage implements IHandshakeMessage {
    constructor(properties?: proto.IHandshakeMessage);

    public clientHello?: proto.HandshakeMessage.IClientHello | null;

    public serverHello?: proto.HandshakeMessage.IServerHello | null;

    public clientFinish?: proto.HandshakeMessage.IClientFinish | null;

    public static create(
      properties?: proto.IHandshakeMessage,
    ): proto.HandshakeMessage;

    public static encode(
      message: proto.IHandshakeMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IHandshakeMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.HandshakeMessage;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.HandshakeMessage;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.HandshakeMessage;

    public static toObject(
      message: proto.HandshakeMessage,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace HandshakeMessage {
    interface IClientFinish {
      static?: Uint8Array | null;

      payload?: Uint8Array | null;
    }

    class ClientFinish implements IClientFinish {
      constructor(properties?: proto.HandshakeMessage.IClientFinish);

      public static: Uint8Array;

      public payload: Uint8Array;

      public static create(
        properties?: proto.HandshakeMessage.IClientFinish,
      ): proto.HandshakeMessage.ClientFinish;

      public static encode(
        message: proto.HandshakeMessage.IClientFinish,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.HandshakeMessage.IClientFinish,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.HandshakeMessage.ClientFinish;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.HandshakeMessage.ClientFinish;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.HandshakeMessage.ClientFinish;

      public static toObject(
        message: proto.HandshakeMessage.ClientFinish,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IClientHello {
      ephemeral?: Uint8Array | null;

      static?: Uint8Array | null;

      payload?: Uint8Array | null;
    }

    class ClientHello implements IClientHello {
      constructor(properties?: proto.HandshakeMessage.IClientHello);

      public ephemeral: Uint8Array;

      public static: Uint8Array;

      public payload: Uint8Array;

      public static create(
        properties?: proto.HandshakeMessage.IClientHello,
      ): proto.HandshakeMessage.ClientHello;

      public static encode(
        message: proto.HandshakeMessage.IClientHello,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.HandshakeMessage.IClientHello,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.HandshakeMessage.ClientHello;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.HandshakeMessage.ClientHello;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.HandshakeMessage.ClientHello;

      public static toObject(
        message: proto.HandshakeMessage.ClientHello,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IServerHello {
      ephemeral?: Uint8Array | null;

      static?: Uint8Array | null;

      payload?: Uint8Array | null;
    }

    class ServerHello implements IServerHello {
      constructor(properties?: proto.HandshakeMessage.IServerHello);

      public ephemeral: Uint8Array;

      public static: Uint8Array;

      public payload: Uint8Array;

      public static create(
        properties?: proto.HandshakeMessage.IServerHello,
      ): proto.HandshakeMessage.ServerHello;

      public static encode(
        message: proto.HandshakeMessage.IServerHello,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.HandshakeMessage.IServerHello,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.HandshakeMessage.ServerHello;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.HandshakeMessage.ServerHello;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.HandshakeMessage.ServerHello;

      public static toObject(
        message: proto.HandshakeMessage.ServerHello,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }
  }

  interface IHistorySync {
    syncType: proto.HistorySync.HistorySyncType;

    conversations?: proto.IConversation[] | null;

    statusV3Messages?: proto.IWebMessageInfo[] | null;

    chunkOrder?: number | null;

    progress?: number | null;

    pushnames?: proto.IPushname[] | null;

    globalSettings?: proto.IGlobalSettings | null;

    threadIdUserSecret?: Uint8Array | null;

    threadDsTimeframeOffset?: number | null;

    recentStickers?: proto.IStickerMetadata[] | null;

    pastParticipants?: proto.IPastParticipants[] | null;

    callLogRecords?: proto.ICallLogRecord[] | null;

    aiWaitListState?: proto.HistorySync.BotAIWaitListState | null;

    phoneNumberToLidMappings?: proto.IPhoneNumberToLIDMapping[] | null;
  }

  class HistorySync implements IHistorySync {
    constructor(properties?: proto.IHistorySync);

    public syncType: proto.HistorySync.HistorySyncType;

    public conversations: proto.IConversation[];

    public statusV3Messages: proto.IWebMessageInfo[];

    public chunkOrder: number;

    public progress: number;

    public pushnames: proto.IPushname[];

    public globalSettings?: proto.IGlobalSettings | null;

    public threadIdUserSecret: Uint8Array;

    public threadDsTimeframeOffset: number;

    public recentStickers: proto.IStickerMetadata[];

    public pastParticipants: proto.IPastParticipants[];

    public callLogRecords: proto.ICallLogRecord[];

    public aiWaitListState: proto.HistorySync.BotAIWaitListState;

    public phoneNumberToLidMappings: proto.IPhoneNumberToLIDMapping[];

    public static create(properties?: proto.IHistorySync): proto.HistorySync;

    public static encode(
      message: proto.IHistorySync,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IHistorySync,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.HistorySync;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.HistorySync;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.HistorySync;

    public static toObject(
      message: proto.HistorySync,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace HistorySync {
    enum BotAIWaitListState {
      IN_WAITLIST = 0,
      AI_AVAILABLE = 1,
    }

    enum HistorySyncType {
      INITIAL_BOOTSTRAP = 0,
      INITIAL_STATUS_V3 = 1,
      FULL = 2,
      RECENT = 3,
      PUSH_NAME = 4,
      NON_BLOCKING_DATA = 5,
      ON_DEMAND = 6,
    }
  }

  interface IHistorySyncMsg {
    message?: proto.IWebMessageInfo | null;

    msgOrderId?: number | Long | null;
  }

  class HistorySyncMsg implements IHistorySyncMsg {
    constructor(properties?: proto.IHistorySyncMsg);

    public message?: proto.IWebMessageInfo | null;

    public msgOrderId: number | Long;

    public static create(
      properties?: proto.IHistorySyncMsg,
    ): proto.HistorySyncMsg;

    public static encode(
      message: proto.IHistorySyncMsg,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IHistorySyncMsg,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.HistorySyncMsg;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.HistorySyncMsg;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.HistorySyncMsg;

    public static toObject(
      message: proto.HistorySyncMsg,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IHydratedTemplateButton {
    index?: number | null;

    quickReplyButton?: proto.HydratedTemplateButton.IHydratedQuickReplyButton | null;

    urlButton?: proto.HydratedTemplateButton.IHydratedURLButton | null;

    callButton?: proto.HydratedTemplateButton.IHydratedCallButton | null;
  }

  class HydratedTemplateButton implements IHydratedTemplateButton {
    constructor(properties?: proto.IHydratedTemplateButton);

    public index: number;

    public quickReplyButton?: proto.HydratedTemplateButton.IHydratedQuickReplyButton | null;

    public urlButton?: proto.HydratedTemplateButton.IHydratedURLButton | null;

    public callButton?: proto.HydratedTemplateButton.IHydratedCallButton | null;

    public hydratedButton?: "quickReplyButton" | "urlButton" | "callButton";

    public static create(
      properties?: proto.IHydratedTemplateButton,
    ): proto.HydratedTemplateButton;

    public static encode(
      message: proto.IHydratedTemplateButton,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IHydratedTemplateButton,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.HydratedTemplateButton;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.HydratedTemplateButton;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.HydratedTemplateButton;

    public static toObject(
      message: proto.HydratedTemplateButton,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace HydratedTemplateButton {
    interface IHydratedCallButton {
      displayText?: string | null;

      phoneNumber?: string | null;
    }

    class HydratedCallButton implements IHydratedCallButton {
      constructor(
        properties?: proto.HydratedTemplateButton.IHydratedCallButton,
      );

      public displayText: string;

      public phoneNumber: string;

      public static create(
        properties?: proto.HydratedTemplateButton.IHydratedCallButton,
      ): proto.HydratedTemplateButton.HydratedCallButton;

      public static encode(
        message: proto.HydratedTemplateButton.IHydratedCallButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.HydratedTemplateButton.IHydratedCallButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.HydratedTemplateButton.HydratedCallButton;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.HydratedTemplateButton.HydratedCallButton;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.HydratedTemplateButton.HydratedCallButton;

      public static toObject(
        message: proto.HydratedTemplateButton.HydratedCallButton,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IHydratedQuickReplyButton {
      displayText?: string | null;

      id?: string | null;
    }

    class HydratedQuickReplyButton implements IHydratedQuickReplyButton {
      constructor(
        properties?: proto.HydratedTemplateButton.IHydratedQuickReplyButton,
      );

      public displayText: string;

      public id: string;

      public static create(
        properties?: proto.HydratedTemplateButton.IHydratedQuickReplyButton,
      ): proto.HydratedTemplateButton.HydratedQuickReplyButton;

      public static encode(
        message: proto.HydratedTemplateButton.IHydratedQuickReplyButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.HydratedTemplateButton.IHydratedQuickReplyButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.HydratedTemplateButton.HydratedQuickReplyButton;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.HydratedTemplateButton.HydratedQuickReplyButton;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.HydratedTemplateButton.HydratedQuickReplyButton;

      public static toObject(
        message: proto.HydratedTemplateButton.HydratedQuickReplyButton,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IHydratedURLButton {
      displayText?: string | null;

      url?: string | null;

      consentedUsersUrl?: string | null;

      webviewPresentation?: proto.HydratedTemplateButton.HydratedURLButton.WebviewPresentationType | null;
    }

    class HydratedURLButton implements IHydratedURLButton {
      constructor(properties?: proto.HydratedTemplateButton.IHydratedURLButton);

      public displayText: string;

      public url: string;

      public consentedUsersUrl: string;

      public webviewPresentation: proto.HydratedTemplateButton.HydratedURLButton.WebviewPresentationType;

      public static create(
        properties?: proto.HydratedTemplateButton.IHydratedURLButton,
      ): proto.HydratedTemplateButton.HydratedURLButton;

      public static encode(
        message: proto.HydratedTemplateButton.IHydratedURLButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.HydratedTemplateButton.IHydratedURLButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.HydratedTemplateButton.HydratedURLButton;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.HydratedTemplateButton.HydratedURLButton;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.HydratedTemplateButton.HydratedURLButton;

      public static toObject(
        message: proto.HydratedTemplateButton.HydratedURLButton,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace HydratedURLButton {
      enum WebviewPresentationType {
        FULL = 1,
        TALL = 2,
        COMPACT = 3,
      }
    }
  }

  interface IIdentityKeyPairStructure {
    publicKey?: Uint8Array | null;

    privateKey?: Uint8Array | null;
  }

  class IdentityKeyPairStructure implements IIdentityKeyPairStructure {
    constructor(properties?: proto.IIdentityKeyPairStructure);

    public publicKey: Uint8Array;

    public privateKey: Uint8Array;

    public static create(
      properties?: proto.IIdentityKeyPairStructure,
    ): proto.IdentityKeyPairStructure;

    public static encode(
      message: proto.IIdentityKeyPairStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IIdentityKeyPairStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.IdentityKeyPairStructure;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.IdentityKeyPairStructure;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.IdentityKeyPairStructure;

    public static toObject(
      message: proto.IdentityKeyPairStructure,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IInteractiveAnnotation {
    polygonVertices?: proto.IPoint[] | null;

    shouldSkipConfirmation?: boolean | null;

    location?: proto.ILocation | null;

    newsletter?: proto.ContextInfo.IForwardedNewsletterMessageInfo | null;
  }

  class InteractiveAnnotation implements IInteractiveAnnotation {
    constructor(properties?: proto.IInteractiveAnnotation);

    public polygonVertices: proto.IPoint[];

    public shouldSkipConfirmation: boolean;

    public location?: proto.ILocation | null;

    public newsletter?: proto.ContextInfo.IForwardedNewsletterMessageInfo | null;

    public action?: "location" | "newsletter";

    public static create(
      properties?: proto.IInteractiveAnnotation,
    ): proto.InteractiveAnnotation;

    public static encode(
      message: proto.IInteractiveAnnotation,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IInteractiveAnnotation,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.InteractiveAnnotation;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.InteractiveAnnotation;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.InteractiveAnnotation;

    public static toObject(
      message: proto.InteractiveAnnotation,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IKeepInChat {
    keepType?: proto.KeepType | null;

    serverTimestamp?: number | Long | null;

    key?: proto.IMessageKey | null;

    deviceJid?: string | null;

    clientTimestampMs?: number | Long | null;

    serverTimestampMs?: number | Long | null;
  }

  class KeepInChat implements IKeepInChat {
    constructor(properties?: proto.IKeepInChat);

    public keepType: proto.KeepType;

    public serverTimestamp: number | Long;

    public key?: proto.IMessageKey | null;

    public deviceJid: string;

    public clientTimestampMs: number | Long;

    public serverTimestampMs: number | Long;

    public static create(properties?: proto.IKeepInChat): proto.KeepInChat;

    public static encode(
      message: proto.IKeepInChat,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IKeepInChat,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.KeepInChat;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.KeepInChat;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.KeepInChat;

    public static toObject(
      message: proto.KeepInChat,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  enum KeepType {
    UNKNOWN = 0,
    KEEP_FOR_ALL = 1,
    UNDO_KEEP_FOR_ALL = 2,
  }

  interface IKeyExchangeMessage {
    id?: number | null;

    baseKey?: Uint8Array | null;

    ratchetKey?: Uint8Array | null;

    identityKey?: Uint8Array | null;

    baseKeySignature?: Uint8Array | null;
  }

  class KeyExchangeMessage implements IKeyExchangeMessage {
    constructor(properties?: proto.IKeyExchangeMessage);

    public id: number;

    public baseKey: Uint8Array;

    public ratchetKey: Uint8Array;

    public identityKey: Uint8Array;

    public baseKeySignature: Uint8Array;

    public static create(
      properties?: proto.IKeyExchangeMessage,
    ): proto.KeyExchangeMessage;

    public static encode(
      message: proto.IKeyExchangeMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IKeyExchangeMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.KeyExchangeMessage;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.KeyExchangeMessage;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.KeyExchangeMessage;

    public static toObject(
      message: proto.KeyExchangeMessage,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IKeyId {
    id?: Uint8Array | null;
  }

  class KeyId implements IKeyId {
    constructor(properties?: proto.IKeyId);

    public id: Uint8Array;

    public static create(properties?: proto.IKeyId): proto.KeyId;

    public static encode(
      message: proto.IKeyId,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IKeyId,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.KeyId;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.KeyId;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.KeyId;

    public static toObject(
      message: proto.KeyId,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ILocalizedName {
    lg?: string | null;

    lc?: string | null;

    verifiedName?: string | null;
  }

  class LocalizedName implements ILocalizedName {
    constructor(properties?: proto.ILocalizedName);

    public lg: string;

    public lc: string;

    public verifiedName: string;

    public static create(
      properties?: proto.ILocalizedName,
    ): proto.LocalizedName;

    public static encode(
      message: proto.ILocalizedName,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ILocalizedName,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.LocalizedName;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.LocalizedName;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.LocalizedName;

    public static toObject(
      message: proto.LocalizedName,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ILocation {
    degreesLatitude?: number | null;

    degreesLongitude?: number | null;

    name?: string | null;
  }

  class Location implements ILocation {
    constructor(properties?: proto.ILocation);

    public degreesLatitude: number;

    public degreesLongitude: number;

    public name: string;

    public static create(properties?: proto.ILocation): proto.Location;

    public static encode(
      message: proto.ILocation,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ILocation,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.Location;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.Location;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.Location;

    public static toObject(
      message: proto.Location,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IMediaData {
    localPath?: string | null;
  }

  class MediaData implements IMediaData {
    constructor(properties?: proto.IMediaData);

    public localPath: string;

    public static create(properties?: proto.IMediaData): proto.MediaData;

    public static encode(
      message: proto.IMediaData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMediaData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.MediaData;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.MediaData;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.MediaData;

    public static toObject(
      message: proto.MediaData,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IMediaEntry {
    fileSha256?: Uint8Array | null;

    mediaKey?: Uint8Array | null;

    fileEncSha256?: Uint8Array | null;

    directPath?: string | null;

    mediaKeyTimestamp?: number | Long | null;

    serverMediaType?: string | null;

    uploadToken?: Uint8Array | null;

    validatedTimestamp?: Uint8Array | null;

    sidecar?: Uint8Array | null;

    objectId?: string | null;

    fbid?: string | null;

    downloadableThumbnail?: proto.MediaEntry.IDownloadableThumbnail | null;

    handle?: string | null;

    filename?: string | null;

    progressiveJpegDetails?: proto.MediaEntry.IProgressiveJpegDetails | null;
  }

  class MediaEntry implements IMediaEntry {
    constructor(properties?: proto.IMediaEntry);

    public fileSha256: Uint8Array;

    public mediaKey: Uint8Array;

    public fileEncSha256: Uint8Array;

    public directPath: string;

    public mediaKeyTimestamp: number | Long;

    public serverMediaType: string;

    public uploadToken: Uint8Array;

    public validatedTimestamp: Uint8Array;

    public sidecar: Uint8Array;

    public objectId: string;

    public fbid: string;

    public downloadableThumbnail?: proto.MediaEntry.IDownloadableThumbnail | null;

    public handle: string;

    public filename: string;

    public progressiveJpegDetails?: proto.MediaEntry.IProgressiveJpegDetails | null;

    public static create(properties?: proto.IMediaEntry): proto.MediaEntry;

    public static encode(
      message: proto.IMediaEntry,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMediaEntry,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.MediaEntry;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.MediaEntry;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.MediaEntry;

    public static toObject(
      message: proto.MediaEntry,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace MediaEntry {
    interface IDownloadableThumbnail {
      fileSha256?: Uint8Array | null;

      fileEncSha256?: Uint8Array | null;

      directPath?: string | null;

      mediaKey?: Uint8Array | null;

      mediaKeyTimestamp?: number | Long | null;

      objectId?: string | null;
    }

    class DownloadableThumbnail implements IDownloadableThumbnail {
      constructor(properties?: proto.MediaEntry.IDownloadableThumbnail);

      public fileSha256: Uint8Array;

      public fileEncSha256: Uint8Array;

      public directPath: string;

      public mediaKey: Uint8Array;

      public mediaKeyTimestamp: number | Long;

      public objectId: string;

      public static create(
        properties?: proto.MediaEntry.IDownloadableThumbnail,
      ): proto.MediaEntry.DownloadableThumbnail;

      public static encode(
        message: proto.MediaEntry.IDownloadableThumbnail,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.MediaEntry.IDownloadableThumbnail,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.MediaEntry.DownloadableThumbnail;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.MediaEntry.DownloadableThumbnail;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.MediaEntry.DownloadableThumbnail;

      public static toObject(
        message: proto.MediaEntry.DownloadableThumbnail,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IProgressiveJpegDetails {
      scanLengths?: (number | Long)[] | null;

      sidecar?: Uint8Array | null;
    }

    class ProgressiveJpegDetails implements IProgressiveJpegDetails {
      constructor(properties?: proto.MediaEntry.IProgressiveJpegDetails);

      public scanLengths: (number | Long)[];

      public sidecar: Uint8Array;

      public static create(
        properties?: proto.MediaEntry.IProgressiveJpegDetails,
      ): proto.MediaEntry.ProgressiveJpegDetails;

      public static encode(
        message: proto.MediaEntry.IProgressiveJpegDetails,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.MediaEntry.IProgressiveJpegDetails,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.MediaEntry.ProgressiveJpegDetails;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.MediaEntry.ProgressiveJpegDetails;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.MediaEntry.ProgressiveJpegDetails;

      public static toObject(
        message: proto.MediaEntry.ProgressiveJpegDetails,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }
  }

  interface IMediaNotifyMessage {
    expressPathUrl?: string | null;

    fileEncSha256?: Uint8Array | null;

    fileLength?: number | Long | null;
  }

  class MediaNotifyMessage implements IMediaNotifyMessage {
    constructor(properties?: proto.IMediaNotifyMessage);

    public expressPathUrl: string;

    public fileEncSha256: Uint8Array;

    public fileLength: number | Long;

    public static create(
      properties?: proto.IMediaNotifyMessage,
    ): proto.MediaNotifyMessage;

    public static encode(
      message: proto.IMediaNotifyMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMediaNotifyMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.MediaNotifyMessage;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.MediaNotifyMessage;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.MediaNotifyMessage;

    public static toObject(
      message: proto.MediaNotifyMessage,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IMediaRetryNotification {
    stanzaId?: string | null;

    directPath?: string | null;

    result?: proto.MediaRetryNotification.ResultType | null;
  }

  class MediaRetryNotification implements IMediaRetryNotification {
    constructor(properties?: proto.IMediaRetryNotification);

    public stanzaId: string;

    public directPath: string;

    public result: proto.MediaRetryNotification.ResultType;

    public static create(
      properties?: proto.IMediaRetryNotification,
    ): proto.MediaRetryNotification;

    public static encode(
      message: proto.IMediaRetryNotification,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMediaRetryNotification,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.MediaRetryNotification;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.MediaRetryNotification;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.MediaRetryNotification;

    public static toObject(
      message: proto.MediaRetryNotification,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace MediaRetryNotification {
    enum ResultType {
      GENERAL_ERROR = 0,
      SUCCESS = 1,
      NOT_FOUND = 2,
      DECRYPTION_ERROR = 3,
    }
  }

  enum MediaVisibility {
    DEFAULT = 0,
    OFF = 1,
    ON = 2,
  }

  interface IMessage {
    conversation?: string | null;

    senderKeyDistributionMessage?: proto.Message.ISenderKeyDistributionMessage | null;

    imageMessage?: proto.Message.IImageMessage | null;

    contactMessage?: proto.Message.IContactMessage | null;

    locationMessage?: proto.Message.ILocationMessage | null;

    extendedTextMessage?: proto.Message.IExtendedTextMessage | null;

    documentMessage?: proto.Message.IDocumentMessage | null;

    audioMessage?: proto.Message.IAudioMessage | null;

    videoMessage?: proto.Message.IVideoMessage | null;

    call?: proto.Message.ICall | null;

    chat?: proto.Message.IChat | null;

    protocolMessage?: proto.Message.IProtocolMessage | null;

    contactsArrayMessage?: proto.Message.IContactsArrayMessage | null;

    highlyStructuredMessage?: proto.Message.IHighlyStructuredMessage | null;

    fastRatchetKeySenderKeyDistributionMessage?: proto.Message.ISenderKeyDistributionMessage | null;

    sendPaymentMessage?: proto.Message.ISendPaymentMessage | null;

    liveLocationMessage?: proto.Message.ILiveLocationMessage | null;

    requestPaymentMessage?: proto.Message.IRequestPaymentMessage | null;

    declinePaymentRequestMessage?: proto.Message.IDeclinePaymentRequestMessage | null;

    cancelPaymentRequestMessage?: proto.Message.ICancelPaymentRequestMessage | null;

    templateMessage?: proto.Message.ITemplateMessage | null;

    stickerMessage?: proto.Message.IStickerMessage | null;

    groupInviteMessage?: proto.Message.IGroupInviteMessage | null;

    templateButtonReplyMessage?: proto.Message.ITemplateButtonReplyMessage | null;

    productMessage?: proto.Message.IProductMessage | null;

    deviceSentMessage?: proto.Message.IDeviceSentMessage | null;

    messageContextInfo?: proto.IMessageContextInfo | null;

    listMessage?: proto.Message.IListMessage | null;

    viewOnceMessage?: proto.Message.IFutureProofMessage | null;

    orderMessage?: proto.Message.IOrderMessage | null;

    listResponseMessage?: proto.Message.IListResponseMessage | null;

    ephemeralMessage?: proto.Message.IFutureProofMessage | null;

    invoiceMessage?: proto.Message.IInvoiceMessage | null;

    buttonsMessage?: proto.Message.IButtonsMessage | null;

    buttonsResponseMessage?: proto.Message.IButtonsResponseMessage | null;

    paymentInviteMessage?: proto.Message.IPaymentInviteMessage | null;

    interactiveMessage?: proto.Message.IInteractiveMessage | null;

    reactionMessage?: proto.Message.IReactionMessage | null;

    stickerSyncRmrMessage?: proto.Message.IStickerSyncRMRMessage | null;

    interactiveResponseMessage?: proto.Message.IInteractiveResponseMessage | null;

    pollCreationMessage?: proto.Message.IPollCreationMessage | null;

    pollUpdateMessage?: proto.Message.IPollUpdateMessage | null;

    keepInChatMessage?: proto.Message.IKeepInChatMessage | null;

    documentWithCaptionMessage?: proto.Message.IFutureProofMessage | null;

    requestPhoneNumberMessage?: proto.Message.IRequestPhoneNumberMessage | null;

    viewOnceMessageV2?: proto.Message.IFutureProofMessage | null;

    encReactionMessage?: proto.Message.IEncReactionMessage | null;

    editedMessage?: proto.Message.IFutureProofMessage | null;

    viewOnceMessageV2Extension?: proto.Message.IFutureProofMessage | null;

    pollCreationMessageV2?: proto.Message.IPollCreationMessage | null;

    scheduledCallCreationMessage?: proto.Message.IScheduledCallCreationMessage | null;

    groupMentionedMessage?: proto.Message.IFutureProofMessage | null;

    pinInChatMessage?: proto.Message.IPinInChatMessage | null;

    pollCreationMessageV3?: proto.Message.IPollCreationMessage | null;

    scheduledCallEditMessage?: proto.Message.IScheduledCallEditMessage | null;

    ptvMessage?: proto.Message.IVideoMessage | null;

    botInvokeMessage?: proto.Message.IFutureProofMessage | null;

    callLogMesssage?: proto.Message.ICallLogMessage | null;

    messageHistoryBundle?: proto.Message.IMessageHistoryBundle | null;

    encCommentMessage?: proto.Message.IEncCommentMessage | null;

    bcallMessage?: proto.Message.IBCallMessage | null;

    lottieStickerMessage?: proto.Message.IFutureProofMessage | null;

    eventMessage?: proto.Message.IEventMessage | null;

    commentMessage?: proto.Message.ICommentMessage | null;

    newsletterAdminInviteMessage?: proto.Message.INewsletterAdminInviteMessage | null;

    extendedTextMessageWithParentKey?: proto.Message.IExtendedTextMessageWithParentKey | null;

    placeholderMessage?: proto.Message.IPlaceholderMessage | null;

    encEventUpdateMessage?: proto.Message.IEncEventUpdateMessage | null;
  }

  class Message implements IMessage {
    constructor(properties?: proto.IMessage);

    public conversation: string;

    public senderKeyDistributionMessage?: proto.Message.ISenderKeyDistributionMessage | null;

    public imageMessage?: proto.Message.IImageMessage | null;

    public contactMessage?: proto.Message.IContactMessage | null;

    public locationMessage?: proto.Message.ILocationMessage | null;

    public extendedTextMessage?: proto.Message.IExtendedTextMessage | null;

    public documentMessage?: proto.Message.IDocumentMessage | null;

    public audioMessage?: proto.Message.IAudioMessage | null;

    public videoMessage?: proto.Message.IVideoMessage | null;

    public call?: proto.Message.ICall | null;

    public chat?: proto.Message.IChat | null;

    public protocolMessage?: proto.Message.IProtocolMessage | null;

    public contactsArrayMessage?: proto.Message.IContactsArrayMessage | null;

    public highlyStructuredMessage?: proto.Message.IHighlyStructuredMessage | null;

    public fastRatchetKeySenderKeyDistributionMessage?: proto.Message.ISenderKeyDistributionMessage | null;

    public sendPaymentMessage?: proto.Message.ISendPaymentMessage | null;

    public liveLocationMessage?: proto.Message.ILiveLocationMessage | null;

    public requestPaymentMessage?: proto.Message.IRequestPaymentMessage | null;

    public declinePaymentRequestMessage?: proto.Message.IDeclinePaymentRequestMessage | null;

    public cancelPaymentRequestMessage?: proto.Message.ICancelPaymentRequestMessage | null;

    public templateMessage?: proto.Message.ITemplateMessage | null;

    public stickerMessage?: proto.Message.IStickerMessage | null;

    public groupInviteMessage?: proto.Message.IGroupInviteMessage | null;

    public templateButtonReplyMessage?: proto.Message.ITemplateButtonReplyMessage | null;

    public productMessage?: proto.Message.IProductMessage | null;

    public deviceSentMessage?: proto.Message.IDeviceSentMessage | null;

    public messageContextInfo?: proto.IMessageContextInfo | null;

    public listMessage?: proto.Message.IListMessage | null;

    public viewOnceMessage?: proto.Message.IFutureProofMessage | null;

    public orderMessage?: proto.Message.IOrderMessage | null;

    public listResponseMessage?: proto.Message.IListResponseMessage | null;

    public ephemeralMessage?: proto.Message.IFutureProofMessage | null;

    public invoiceMessage?: proto.Message.IInvoiceMessage | null;

    public buttonsMessage?: proto.Message.IButtonsMessage | null;

    public buttonsResponseMessage?: proto.Message.IButtonsResponseMessage | null;

    public paymentInviteMessage?: proto.Message.IPaymentInviteMessage | null;

    public interactiveMessage?: proto.Message.IInteractiveMessage | null;

    public reactionMessage?: proto.Message.IReactionMessage | null;

    public stickerSyncRmrMessage?: proto.Message.IStickerSyncRMRMessage | null;

    public interactiveResponseMessage?: proto.Message.IInteractiveResponseMessage | null;

    public pollCreationMessage?: proto.Message.IPollCreationMessage | null;

    public pollUpdateMessage?: proto.Message.IPollUpdateMessage | null;

    public keepInChatMessage?: proto.Message.IKeepInChatMessage | null;

    public documentWithCaptionMessage?: proto.Message.IFutureProofMessage | null;

    public requestPhoneNumberMessage?: proto.Message.IRequestPhoneNumberMessage | null;

    public viewOnceMessageV2?: proto.Message.IFutureProofMessage | null;

    public encReactionMessage?: proto.Message.IEncReactionMessage | null;

    public editedMessage?: proto.Message.IFutureProofMessage | null;

    public viewOnceMessageV2Extension?: proto.Message.IFutureProofMessage | null;

    public pollCreationMessageV2?: proto.Message.IPollCreationMessage | null;

    public scheduledCallCreationMessage?: proto.Message.IScheduledCallCreationMessage | null;

    public groupMentionedMessage?: proto.Message.IFutureProofMessage | null;

    public pinInChatMessage?: proto.Message.IPinInChatMessage | null;

    public pollCreationMessageV3?: proto.Message.IPollCreationMessage | null;

    public scheduledCallEditMessage?: proto.Message.IScheduledCallEditMessage | null;

    public ptvMessage?: proto.Message.IVideoMessage | null;

    public botInvokeMessage?: proto.Message.IFutureProofMessage | null;

    public callLogMesssage?: proto.Message.ICallLogMessage | null;

    public messageHistoryBundle?: proto.Message.IMessageHistoryBundle | null;

    public encCommentMessage?: proto.Message.IEncCommentMessage | null;

    public bcallMessage?: proto.Message.IBCallMessage | null;

    public lottieStickerMessage?: proto.Message.IFutureProofMessage | null;

    public eventMessage?: proto.Message.IEventMessage | null;

    public commentMessage?: proto.Message.ICommentMessage | null;

    public newsletterAdminInviteMessage?: proto.Message.INewsletterAdminInviteMessage | null;

    public extendedTextMessageWithParentKey?: proto.Message.IExtendedTextMessageWithParentKey | null;

    public placeholderMessage?: proto.Message.IPlaceholderMessage | null;

    public encEventUpdateMessage?: proto.Message.IEncEventUpdateMessage | null;

    public static create(properties?: proto.IMessage): proto.Message;

    public static encode(
      message: proto.IMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.Message;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.Message;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.Message;

    public static toObject(
      message: proto.Message,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace Message {
    interface IAppStateFatalExceptionNotification {
      collectionNames?: string[] | null;

      timestamp?: number | Long | null;
    }

    class AppStateFatalExceptionNotification
      implements IAppStateFatalExceptionNotification
    {
      constructor(
        properties?: proto.Message.IAppStateFatalExceptionNotification,
      );

      public collectionNames: string[];

      public timestamp: number | Long;

      public static create(
        properties?: proto.Message.IAppStateFatalExceptionNotification,
      ): proto.Message.AppStateFatalExceptionNotification;

      public static encode(
        message: proto.Message.IAppStateFatalExceptionNotification,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IAppStateFatalExceptionNotification,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.AppStateFatalExceptionNotification;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.AppStateFatalExceptionNotification;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.AppStateFatalExceptionNotification;

      public static toObject(
        message: proto.Message.AppStateFatalExceptionNotification,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IAppStateSyncKey {
      keyId?: proto.Message.IAppStateSyncKeyId | null;

      keyData?: proto.Message.IAppStateSyncKeyData | null;
    }

    class AppStateSyncKey implements IAppStateSyncKey {
      constructor(properties?: proto.Message.IAppStateSyncKey);

      public keyId?: proto.Message.IAppStateSyncKeyId | null;

      public keyData?: proto.Message.IAppStateSyncKeyData | null;

      public static create(
        properties?: proto.Message.IAppStateSyncKey,
      ): proto.Message.AppStateSyncKey;

      public static encode(
        message: proto.Message.IAppStateSyncKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IAppStateSyncKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.AppStateSyncKey;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.AppStateSyncKey;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.AppStateSyncKey;

      public static toObject(
        message: proto.Message.AppStateSyncKey,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IAppStateSyncKeyData {
      keyData?: Uint8Array | null;

      fingerprint?: proto.Message.IAppStateSyncKeyFingerprint | null;

      timestamp?: number | Long | null;
    }

    class AppStateSyncKeyData implements IAppStateSyncKeyData {
      constructor(properties?: proto.Message.IAppStateSyncKeyData);

      public keyData: Uint8Array;

      public fingerprint?: proto.Message.IAppStateSyncKeyFingerprint | null;

      public timestamp: number | Long;

      public static create(
        properties?: proto.Message.IAppStateSyncKeyData,
      ): proto.Message.AppStateSyncKeyData;

      public static encode(
        message: proto.Message.IAppStateSyncKeyData,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IAppStateSyncKeyData,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.AppStateSyncKeyData;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.AppStateSyncKeyData;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.AppStateSyncKeyData;

      public static toObject(
        message: proto.Message.AppStateSyncKeyData,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IAppStateSyncKeyFingerprint {
      rawId?: number | null;

      currentIndex?: number | null;

      deviceIndexes?: number[] | null;
    }

    class AppStateSyncKeyFingerprint implements IAppStateSyncKeyFingerprint {
      constructor(properties?: proto.Message.IAppStateSyncKeyFingerprint);

      public rawId: number;

      public currentIndex: number;

      public deviceIndexes: number[];

      public static create(
        properties?: proto.Message.IAppStateSyncKeyFingerprint,
      ): proto.Message.AppStateSyncKeyFingerprint;

      public static encode(
        message: proto.Message.IAppStateSyncKeyFingerprint,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IAppStateSyncKeyFingerprint,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.AppStateSyncKeyFingerprint;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.AppStateSyncKeyFingerprint;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.AppStateSyncKeyFingerprint;

      public static toObject(
        message: proto.Message.AppStateSyncKeyFingerprint,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IAppStateSyncKeyId {
      keyId?: Uint8Array | null;
    }

    class AppStateSyncKeyId implements IAppStateSyncKeyId {
      constructor(properties?: proto.Message.IAppStateSyncKeyId);

      public keyId: Uint8Array;

      public static create(
        properties?: proto.Message.IAppStateSyncKeyId,
      ): proto.Message.AppStateSyncKeyId;

      public static encode(
        message: proto.Message.IAppStateSyncKeyId,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IAppStateSyncKeyId,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.AppStateSyncKeyId;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.AppStateSyncKeyId;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.AppStateSyncKeyId;

      public static toObject(
        message: proto.Message.AppStateSyncKeyId,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IAppStateSyncKeyRequest {
      keyIds?: proto.Message.IAppStateSyncKeyId[] | null;
    }

    class AppStateSyncKeyRequest implements IAppStateSyncKeyRequest {
      constructor(properties?: proto.Message.IAppStateSyncKeyRequest);

      public keyIds: proto.Message.IAppStateSyncKeyId[];

      public static create(
        properties?: proto.Message.IAppStateSyncKeyRequest,
      ): proto.Message.AppStateSyncKeyRequest;

      public static encode(
        message: proto.Message.IAppStateSyncKeyRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IAppStateSyncKeyRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.AppStateSyncKeyRequest;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.AppStateSyncKeyRequest;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.AppStateSyncKeyRequest;

      public static toObject(
        message: proto.Message.AppStateSyncKeyRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IAppStateSyncKeyShare {
      keys?: proto.Message.IAppStateSyncKey[] | null;
    }

    class AppStateSyncKeyShare implements IAppStateSyncKeyShare {
      constructor(properties?: proto.Message.IAppStateSyncKeyShare);

      public keys: proto.Message.IAppStateSyncKey[];

      public static create(
        properties?: proto.Message.IAppStateSyncKeyShare,
      ): proto.Message.AppStateSyncKeyShare;

      public static encode(
        message: proto.Message.IAppStateSyncKeyShare,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IAppStateSyncKeyShare,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.AppStateSyncKeyShare;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.AppStateSyncKeyShare;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.AppStateSyncKeyShare;

      public static toObject(
        message: proto.Message.AppStateSyncKeyShare,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IAudioMessage {
      url?: string | null;

      mimetype?: string | null;

      fileSha256?: Uint8Array | null;

      fileLength?: number | Long | null;

      seconds?: number | null;

      ptt?: boolean | null;

      mediaKey?: Uint8Array | null;

      fileEncSha256?: Uint8Array | null;

      directPath?: string | null;

      mediaKeyTimestamp?: number | Long | null;

      contextInfo?: proto.IContextInfo | null;

      streamingSidecar?: Uint8Array | null;

      waveform?: Uint8Array | null;

      backgroundArgb?: number | null;

      viewOnce?: boolean | null;
    }

    class AudioMessage implements IAudioMessage {
      constructor(properties?: proto.Message.IAudioMessage);

      public url: string;

      public mimetype: string;

      public fileSha256: Uint8Array;

      public fileLength: number | Long;

      public seconds: number;

      public ptt: boolean;

      public mediaKey: Uint8Array;

      public fileEncSha256: Uint8Array;

      public directPath: string;

      public mediaKeyTimestamp: number | Long;

      public contextInfo?: proto.IContextInfo | null;

      public streamingSidecar: Uint8Array;

      public waveform: Uint8Array;

      public backgroundArgb: number;

      public viewOnce: boolean;

      public static create(
        properties?: proto.Message.IAudioMessage,
      ): proto.Message.AudioMessage;

      public static encode(
        message: proto.Message.IAudioMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IAudioMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.AudioMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.AudioMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.AudioMessage;

      public static toObject(
        message: proto.Message.AudioMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IBCallMessage {
      sessionId?: string | null;

      mediaType?: proto.Message.BCallMessage.MediaType | null;

      masterKey?: Uint8Array | null;

      caption?: string | null;
    }

    class BCallMessage implements IBCallMessage {
      constructor(properties?: proto.Message.IBCallMessage);

      public sessionId: string;

      public mediaType: proto.Message.BCallMessage.MediaType;

      public masterKey: Uint8Array;

      public caption: string;

      public static create(
        properties?: proto.Message.IBCallMessage,
      ): proto.Message.BCallMessage;

      public static encode(
        message: proto.Message.IBCallMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IBCallMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.BCallMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.BCallMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.BCallMessage;

      public static toObject(
        message: proto.Message.BCallMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace BCallMessage {
      enum MediaType {
        UNKNOWN = 0,
        AUDIO = 1,
        VIDEO = 2,
      }
    }

    interface IBotFeedbackMessage {
      messageKey?: proto.IMessageKey | null;

      kind?: proto.Message.BotFeedbackMessage.BotFeedbackKind | null;

      text?: string | null;

      kindNegative?: number | Long | null;

      kindPositive?: number | Long | null;
    }

    class BotFeedbackMessage implements IBotFeedbackMessage {
      constructor(properties?: proto.Message.IBotFeedbackMessage);

      public messageKey?: proto.IMessageKey | null;

      public kind: proto.Message.BotFeedbackMessage.BotFeedbackKind;

      public text: string;

      public kindNegative: number | Long;

      public kindPositive: number | Long;

      public static create(
        properties?: proto.Message.IBotFeedbackMessage,
      ): proto.Message.BotFeedbackMessage;

      public static encode(
        message: proto.Message.IBotFeedbackMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IBotFeedbackMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.BotFeedbackMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.BotFeedbackMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.BotFeedbackMessage;

      public static toObject(
        message: proto.Message.BotFeedbackMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace BotFeedbackMessage {
      enum BotFeedbackKind {
        BOT_FEEDBACK_POSITIVE = 0,
        BOT_FEEDBACK_NEGATIVE_GENERIC = 1,
        BOT_FEEDBACK_NEGATIVE_HELPFUL = 2,
        BOT_FEEDBACK_NEGATIVE_INTERESTING = 3,
        BOT_FEEDBACK_NEGATIVE_ACCURATE = 4,
        BOT_FEEDBACK_NEGATIVE_SAFE = 5,
        BOT_FEEDBACK_NEGATIVE_OTHER = 6,
        BOT_FEEDBACK_NEGATIVE_REFUSED = 7,
        BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING = 8,
        BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT = 9,
      }

      enum BotFeedbackKindMultipleNegative {
        BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC = 1,
        BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL = 2,
        BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING = 4,
        BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE = 8,
        BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE = 16,
        BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER = 32,
        BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED = 64,
        BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING = 128,
        BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT = 256,
      }

      enum BotFeedbackKindMultiplePositive {
        BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC = 1,
      }
    }

    interface IButtonsMessage {
      contentText?: string | null;

      footerText?: string | null;

      contextInfo?: proto.IContextInfo | null;

      buttons?: proto.Message.ButtonsMessage.IButton[] | null;

      headerType?: proto.Message.ButtonsMessage.HeaderType | null;

      text?: string | null;

      documentMessage?: proto.Message.IDocumentMessage | null;

      imageMessage?: proto.Message.IImageMessage | null;

      videoMessage?: proto.Message.IVideoMessage | null;

      locationMessage?: proto.Message.ILocationMessage | null;
    }

    class ButtonsMessage implements IButtonsMessage {
      constructor(properties?: proto.Message.IButtonsMessage);

      public contentText: string;

      public footerText: string;

      public contextInfo?: proto.IContextInfo | null;

      public buttons: proto.Message.ButtonsMessage.IButton[];

      public headerType: proto.Message.ButtonsMessage.HeaderType;

      public text?: string | null;

      public documentMessage?: proto.Message.IDocumentMessage | null;

      public imageMessage?: proto.Message.IImageMessage | null;

      public videoMessage?: proto.Message.IVideoMessage | null;

      public locationMessage?: proto.Message.ILocationMessage | null;

      public header?:
        | "text"
        | "documentMessage"
        | "imageMessage"
        | "videoMessage"
        | "locationMessage";

      public static create(
        properties?: proto.Message.IButtonsMessage,
      ): proto.Message.ButtonsMessage;

      public static encode(
        message: proto.Message.IButtonsMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IButtonsMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ButtonsMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ButtonsMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ButtonsMessage;

      public static toObject(
        message: proto.Message.ButtonsMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ButtonsMessage {
      interface IButton {
        buttonId?: string | null;

        buttonText?: proto.Message.ButtonsMessage.Button.IButtonText | null;

        type?: proto.Message.ButtonsMessage.Button.Type | null;

        nativeFlowInfo?: proto.Message.ButtonsMessage.Button.INativeFlowInfo | null;
      }

      class Button implements IButton {
        constructor(properties?: proto.Message.ButtonsMessage.IButton);

        public buttonId: string;

        public buttonText?: proto.Message.ButtonsMessage.Button.IButtonText | null;

        public type: proto.Message.ButtonsMessage.Button.Type;

        public nativeFlowInfo?: proto.Message.ButtonsMessage.Button.INativeFlowInfo | null;

        public static create(
          properties?: proto.Message.ButtonsMessage.IButton,
        ): proto.Message.ButtonsMessage.Button;

        public static encode(
          message: proto.Message.ButtonsMessage.IButton,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.ButtonsMessage.IButton,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.ButtonsMessage.Button;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.ButtonsMessage.Button;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.ButtonsMessage.Button;

        public static toObject(
          message: proto.Message.ButtonsMessage.Button,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      namespace Button {
        interface IButtonText {
          displayText?: string | null;
        }

        class ButtonText implements IButtonText {
          constructor(
            properties?: proto.Message.ButtonsMessage.Button.IButtonText,
          );

          public displayText: string;

          public static create(
            properties?: proto.Message.ButtonsMessage.Button.IButtonText,
          ): proto.Message.ButtonsMessage.Button.ButtonText;

          public static encode(
            message: proto.Message.ButtonsMessage.Button.IButtonText,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static encodeDelimited(
            message: proto.Message.ButtonsMessage.Button.IButtonText,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number,
          ): proto.Message.ButtonsMessage.Button.ButtonText;

          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array,
          ): proto.Message.ButtonsMessage.Button.ButtonText;

          public static verify(message: { [k: string]: any }): string | null;

          public static fromObject(object: {
            [k: string]: any;
          }): proto.Message.ButtonsMessage.Button.ButtonText;

          public static toObject(
            message: proto.Message.ButtonsMessage.Button.ButtonText,
            options?: $protobuf.IConversionOptions,
          ): { [k: string]: any };

          public toJSON(): { [k: string]: any };
        }

        interface INativeFlowInfo {
          name?: string | null;

          paramsJson?: string | null;
        }

        class NativeFlowInfo implements INativeFlowInfo {
          constructor(
            properties?: proto.Message.ButtonsMessage.Button.INativeFlowInfo,
          );

          public name: string;

          public paramsJson: string;

          public static create(
            properties?: proto.Message.ButtonsMessage.Button.INativeFlowInfo,
          ): proto.Message.ButtonsMessage.Button.NativeFlowInfo;

          public static encode(
            message: proto.Message.ButtonsMessage.Button.INativeFlowInfo,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static encodeDelimited(
            message: proto.Message.ButtonsMessage.Button.INativeFlowInfo,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number,
          ): proto.Message.ButtonsMessage.Button.NativeFlowInfo;

          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array,
          ): proto.Message.ButtonsMessage.Button.NativeFlowInfo;

          public static verify(message: { [k: string]: any }): string | null;

          public static fromObject(object: {
            [k: string]: any;
          }): proto.Message.ButtonsMessage.Button.NativeFlowInfo;

          public static toObject(
            message: proto.Message.ButtonsMessage.Button.NativeFlowInfo,
            options?: $protobuf.IConversionOptions,
          ): { [k: string]: any };

          public toJSON(): { [k: string]: any };
        }

        enum Type {
          UNKNOWN = 0,
          RESPONSE = 1,
          NATIVE_FLOW = 2,
        }
      }

      enum HeaderType {
        UNKNOWN = 0,
        EMPTY = 1,
        TEXT = 2,
        DOCUMENT = 3,
        IMAGE = 4,
        VIDEO = 5,
        LOCATION = 6,
      }
    }

    interface IButtonsResponseMessage {
      selectedButtonId?: string | null;

      contextInfo?: proto.IContextInfo | null;

      type?: proto.Message.ButtonsResponseMessage.Type | null;

      selectedDisplayText?: string | null;
    }

    class ButtonsResponseMessage implements IButtonsResponseMessage {
      constructor(properties?: proto.Message.IButtonsResponseMessage);

      public selectedButtonId: string;

      public contextInfo?: proto.IContextInfo | null;

      public type: proto.Message.ButtonsResponseMessage.Type;

      public selectedDisplayText?: string | null;

      public response?: "selectedDisplayText";

      public static create(
        properties?: proto.Message.IButtonsResponseMessage,
      ): proto.Message.ButtonsResponseMessage;

      public static encode(
        message: proto.Message.IButtonsResponseMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IButtonsResponseMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ButtonsResponseMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ButtonsResponseMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ButtonsResponseMessage;

      public static toObject(
        message: proto.Message.ButtonsResponseMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ButtonsResponseMessage {
      enum Type {
        UNKNOWN = 0,
        DISPLAY_TEXT = 1,
      }
    }

    interface ICall {
      callKey?: Uint8Array | null;

      conversionSource?: string | null;

      conversionData?: Uint8Array | null;

      conversionDelaySeconds?: number | null;
    }

    class Call implements ICall {
      constructor(properties?: proto.Message.ICall);

      public callKey: Uint8Array;

      public conversionSource: string;

      public conversionData: Uint8Array;

      public conversionDelaySeconds: number;

      public static create(
        properties?: proto.Message.ICall,
      ): proto.Message.Call;

      public static encode(
        message: proto.Message.ICall,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.ICall,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.Call;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.Call;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.Call;

      public static toObject(
        message: proto.Message.Call,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ICallLogMessage {
      isVideo?: boolean | null;

      callOutcome?: proto.Message.CallLogMessage.CallOutcome | null;

      durationSecs?: number | Long | null;

      callType?: proto.Message.CallLogMessage.CallType | null;

      participants?: proto.Message.CallLogMessage.ICallParticipant[] | null;
    }

    class CallLogMessage implements ICallLogMessage {
      constructor(properties?: proto.Message.ICallLogMessage);

      public isVideo: boolean;

      public callOutcome: proto.Message.CallLogMessage.CallOutcome;

      public durationSecs: number | Long;

      public callType: proto.Message.CallLogMessage.CallType;

      public participants: proto.Message.CallLogMessage.ICallParticipant[];

      public static create(
        properties?: proto.Message.ICallLogMessage,
      ): proto.Message.CallLogMessage;

      public static encode(
        message: proto.Message.ICallLogMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.ICallLogMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.CallLogMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.CallLogMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.CallLogMessage;

      public static toObject(
        message: proto.Message.CallLogMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace CallLogMessage {
      enum CallOutcome {
        CONNECTED = 0,
        MISSED = 1,
        FAILED = 2,
        REJECTED = 3,
        ACCEPTED_ELSEWHERE = 4,
        ONGOING = 5,
        SILENCED_BY_DND = 6,
        SILENCED_UNKNOWN_CALLER = 7,
      }

      interface ICallParticipant {
        jid?: string | null;

        callOutcome?: proto.Message.CallLogMessage.CallOutcome | null;
      }

      class CallParticipant implements ICallParticipant {
        constructor(properties?: proto.Message.CallLogMessage.ICallParticipant);

        public jid: string;

        public callOutcome: proto.Message.CallLogMessage.CallOutcome;

        public static create(
          properties?: proto.Message.CallLogMessage.ICallParticipant,
        ): proto.Message.CallLogMessage.CallParticipant;

        public static encode(
          message: proto.Message.CallLogMessage.ICallParticipant,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.CallLogMessage.ICallParticipant,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.CallLogMessage.CallParticipant;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.CallLogMessage.CallParticipant;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.CallLogMessage.CallParticipant;

        public static toObject(
          message: proto.Message.CallLogMessage.CallParticipant,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      enum CallType {
        REGULAR = 0,
        SCHEDULED_CALL = 1,
        VOICE_CHAT = 2,
      }
    }

    interface ICancelPaymentRequestMessage {
      key?: proto.IMessageKey | null;
    }

    class CancelPaymentRequestMessage implements ICancelPaymentRequestMessage {
      constructor(properties?: proto.Message.ICancelPaymentRequestMessage);

      public key?: proto.IMessageKey | null;

      public static create(
        properties?: proto.Message.ICancelPaymentRequestMessage,
      ): proto.Message.CancelPaymentRequestMessage;

      public static encode(
        message: proto.Message.ICancelPaymentRequestMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.ICancelPaymentRequestMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.CancelPaymentRequestMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.CancelPaymentRequestMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.CancelPaymentRequestMessage;

      public static toObject(
        message: proto.Message.CancelPaymentRequestMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IChat {
      displayName?: string | null;

      id?: string | null;
    }

    class Chat implements IChat {
      constructor(properties?: proto.Message.IChat);

      public displayName: string;

      public id: string;

      public static create(
        properties?: proto.Message.IChat,
      ): proto.Message.Chat;

      public static encode(
        message: proto.Message.IChat,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IChat,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.Chat;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.Chat;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.Chat;

      public static toObject(
        message: proto.Message.Chat,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ICommentMessage {
      message?: proto.IMessage | null;

      targetMessageKey?: proto.IMessageKey | null;
    }

    class CommentMessage implements ICommentMessage {
      constructor(properties?: proto.Message.ICommentMessage);

      public message?: proto.IMessage | null;

      public targetMessageKey?: proto.IMessageKey | null;

      public static create(
        properties?: proto.Message.ICommentMessage,
      ): proto.Message.CommentMessage;

      public static encode(
        message: proto.Message.ICommentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.ICommentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.CommentMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.CommentMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.CommentMessage;

      public static toObject(
        message: proto.Message.CommentMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IContactMessage {
      displayName?: string | null;

      vcard?: string | null;

      contextInfo?: proto.IContextInfo | null;
    }

    class ContactMessage implements IContactMessage {
      constructor(properties?: proto.Message.IContactMessage);

      public displayName: string;

      public vcard: string;

      public contextInfo?: proto.IContextInfo | null;

      public static create(
        properties?: proto.Message.IContactMessage,
      ): proto.Message.ContactMessage;

      public static encode(
        message: proto.Message.IContactMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IContactMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ContactMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ContactMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ContactMessage;

      public static toObject(
        message: proto.Message.ContactMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IContactsArrayMessage {
      displayName?: string | null;

      contacts?: proto.Message.IContactMessage[] | null;

      contextInfo?: proto.IContextInfo | null;
    }

    class ContactsArrayMessage implements IContactsArrayMessage {
      constructor(properties?: proto.Message.IContactsArrayMessage);

      public displayName: string;

      public contacts: proto.Message.IContactMessage[];

      public contextInfo?: proto.IContextInfo | null;

      public static create(
        properties?: proto.Message.IContactsArrayMessage,
      ): proto.Message.ContactsArrayMessage;

      public static encode(
        message: proto.Message.IContactsArrayMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IContactsArrayMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ContactsArrayMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ContactsArrayMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ContactsArrayMessage;

      public static toObject(
        message: proto.Message.ContactsArrayMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IDeclinePaymentRequestMessage {
      key?: proto.IMessageKey | null;
    }

    class DeclinePaymentRequestMessage
      implements IDeclinePaymentRequestMessage
    {
      constructor(properties?: proto.Message.IDeclinePaymentRequestMessage);

      public key?: proto.IMessageKey | null;

      public static create(
        properties?: proto.Message.IDeclinePaymentRequestMessage,
      ): proto.Message.DeclinePaymentRequestMessage;

      public static encode(
        message: proto.Message.IDeclinePaymentRequestMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IDeclinePaymentRequestMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.DeclinePaymentRequestMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.DeclinePaymentRequestMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.DeclinePaymentRequestMessage;

      public static toObject(
        message: proto.Message.DeclinePaymentRequestMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IDeviceSentMessage {
      destinationJid?: string | null;

      message?: proto.IMessage | null;

      phash?: string | null;
    }

    class DeviceSentMessage implements IDeviceSentMessage {
      constructor(properties?: proto.Message.IDeviceSentMessage);

      public destinationJid: string;

      public message?: proto.IMessage | null;

      public phash: string;

      public static create(
        properties?: proto.Message.IDeviceSentMessage,
      ): proto.Message.DeviceSentMessage;

      public static encode(
        message: proto.Message.IDeviceSentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IDeviceSentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.DeviceSentMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.DeviceSentMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.DeviceSentMessage;

      public static toObject(
        message: proto.Message.DeviceSentMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IDocumentMessage {
      url?: string | null;

      mimetype?: string | null;

      title?: string | null;

      fileSha256?: Uint8Array | null;

      fileLength?: number | Long | null;

      pageCount?: number | null;

      mediaKey?: Uint8Array | null;

      fileName?: string | null;

      fileEncSha256?: Uint8Array | null;

      directPath?: string | null;

      mediaKeyTimestamp?: number | Long | null;

      contactVcard?: boolean | null;

      thumbnailDirectPath?: string | null;

      thumbnailSha256?: Uint8Array | null;

      thumbnailEncSha256?: Uint8Array | null;

      jpegThumbnail?: Uint8Array | null;

      contextInfo?: proto.IContextInfo | null;

      thumbnailHeight?: number | null;

      thumbnailWidth?: number | null;

      caption?: string | null;
    }

    class DocumentMessage implements IDocumentMessage {
      constructor(properties?: proto.Message.IDocumentMessage);

      public url: string;

      public mimetype: string;

      public title: string;

      public fileSha256: Uint8Array;

      public fileLength: number | Long;

      public pageCount: number;

      public mediaKey: Uint8Array;

      public fileName: string;

      public fileEncSha256: Uint8Array;

      public directPath: string;

      public mediaKeyTimestamp: number | Long;

      public contactVcard: boolean;

      public thumbnailDirectPath: string;

      public thumbnailSha256: Uint8Array;

      public thumbnailEncSha256: Uint8Array;

      public jpegThumbnail: Uint8Array;

      public contextInfo?: proto.IContextInfo | null;

      public thumbnailHeight: number;

      public thumbnailWidth: number;

      public caption: string;

      public static create(
        properties?: proto.Message.IDocumentMessage,
      ): proto.Message.DocumentMessage;

      public static encode(
        message: proto.Message.IDocumentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IDocumentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.DocumentMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.DocumentMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.DocumentMessage;

      public static toObject(
        message: proto.Message.DocumentMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IEncCommentMessage {
      targetMessageKey?: proto.IMessageKey | null;

      encPayload?: Uint8Array | null;

      encIv?: Uint8Array | null;
    }

    class EncCommentMessage implements IEncCommentMessage {
      constructor(properties?: proto.Message.IEncCommentMessage);

      public targetMessageKey?: proto.IMessageKey | null;

      public encPayload: Uint8Array;

      public encIv: Uint8Array;

      public static create(
        properties?: proto.Message.IEncCommentMessage,
      ): proto.Message.EncCommentMessage;

      public static encode(
        message: proto.Message.IEncCommentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IEncCommentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.EncCommentMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.EncCommentMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.EncCommentMessage;

      public static toObject(
        message: proto.Message.EncCommentMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IEncEventUpdateMessage {
      eventCreationMessageKey?: proto.IMessageKey | null;

      encPayload?: Uint8Array | null;

      encIv?: Uint8Array | null;
    }

    class EncEventUpdateMessage implements IEncEventUpdateMessage {
      constructor(properties?: proto.Message.IEncEventUpdateMessage);

      public eventCreationMessageKey?: proto.IMessageKey | null;

      public encPayload: Uint8Array;

      public encIv: Uint8Array;

      public static create(
        properties?: proto.Message.IEncEventUpdateMessage,
      ): proto.Message.EncEventUpdateMessage;

      public static encode(
        message: proto.Message.IEncEventUpdateMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IEncEventUpdateMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.EncEventUpdateMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.EncEventUpdateMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.EncEventUpdateMessage;

      public static toObject(
        message: proto.Message.EncEventUpdateMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IEncReactionMessage {
      targetMessageKey?: proto.IMessageKey | null;

      encPayload?: Uint8Array | null;

      encIv?: Uint8Array | null;
    }

    class EncReactionMessage implements IEncReactionMessage {
      constructor(properties?: proto.Message.IEncReactionMessage);

      public targetMessageKey?: proto.IMessageKey | null;

      public encPayload: Uint8Array;

      public encIv: Uint8Array;

      public static create(
        properties?: proto.Message.IEncReactionMessage,
      ): proto.Message.EncReactionMessage;

      public static encode(
        message: proto.Message.IEncReactionMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IEncReactionMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.EncReactionMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.EncReactionMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.EncReactionMessage;

      public static toObject(
        message: proto.Message.EncReactionMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IEventEditMessage {
      eventEditMessage?: proto.Message.IEventMessage | null;

      editTimestampMs?: number | Long | null;
    }

    class EventEditMessage implements IEventEditMessage {
      constructor(properties?: proto.Message.IEventEditMessage);

      public eventEditMessage?: proto.Message.IEventMessage | null;

      public editTimestampMs: number | Long;

      public static create(
        properties?: proto.Message.IEventEditMessage,
      ): proto.Message.EventEditMessage;

      public static encode(
        message: proto.Message.IEventEditMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IEventEditMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.EventEditMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.EventEditMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.EventEditMessage;

      public static toObject(
        message: proto.Message.EventEditMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IEventMessage {
      contextInfo?: proto.IContextInfo | null;

      isCanceled?: boolean | null;

      name?: string | null;

      description?: string | null;

      location?: proto.Message.ILocationMessage | null;

      joinLink?: string | null;

      startTime?: number | Long | null;
    }

    class EventMessage implements IEventMessage {
      constructor(properties?: proto.Message.IEventMessage);

      public contextInfo?: proto.IContextInfo | null;

      public isCanceled: boolean;

      public name: string;

      public description: string;

      public location?: proto.Message.ILocationMessage | null;

      public joinLink: string;

      public startTime: number | Long;

      public static create(
        properties?: proto.Message.IEventMessage,
      ): proto.Message.EventMessage;

      public static encode(
        message: proto.Message.IEventMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IEventMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.EventMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.EventMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.EventMessage;

      public static toObject(
        message: proto.Message.EventMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IEventResponseMessage {
      response?: proto.Message.EventResponseMessage.EventResponseType | null;

      timestampMs?: number | Long | null;
    }

    class EventResponseMessage implements IEventResponseMessage {
      constructor(properties?: proto.Message.IEventResponseMessage);

      public response: proto.Message.EventResponseMessage.EventResponseType;

      public timestampMs: number | Long;

      public static create(
        properties?: proto.Message.IEventResponseMessage,
      ): proto.Message.EventResponseMessage;

      public static encode(
        message: proto.Message.IEventResponseMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IEventResponseMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.EventResponseMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.EventResponseMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.EventResponseMessage;

      public static toObject(
        message: proto.Message.EventResponseMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace EventResponseMessage {
      enum EventResponseType {
        UNKNOWN = 0,
        GOING = 1,
        NOT_GOING = 2,
      }
    }

    interface IEventUpdateMessage {
      response?: proto.Message.IEventResponseMessage | null;

      edit?: proto.Message.IEventEditMessage | null;
    }

    class EventUpdateMessage implements IEventUpdateMessage {
      constructor(properties?: proto.Message.IEventUpdateMessage);

      public response?: proto.Message.IEventResponseMessage | null;

      public edit?: proto.Message.IEventEditMessage | null;

      public static create(
        properties?: proto.Message.IEventUpdateMessage,
      ): proto.Message.EventUpdateMessage;

      public static encode(
        message: proto.Message.IEventUpdateMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IEventUpdateMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.EventUpdateMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.EventUpdateMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.EventUpdateMessage;

      public static toObject(
        message: proto.Message.EventUpdateMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IExtendedTextMessage {
      text?: string | null;

      matchedText?: string | null;

      canonicalUrl?: string | null;

      description?: string | null;

      title?: string | null;

      textArgb?: number | null;

      backgroundArgb?: number | null;

      font?: proto.Message.ExtendedTextMessage.FontType | null;

      previewType?: proto.Message.ExtendedTextMessage.PreviewType | null;

      jpegThumbnail?: Uint8Array | null;

      contextInfo?: proto.IContextInfo | null;

      doNotPlayInline?: boolean | null;

      thumbnailDirectPath?: string | null;

      thumbnailSha256?: Uint8Array | null;

      thumbnailEncSha256?: Uint8Array | null;

      mediaKey?: Uint8Array | null;

      mediaKeyTimestamp?: number | Long | null;

      thumbnailHeight?: number | null;

      thumbnailWidth?: number | null;

      inviteLinkGroupType?: proto.Message.ExtendedTextMessage.InviteLinkGroupType | null;

      inviteLinkParentGroupSubjectV2?: string | null;

      inviteLinkParentGroupThumbnailV2?: Uint8Array | null;

      inviteLinkGroupTypeV2?: proto.Message.ExtendedTextMessage.InviteLinkGroupType | null;

      viewOnce?: boolean | null;
    }

    class ExtendedTextMessage implements IExtendedTextMessage {
      constructor(properties?: proto.Message.IExtendedTextMessage);

      public text: string;

      public matchedText: string;

      public canonicalUrl: string;

      public description: string;

      public title: string;

      public textArgb: number;

      public backgroundArgb: number;

      public font: proto.Message.ExtendedTextMessage.FontType;

      public previewType: proto.Message.ExtendedTextMessage.PreviewType;

      public jpegThumbnail: Uint8Array;

      public contextInfo?: proto.IContextInfo | null;

      public doNotPlayInline: boolean;

      public thumbnailDirectPath: string;

      public thumbnailSha256: Uint8Array;

      public thumbnailEncSha256: Uint8Array;

      public mediaKey: Uint8Array;

      public mediaKeyTimestamp: number | Long;

      public thumbnailHeight: number;

      public thumbnailWidth: number;

      public inviteLinkGroupType: proto.Message.ExtendedTextMessage.InviteLinkGroupType;

      public inviteLinkParentGroupSubjectV2: string;

      public inviteLinkParentGroupThumbnailV2: Uint8Array;

      public inviteLinkGroupTypeV2: proto.Message.ExtendedTextMessage.InviteLinkGroupType;

      public viewOnce: boolean;

      public static create(
        properties?: proto.Message.IExtendedTextMessage,
      ): proto.Message.ExtendedTextMessage;

      public static encode(
        message: proto.Message.IExtendedTextMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IExtendedTextMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ExtendedTextMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ExtendedTextMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ExtendedTextMessage;

      public static toObject(
        message: proto.Message.ExtendedTextMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ExtendedTextMessage {
      enum FontType {
        SYSTEM = 0,
        SYSTEM_TEXT = 1,
        FB_SCRIPT = 2,
        SYSTEM_BOLD = 6,
        MORNINGBREEZE_REGULAR = 7,
        CALISTOGA_REGULAR = 8,
        EXO2_EXTRABOLD = 9,
        COURIERPRIME_BOLD = 10,
      }

      enum InviteLinkGroupType {
        DEFAULT = 0,
        PARENT = 1,
        SUB = 2,
        DEFAULT_SUB = 3,
      }

      enum PreviewType {
        NONE = 0,
        VIDEO = 1,
        PLACEHOLDER = 4,
        IMAGE = 5,
      }
    }

    interface IExtendedTextMessageWithParentKey {
      key?: proto.IMessageKey | null;

      extendedTextMessage?: proto.Message.IExtendedTextMessage | null;
    }

    class ExtendedTextMessageWithParentKey
      implements IExtendedTextMessageWithParentKey
    {
      constructor(properties?: proto.Message.IExtendedTextMessageWithParentKey);

      public key?: proto.IMessageKey | null;

      public extendedTextMessage?: proto.Message.IExtendedTextMessage | null;

      public static create(
        properties?: proto.Message.IExtendedTextMessageWithParentKey,
      ): proto.Message.ExtendedTextMessageWithParentKey;

      public static encode(
        message: proto.Message.IExtendedTextMessageWithParentKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IExtendedTextMessageWithParentKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ExtendedTextMessageWithParentKey;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ExtendedTextMessageWithParentKey;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ExtendedTextMessageWithParentKey;

      public static toObject(
        message: proto.Message.ExtendedTextMessageWithParentKey,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IFutureProofMessage {
      message?: proto.IMessage | null;
    }

    class FutureProofMessage implements IFutureProofMessage {
      constructor(properties?: proto.Message.IFutureProofMessage);

      public message?: proto.IMessage | null;

      public static create(
        properties?: proto.Message.IFutureProofMessage,
      ): proto.Message.FutureProofMessage;

      public static encode(
        message: proto.Message.IFutureProofMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IFutureProofMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.FutureProofMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.FutureProofMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.FutureProofMessage;

      public static toObject(
        message: proto.Message.FutureProofMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IGroupInviteMessage {
      groupJid?: string | null;

      inviteCode?: string | null;

      inviteExpiration?: number | Long | null;

      groupName?: string | null;

      jpegThumbnail?: Uint8Array | null;

      caption?: string | null;

      contextInfo?: proto.IContextInfo | null;

      groupType?: proto.Message.GroupInviteMessage.GroupType | null;
    }

    class GroupInviteMessage implements IGroupInviteMessage {
      constructor(properties?: proto.Message.IGroupInviteMessage);

      public groupJid: string;

      public inviteCode: string;

      public inviteExpiration: number | Long;

      public groupName: string;

      public jpegThumbnail: Uint8Array;

      public caption: string;

      public contextInfo?: proto.IContextInfo | null;

      public groupType: proto.Message.GroupInviteMessage.GroupType;

      public static create(
        properties?: proto.Message.IGroupInviteMessage,
      ): proto.Message.GroupInviteMessage;

      public static encode(
        message: proto.Message.IGroupInviteMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IGroupInviteMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.GroupInviteMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.GroupInviteMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.GroupInviteMessage;

      public static toObject(
        message: proto.Message.GroupInviteMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace GroupInviteMessage {
      enum GroupType {
        DEFAULT = 0,
        PARENT = 1,
      }
    }

    interface IHighlyStructuredMessage {
      namespace?: string | null;

      elementName?: string | null;

      params?: string[] | null;

      fallbackLg?: string | null;

      fallbackLc?: string | null;

      localizableParams?:
        | proto.Message.HighlyStructuredMessage.IHSMLocalizableParameter[]
        | null;

      deterministicLg?: string | null;

      deterministicLc?: string | null;

      hydratedHsm?: proto.Message.ITemplateMessage | null;
    }

    class HighlyStructuredMessage implements IHighlyStructuredMessage {
      constructor(properties?: proto.Message.IHighlyStructuredMessage);

      public namespace: string;

      public elementName: string;

      public params: string[];

      public fallbackLg: string;

      public fallbackLc: string;

      public localizableParams: proto.Message.HighlyStructuredMessage.IHSMLocalizableParameter[];

      public deterministicLg: string;

      public deterministicLc: string;

      public hydratedHsm?: proto.Message.ITemplateMessage | null;

      public static create(
        properties?: proto.Message.IHighlyStructuredMessage,
      ): proto.Message.HighlyStructuredMessage;

      public static encode(
        message: proto.Message.IHighlyStructuredMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IHighlyStructuredMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.HighlyStructuredMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.HighlyStructuredMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.HighlyStructuredMessage;

      public static toObject(
        message: proto.Message.HighlyStructuredMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace HighlyStructuredMessage {
      interface IHSMLocalizableParameter {
        default?: string | null;

        currency?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency | null;

        dateTime?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime | null;
      }

      class HSMLocalizableParameter implements IHSMLocalizableParameter {
        constructor(
          properties?: proto.Message.HighlyStructuredMessage.IHSMLocalizableParameter,
        );

        public default: string;

        public currency?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency | null;

        public dateTime?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime | null;

        public paramOneof?: "currency" | "dateTime";

        public static create(
          properties?: proto.Message.HighlyStructuredMessage.IHSMLocalizableParameter,
        ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter;

        public static encode(
          message: proto.Message.HighlyStructuredMessage.IHSMLocalizableParameter,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.HighlyStructuredMessage.IHSMLocalizableParameter,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter;

        public static toObject(
          message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      namespace HSMLocalizableParameter {
        interface IHSMCurrency {
          currencyCode?: string | null;

          amount1000?: number | Long | null;
        }

        class HSMCurrency implements IHSMCurrency {
          constructor(
            properties?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency,
          );

          public currencyCode: string;

          public amount1000: number | Long;

          public static create(
            properties?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency,
          ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;

          public static encode(
            message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static encodeDelimited(
            message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number,
          ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;

          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array,
          ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;

          public static verify(message: { [k: string]: any }): string | null;

          public static fromObject(object: {
            [k: string]: any;
          }): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;

          public static toObject(
            message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency,
            options?: $protobuf.IConversionOptions,
          ): { [k: string]: any };

          public toJSON(): { [k: string]: any };
        }

        interface IHSMDateTime {
          component?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent | null;

          unixEpoch?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch | null;
        }

        class HSMDateTime implements IHSMDateTime {
          constructor(
            properties?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime,
          );

          public component?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent | null;

          public unixEpoch?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch | null;

          public datetimeOneof?: "component" | "unixEpoch";

          public static create(
            properties?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime,
          ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;

          public static encode(
            message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static encodeDelimited(
            message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number,
          ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;

          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array,
          ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;

          public static verify(message: { [k: string]: any }): string | null;

          public static fromObject(object: {
            [k: string]: any;
          }): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;

          public static toObject(
            message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime,
            options?: $protobuf.IConversionOptions,
          ): { [k: string]: any };

          public toJSON(): { [k: string]: any };
        }

        namespace HSMDateTime {
          interface IHSMDateTimeComponent {
            dayOfWeek?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.DayOfWeekType | null;

            year?: number | null;

            month?: number | null;

            dayOfMonth?: number | null;

            hour?: number | null;

            minute?: number | null;

            calendar?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.CalendarType | null;
          }

          class HSMDateTimeComponent implements IHSMDateTimeComponent {
            constructor(
              properties?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent,
            );

            public dayOfWeek: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.DayOfWeekType;

            public year: number;

            public month: number;

            public dayOfMonth: number;

            public hour: number;

            public minute: number;

            public calendar: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.CalendarType;

            public static create(
              properties?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent,
            ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;

            public static encode(
              message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent,
              writer?: $protobuf.Writer,
            ): $protobuf.Writer;

            public static encodeDelimited(
              message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent,
              writer?: $protobuf.Writer,
            ): $protobuf.Writer;

            public static decode(
              reader: $protobuf.Reader | Uint8Array,
              length?: number,
            ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;

            public static decodeDelimited(
              reader: $protobuf.Reader | Uint8Array,
            ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;

            public static verify(message: { [k: string]: any }): string | null;

            public static fromObject(object: {
              [k: string]: any;
            }): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;

            public static toObject(
              message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent,
              options?: $protobuf.IConversionOptions,
            ): { [k: string]: any };

            public toJSON(): { [k: string]: any };
          }

          namespace HSMDateTimeComponent {
            enum CalendarType {
              GREGORIAN = 1,
              SOLAR_HIJRI = 2,
            }

            enum DayOfWeekType {
              MONDAY = 1,
              TUESDAY = 2,
              WEDNESDAY = 3,
              THURSDAY = 4,
              FRIDAY = 5,
              SATURDAY = 6,
              SUNDAY = 7,
            }
          }

          interface IHSMDateTimeUnixEpoch {
            timestamp?: number | Long | null;
          }

          class HSMDateTimeUnixEpoch implements IHSMDateTimeUnixEpoch {
            constructor(
              properties?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch,
            );

            public timestamp: number | Long;

            public static create(
              properties?: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch,
            ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;

            public static encode(
              message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch,
              writer?: $protobuf.Writer,
            ): $protobuf.Writer;

            public static encodeDelimited(
              message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch,
              writer?: $protobuf.Writer,
            ): $protobuf.Writer;

            public static decode(
              reader: $protobuf.Reader | Uint8Array,
              length?: number,
            ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;

            public static decodeDelimited(
              reader: $protobuf.Reader | Uint8Array,
            ): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;

            public static verify(message: { [k: string]: any }): string | null;

            public static fromObject(object: {
              [k: string]: any;
            }): proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;

            public static toObject(
              message: proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch,
              options?: $protobuf.IConversionOptions,
            ): { [k: string]: any };

            public toJSON(): { [k: string]: any };
          }
        }
      }
    }

    interface IHistorySyncNotification {
      fileSha256?: Uint8Array | null;

      fileLength?: number | Long | null;

      mediaKey?: Uint8Array | null;

      fileEncSha256?: Uint8Array | null;

      directPath?: string | null;

      syncType?: proto.Message.HistorySyncNotification.HistorySyncType | null;

      chunkOrder?: number | null;

      originalMessageId?: string | null;

      progress?: number | null;

      oldestMsgInChunkTimestampSec?: number | Long | null;

      initialHistBootstrapInlinePayload?: Uint8Array | null;

      peerDataRequestSessionId?: string | null;
    }

    class HistorySyncNotification implements IHistorySyncNotification {
      constructor(properties?: proto.Message.IHistorySyncNotification);

      public fileSha256: Uint8Array;

      public fileLength: number | Long;

      public mediaKey: Uint8Array;

      public fileEncSha256: Uint8Array;

      public directPath: string;

      public syncType: proto.Message.HistorySyncNotification.HistorySyncType;

      public chunkOrder: number;

      public originalMessageId: string;

      public progress: number;

      public oldestMsgInChunkTimestampSec: number | Long;

      public initialHistBootstrapInlinePayload: Uint8Array;

      public peerDataRequestSessionId: string;

      public static create(
        properties?: proto.Message.IHistorySyncNotification,
      ): proto.Message.HistorySyncNotification;

      public static encode(
        message: proto.Message.IHistorySyncNotification,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IHistorySyncNotification,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.HistorySyncNotification;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.HistorySyncNotification;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.HistorySyncNotification;

      public static toObject(
        message: proto.Message.HistorySyncNotification,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace HistorySyncNotification {
      enum HistorySyncType {
        INITIAL_BOOTSTRAP = 0,
        INITIAL_STATUS_V3 = 1,
        FULL = 2,
        RECENT = 3,
        PUSH_NAME = 4,
        NON_BLOCKING_DATA = 5,
        ON_DEMAND = 6,
      }
    }

    interface IImageMessage {
      url?: string | null;

      mimetype?: string | null;

      caption?: string | null;

      fileSha256?: Uint8Array | null;

      fileLength?: number | Long | null;

      height?: number | null;

      width?: number | null;

      mediaKey?: Uint8Array | null;

      fileEncSha256?: Uint8Array | null;

      interactiveAnnotations?: proto.IInteractiveAnnotation[] | null;

      directPath?: string | null;

      mediaKeyTimestamp?: number | Long | null;

      jpegThumbnail?: Uint8Array | null;

      contextInfo?: proto.IContextInfo | null;

      firstScanSidecar?: Uint8Array | null;

      firstScanLength?: number | null;

      experimentGroupId?: number | null;

      scansSidecar?: Uint8Array | null;

      scanLengths?: number[] | null;

      midQualityFileSha256?: Uint8Array | null;

      midQualityFileEncSha256?: Uint8Array | null;

      viewOnce?: boolean | null;

      thumbnailDirectPath?: string | null;

      thumbnailSha256?: Uint8Array | null;

      thumbnailEncSha256?: Uint8Array | null;

      staticUrl?: string | null;

      annotations?: proto.IInteractiveAnnotation[] | null;
    }

    class ImageMessage implements IImageMessage {
      constructor(properties?: proto.Message.IImageMessage);

      public url: string;

      public mimetype: string;

      public caption: string;

      public fileSha256: Uint8Array;

      public fileLength: number | Long;

      public height: number;

      public width: number;

      public mediaKey: Uint8Array;

      public fileEncSha256: Uint8Array;

      public interactiveAnnotations: proto.IInteractiveAnnotation[];

      public directPath: string;

      public mediaKeyTimestamp: number | Long;

      public jpegThumbnail: Uint8Array;

      public contextInfo?: proto.IContextInfo | null;

      public firstScanSidecar: Uint8Array;

      public firstScanLength: number;

      public experimentGroupId: number;

      public scansSidecar: Uint8Array;

      public scanLengths: number[];

      public midQualityFileSha256: Uint8Array;

      public midQualityFileEncSha256: Uint8Array;

      public viewOnce: boolean;

      public thumbnailDirectPath: string;

      public thumbnailSha256: Uint8Array;

      public thumbnailEncSha256: Uint8Array;

      public staticUrl: string;

      public annotations: proto.IInteractiveAnnotation[];

      public static create(
        properties?: proto.Message.IImageMessage,
      ): proto.Message.ImageMessage;

      public static encode(
        message: proto.Message.IImageMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IImageMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ImageMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ImageMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ImageMessage;

      public static toObject(
        message: proto.Message.ImageMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IInitialSecurityNotificationSettingSync {
      securityNotificationEnabled?: boolean | null;
    }

    class InitialSecurityNotificationSettingSync
      implements IInitialSecurityNotificationSettingSync
    {
      constructor(
        properties?: proto.Message.IInitialSecurityNotificationSettingSync,
      );

      public securityNotificationEnabled: boolean;

      public static create(
        properties?: proto.Message.IInitialSecurityNotificationSettingSync,
      ): proto.Message.InitialSecurityNotificationSettingSync;

      public static encode(
        message: proto.Message.IInitialSecurityNotificationSettingSync,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IInitialSecurityNotificationSettingSync,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.InitialSecurityNotificationSettingSync;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.InitialSecurityNotificationSettingSync;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.InitialSecurityNotificationSettingSync;

      public static toObject(
        message: proto.Message.InitialSecurityNotificationSettingSync,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IInteractiveMessage {
      header?: proto.Message.InteractiveMessage.IHeader | null;

      body?: proto.Message.InteractiveMessage.IBody | null;

      footer?: proto.Message.InteractiveMessage.IFooter | null;

      contextInfo?: proto.IContextInfo | null;

      shopStorefrontMessage?: proto.Message.InteractiveMessage.IShopMessage | null;

      collectionMessage?: proto.Message.InteractiveMessage.ICollectionMessage | null;

      nativeFlowMessage?: proto.Message.InteractiveMessage.INativeFlowMessage | null;

      carouselMessage?: proto.Message.InteractiveMessage.ICarouselMessage | null;
    }

    class InteractiveMessage implements IInteractiveMessage {
      constructor(properties?: proto.Message.IInteractiveMessage);

      public header?: proto.Message.InteractiveMessage.IHeader | null;

      public body?: proto.Message.InteractiveMessage.IBody | null;

      public footer?: proto.Message.InteractiveMessage.IFooter | null;

      public contextInfo?: proto.IContextInfo | null;

      public shopStorefrontMessage?: proto.Message.InteractiveMessage.IShopMessage | null;

      public collectionMessage?: proto.Message.InteractiveMessage.ICollectionMessage | null;

      public nativeFlowMessage?: proto.Message.InteractiveMessage.INativeFlowMessage | null;

      public carouselMessage?: proto.Message.InteractiveMessage.ICarouselMessage | null;

      public interactiveMessage?:
        | "shopStorefrontMessage"
        | "collectionMessage"
        | "nativeFlowMessage"
        | "carouselMessage";

      public static create(
        properties?: proto.Message.IInteractiveMessage,
      ): proto.Message.InteractiveMessage;

      public static encode(
        message: proto.Message.IInteractiveMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IInteractiveMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.InteractiveMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.InteractiveMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.InteractiveMessage;

      public static toObject(
        message: proto.Message.InteractiveMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace InteractiveMessage {
      interface IBody {
        text?: string | null;
      }

      class Body implements IBody {
        constructor(properties?: proto.Message.InteractiveMessage.IBody);

        public text: string;

        public static create(
          properties?: proto.Message.InteractiveMessage.IBody,
        ): proto.Message.InteractiveMessage.Body;

        public static encode(
          message: proto.Message.InteractiveMessage.IBody,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.InteractiveMessage.IBody,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.InteractiveMessage.Body;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.InteractiveMessage.Body;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.InteractiveMessage.Body;

        public static toObject(
          message: proto.Message.InteractiveMessage.Body,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface ICarouselMessage {
        cards?: proto.Message.IInteractiveMessage[] | null;

        messageVersion?: number | null;
      }

      class CarouselMessage implements ICarouselMessage {
        constructor(
          properties?: proto.Message.InteractiveMessage.ICarouselMessage,
        );

        public cards: proto.Message.IInteractiveMessage[];

        public messageVersion: number;

        public static create(
          properties?: proto.Message.InteractiveMessage.ICarouselMessage,
        ): proto.Message.InteractiveMessage.CarouselMessage;

        public static encode(
          message: proto.Message.InteractiveMessage.ICarouselMessage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.InteractiveMessage.ICarouselMessage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.InteractiveMessage.CarouselMessage;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.InteractiveMessage.CarouselMessage;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.InteractiveMessage.CarouselMessage;

        public static toObject(
          message: proto.Message.InteractiveMessage.CarouselMessage,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface ICollectionMessage {
        bizJid?: string | null;

        id?: string | null;

        messageVersion?: number | null;
      }

      class CollectionMessage implements ICollectionMessage {
        constructor(
          properties?: proto.Message.InteractiveMessage.ICollectionMessage,
        );

        public bizJid: string;

        public id: string;

        public messageVersion: number;

        public static create(
          properties?: proto.Message.InteractiveMessage.ICollectionMessage,
        ): proto.Message.InteractiveMessage.CollectionMessage;

        public static encode(
          message: proto.Message.InteractiveMessage.ICollectionMessage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.InteractiveMessage.ICollectionMessage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.InteractiveMessage.CollectionMessage;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.InteractiveMessage.CollectionMessage;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.InteractiveMessage.CollectionMessage;

        public static toObject(
          message: proto.Message.InteractiveMessage.CollectionMessage,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IFooter {
        text?: string | null;
      }

      class Footer implements IFooter {
        constructor(properties?: proto.Message.InteractiveMessage.IFooter);

        public text: string;

        public static create(
          properties?: proto.Message.InteractiveMessage.IFooter,
        ): proto.Message.InteractiveMessage.Footer;

        public static encode(
          message: proto.Message.InteractiveMessage.IFooter,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.InteractiveMessage.IFooter,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.InteractiveMessage.Footer;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.InteractiveMessage.Footer;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.InteractiveMessage.Footer;

        public static toObject(
          message: proto.Message.InteractiveMessage.Footer,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IHeader {
        title?: string | null;

        subtitle?: string | null;

        hasMediaAttachment?: boolean | null;

        documentMessage?: proto.Message.IDocumentMessage | null;

        imageMessage?: proto.Message.IImageMessage | null;

        jpegThumbnail?: Uint8Array | null;

        videoMessage?: proto.Message.IVideoMessage | null;

        locationMessage?: proto.Message.ILocationMessage | null;
      }

      class Header implements IHeader {
        constructor(properties?: proto.Message.InteractiveMessage.IHeader);

        public title: string;

        public subtitle: string;

        public hasMediaAttachment: boolean;

        public documentMessage?: proto.Message.IDocumentMessage | null;

        public imageMessage?: proto.Message.IImageMessage | null;

        public jpegThumbnail?: Uint8Array | null;

        public videoMessage?: proto.Message.IVideoMessage | null;

        public locationMessage?: proto.Message.ILocationMessage | null;

        public media?:
          | "documentMessage"
          | "imageMessage"
          | "jpegThumbnail"
          | "videoMessage"
          | "locationMessage";

        public static create(
          properties?: proto.Message.InteractiveMessage.IHeader,
        ): proto.Message.InteractiveMessage.Header;

        public static encode(
          message: proto.Message.InteractiveMessage.IHeader,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.InteractiveMessage.IHeader,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.InteractiveMessage.Header;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.InteractiveMessage.Header;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.InteractiveMessage.Header;

        public static toObject(
          message: proto.Message.InteractiveMessage.Header,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface INativeFlowMessage {
        buttons?:
          | proto.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton[]
          | null;

        messageParamsJson?: string | null;

        messageVersion?: number | null;
      }

      class NativeFlowMessage implements INativeFlowMessage {
        constructor(
          properties?: proto.Message.InteractiveMessage.INativeFlowMessage,
        );

        public buttons: proto.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton[];

        public messageParamsJson: string;

        public messageVersion: number;

        public static create(
          properties?: proto.Message.InteractiveMessage.INativeFlowMessage,
        ): proto.Message.InteractiveMessage.NativeFlowMessage;

        public static encode(
          message: proto.Message.InteractiveMessage.INativeFlowMessage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.InteractiveMessage.INativeFlowMessage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.InteractiveMessage.NativeFlowMessage;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.InteractiveMessage.NativeFlowMessage;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.InteractiveMessage.NativeFlowMessage;

        public static toObject(
          message: proto.Message.InteractiveMessage.NativeFlowMessage,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      namespace NativeFlowMessage {
        interface INativeFlowButton {
          name?: string | null;

          buttonParamsJson?: string | null;
        }

        class NativeFlowButton implements INativeFlowButton {
          constructor(
            properties?: proto.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton,
          );

          public name: string;

          public buttonParamsJson: string;

          public static create(
            properties?: proto.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton,
          ): proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton;

          public static encode(
            message: proto.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static encodeDelimited(
            message: proto.Message.InteractiveMessage.NativeFlowMessage.INativeFlowButton,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number,
          ): proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton;

          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array,
          ): proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton;

          public static verify(message: { [k: string]: any }): string | null;

          public static fromObject(object: {
            [k: string]: any;
          }): proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton;

          public static toObject(
            message: proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton,
            options?: $protobuf.IConversionOptions,
          ): { [k: string]: any };

          public toJSON(): { [k: string]: any };
        }
      }

      interface IShopMessage {
        id?: string | null;

        surface?: proto.Message.InteractiveMessage.ShopMessage.Surface | null;

        messageVersion?: number | null;
      }

      class ShopMessage implements IShopMessage {
        constructor(properties?: proto.Message.InteractiveMessage.IShopMessage);

        public id: string;

        public surface: proto.Message.InteractiveMessage.ShopMessage.Surface;

        public messageVersion: number;

        public static create(
          properties?: proto.Message.InteractiveMessage.IShopMessage,
        ): proto.Message.InteractiveMessage.ShopMessage;

        public static encode(
          message: proto.Message.InteractiveMessage.IShopMessage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.InteractiveMessage.IShopMessage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.InteractiveMessage.ShopMessage;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.InteractiveMessage.ShopMessage;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.InteractiveMessage.ShopMessage;

        public static toObject(
          message: proto.Message.InteractiveMessage.ShopMessage,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      namespace ShopMessage {
        enum Surface {
          UNKNOWN_SURFACE = 0,
          FB = 1,
          IG = 2,
          WA = 3,
        }
      }
    }

    interface IInteractiveResponseMessage {
      body?: proto.Message.InteractiveResponseMessage.IBody | null;

      contextInfo?: proto.IContextInfo | null;

      nativeFlowResponseMessage?: proto.Message.InteractiveResponseMessage.INativeFlowResponseMessage | null;
    }

    class InteractiveResponseMessage implements IInteractiveResponseMessage {
      constructor(properties?: proto.Message.IInteractiveResponseMessage);

      public body?: proto.Message.InteractiveResponseMessage.IBody | null;

      public contextInfo?: proto.IContextInfo | null;

      public nativeFlowResponseMessage?: proto.Message.InteractiveResponseMessage.INativeFlowResponseMessage | null;

      public interactiveResponseMessage?: "nativeFlowResponseMessage";

      public static create(
        properties?: proto.Message.IInteractiveResponseMessage,
      ): proto.Message.InteractiveResponseMessage;

      public static encode(
        message: proto.Message.IInteractiveResponseMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IInteractiveResponseMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.InteractiveResponseMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.InteractiveResponseMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.InteractiveResponseMessage;

      public static toObject(
        message: proto.Message.InteractiveResponseMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace InteractiveResponseMessage {
      interface IBody {
        text?: string | null;

        format?: proto.Message.InteractiveResponseMessage.Body.Format | null;
      }

      class Body implements IBody {
        constructor(
          properties?: proto.Message.InteractiveResponseMessage.IBody,
        );

        public text: string;

        public format: proto.Message.InteractiveResponseMessage.Body.Format;

        public static create(
          properties?: proto.Message.InteractiveResponseMessage.IBody,
        ): proto.Message.InteractiveResponseMessage.Body;

        public static encode(
          message: proto.Message.InteractiveResponseMessage.IBody,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.InteractiveResponseMessage.IBody,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.InteractiveResponseMessage.Body;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.InteractiveResponseMessage.Body;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.InteractiveResponseMessage.Body;

        public static toObject(
          message: proto.Message.InteractiveResponseMessage.Body,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      namespace Body {
        enum Format {
          DEFAULT = 0,
          EXTENSIONS_1 = 1,
        }
      }

      interface INativeFlowResponseMessage {
        name?: string | null;

        paramsJson?: string | null;

        version?: number | null;
      }

      class NativeFlowResponseMessage implements INativeFlowResponseMessage {
        constructor(
          properties?: proto.Message.InteractiveResponseMessage.INativeFlowResponseMessage,
        );

        public name: string;

        public paramsJson: string;

        public version: number;

        public static create(
          properties?: proto.Message.InteractiveResponseMessage.INativeFlowResponseMessage,
        ): proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage;

        public static encode(
          message: proto.Message.InteractiveResponseMessage.INativeFlowResponseMessage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.InteractiveResponseMessage.INativeFlowResponseMessage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage;

        public static toObject(
          message: proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }

    interface IInvoiceMessage {
      note?: string | null;

      token?: string | null;

      attachmentType?: proto.Message.InvoiceMessage.AttachmentType | null;

      attachmentMimetype?: string | null;

      attachmentMediaKey?: Uint8Array | null;

      attachmentMediaKeyTimestamp?: number | Long | null;

      attachmentFileSha256?: Uint8Array | null;

      attachmentFileEncSha256?: Uint8Array | null;

      attachmentDirectPath?: string | null;

      attachmentJpegThumbnail?: Uint8Array | null;
    }

    class InvoiceMessage implements IInvoiceMessage {
      constructor(properties?: proto.Message.IInvoiceMessage);

      public note: string;

      public token: string;

      public attachmentType: proto.Message.InvoiceMessage.AttachmentType;

      public attachmentMimetype: string;

      public attachmentMediaKey: Uint8Array;

      public attachmentMediaKeyTimestamp: number | Long;

      public attachmentFileSha256: Uint8Array;

      public attachmentFileEncSha256: Uint8Array;

      public attachmentDirectPath: string;

      public attachmentJpegThumbnail: Uint8Array;

      public static create(
        properties?: proto.Message.IInvoiceMessage,
      ): proto.Message.InvoiceMessage;

      public static encode(
        message: proto.Message.IInvoiceMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IInvoiceMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.InvoiceMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.InvoiceMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.InvoiceMessage;

      public static toObject(
        message: proto.Message.InvoiceMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace InvoiceMessage {
      enum AttachmentType {
        IMAGE = 0,
        PDF = 1,
      }
    }

    interface IKeepInChatMessage {
      key?: proto.IMessageKey | null;

      keepType?: proto.KeepType | null;

      timestampMs?: number | Long | null;
    }

    class KeepInChatMessage implements IKeepInChatMessage {
      constructor(properties?: proto.Message.IKeepInChatMessage);

      public key?: proto.IMessageKey | null;

      public keepType: proto.KeepType;

      public timestampMs: number | Long;

      public static create(
        properties?: proto.Message.IKeepInChatMessage,
      ): proto.Message.KeepInChatMessage;

      public static encode(
        message: proto.Message.IKeepInChatMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IKeepInChatMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.KeepInChatMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.KeepInChatMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.KeepInChatMessage;

      public static toObject(
        message: proto.Message.KeepInChatMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IListMessage {
      title?: string | null;

      description?: string | null;

      buttonText?: string | null;

      listType?: proto.Message.ListMessage.ListType | null;

      sections?: proto.Message.ListMessage.ISection[] | null;

      productListInfo?: proto.Message.ListMessage.IProductListInfo | null;

      footerText?: string | null;

      contextInfo?: proto.IContextInfo | null;
    }

    class ListMessage implements IListMessage {
      constructor(properties?: proto.Message.IListMessage);

      public title: string;

      public description: string;

      public buttonText: string;

      public listType: proto.Message.ListMessage.ListType;

      public sections: proto.Message.ListMessage.ISection[];

      public productListInfo?: proto.Message.ListMessage.IProductListInfo | null;

      public footerText: string;

      public contextInfo?: proto.IContextInfo | null;

      public static create(
        properties?: proto.Message.IListMessage,
      ): proto.Message.ListMessage;

      public static encode(
        message: proto.Message.IListMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IListMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ListMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ListMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ListMessage;

      public static toObject(
        message: proto.Message.ListMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ListMessage {
      enum ListType {
        UNKNOWN = 0,
        SINGLE_SELECT = 1,
        PRODUCT_LIST = 2,
      }

      interface IProduct {
        productId?: string | null;
      }

      class Product implements IProduct {
        constructor(properties?: proto.Message.ListMessage.IProduct);

        public productId: string;

        public static create(
          properties?: proto.Message.ListMessage.IProduct,
        ): proto.Message.ListMessage.Product;

        public static encode(
          message: proto.Message.ListMessage.IProduct,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.ListMessage.IProduct,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.ListMessage.Product;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.ListMessage.Product;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.ListMessage.Product;

        public static toObject(
          message: proto.Message.ListMessage.Product,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IProductListHeaderImage {
        productId?: string | null;

        jpegThumbnail?: Uint8Array | null;
      }

      class ProductListHeaderImage implements IProductListHeaderImage {
        constructor(
          properties?: proto.Message.ListMessage.IProductListHeaderImage,
        );

        public productId: string;

        public jpegThumbnail: Uint8Array;

        public static create(
          properties?: proto.Message.ListMessage.IProductListHeaderImage,
        ): proto.Message.ListMessage.ProductListHeaderImage;

        public static encode(
          message: proto.Message.ListMessage.IProductListHeaderImage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.ListMessage.IProductListHeaderImage,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.ListMessage.ProductListHeaderImage;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.ListMessage.ProductListHeaderImage;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.ListMessage.ProductListHeaderImage;

        public static toObject(
          message: proto.Message.ListMessage.ProductListHeaderImage,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IProductListInfo {
        productSections?: proto.Message.ListMessage.IProductSection[] | null;

        headerImage?: proto.Message.ListMessage.IProductListHeaderImage | null;

        businessOwnerJid?: string | null;
      }

      class ProductListInfo implements IProductListInfo {
        constructor(properties?: proto.Message.ListMessage.IProductListInfo);

        public productSections: proto.Message.ListMessage.IProductSection[];

        public headerImage?: proto.Message.ListMessage.IProductListHeaderImage | null;

        public businessOwnerJid: string;

        public static create(
          properties?: proto.Message.ListMessage.IProductListInfo,
        ): proto.Message.ListMessage.ProductListInfo;

        public static encode(
          message: proto.Message.ListMessage.IProductListInfo,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.ListMessage.IProductListInfo,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.ListMessage.ProductListInfo;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.ListMessage.ProductListInfo;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.ListMessage.ProductListInfo;

        public static toObject(
          message: proto.Message.ListMessage.ProductListInfo,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IProductSection {
        title?: string | null;

        products?: proto.Message.ListMessage.IProduct[] | null;
      }

      class ProductSection implements IProductSection {
        constructor(properties?: proto.Message.ListMessage.IProductSection);

        public title: string;

        public products: proto.Message.ListMessage.IProduct[];

        public static create(
          properties?: proto.Message.ListMessage.IProductSection,
        ): proto.Message.ListMessage.ProductSection;

        public static encode(
          message: proto.Message.ListMessage.IProductSection,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.ListMessage.IProductSection,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.ListMessage.ProductSection;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.ListMessage.ProductSection;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.ListMessage.ProductSection;

        public static toObject(
          message: proto.Message.ListMessage.ProductSection,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IRow {
        title?: string | null;

        description?: string | null;

        rowId?: string | null;
      }

      class Row implements IRow {
        constructor(properties?: proto.Message.ListMessage.IRow);

        public title: string;

        public description: string;

        public rowId: string;

        public static create(
          properties?: proto.Message.ListMessage.IRow,
        ): proto.Message.ListMessage.Row;

        public static encode(
          message: proto.Message.ListMessage.IRow,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.ListMessage.IRow,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.ListMessage.Row;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.ListMessage.Row;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.ListMessage.Row;

        public static toObject(
          message: proto.Message.ListMessage.Row,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface ISection {
        title?: string | null;

        rows?: proto.Message.ListMessage.IRow[] | null;
      }

      class Section implements ISection {
        constructor(properties?: proto.Message.ListMessage.ISection);

        public title: string;

        public rows: proto.Message.ListMessage.IRow[];

        public static create(
          properties?: proto.Message.ListMessage.ISection,
        ): proto.Message.ListMessage.Section;

        public static encode(
          message: proto.Message.ListMessage.ISection,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.ListMessage.ISection,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.ListMessage.Section;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.ListMessage.Section;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.ListMessage.Section;

        public static toObject(
          message: proto.Message.ListMessage.Section,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }

    interface IListResponseMessage {
      title?: string | null;

      listType?: proto.Message.ListResponseMessage.ListType | null;

      singleSelectReply?: proto.Message.ListResponseMessage.ISingleSelectReply | null;

      contextInfo?: proto.IContextInfo | null;

      description?: string | null;
    }

    class ListResponseMessage implements IListResponseMessage {
      constructor(properties?: proto.Message.IListResponseMessage);

      public title: string;

      public listType: proto.Message.ListResponseMessage.ListType;

      public singleSelectReply?: proto.Message.ListResponseMessage.ISingleSelectReply | null;

      public contextInfo?: proto.IContextInfo | null;

      public description: string;

      public static create(
        properties?: proto.Message.IListResponseMessage,
      ): proto.Message.ListResponseMessage;

      public static encode(
        message: proto.Message.IListResponseMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IListResponseMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ListResponseMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ListResponseMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ListResponseMessage;

      public static toObject(
        message: proto.Message.ListResponseMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ListResponseMessage {
      enum ListType {
        UNKNOWN = 0,
        SINGLE_SELECT = 1,
      }

      interface ISingleSelectReply {
        selectedRowId?: string | null;
      }

      class SingleSelectReply implements ISingleSelectReply {
        constructor(
          properties?: proto.Message.ListResponseMessage.ISingleSelectReply,
        );

        public selectedRowId: string;

        public static create(
          properties?: proto.Message.ListResponseMessage.ISingleSelectReply,
        ): proto.Message.ListResponseMessage.SingleSelectReply;

        public static encode(
          message: proto.Message.ListResponseMessage.ISingleSelectReply,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.ListResponseMessage.ISingleSelectReply,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.ListResponseMessage.SingleSelectReply;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.ListResponseMessage.SingleSelectReply;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.ListResponseMessage.SingleSelectReply;

        public static toObject(
          message: proto.Message.ListResponseMessage.SingleSelectReply,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }

    interface ILiveLocationMessage {
      degreesLatitude?: number | null;

      degreesLongitude?: number | null;

      accuracyInMeters?: number | null;

      speedInMps?: number | null;

      degreesClockwiseFromMagneticNorth?: number | null;

      caption?: string | null;

      sequenceNumber?: number | Long | null;

      timeOffset?: number | null;

      jpegThumbnail?: Uint8Array | null;

      contextInfo?: proto.IContextInfo | null;
    }

    class LiveLocationMessage implements ILiveLocationMessage {
      constructor(properties?: proto.Message.ILiveLocationMessage);

      public degreesLatitude: number;

      public degreesLongitude: number;

      public accuracyInMeters: number;

      public speedInMps: number;

      public degreesClockwiseFromMagneticNorth: number;

      public caption: string;

      public sequenceNumber: number | Long;

      public timeOffset: number;

      public jpegThumbnail: Uint8Array;

      public contextInfo?: proto.IContextInfo | null;

      public static create(
        properties?: proto.Message.ILiveLocationMessage,
      ): proto.Message.LiveLocationMessage;

      public static encode(
        message: proto.Message.ILiveLocationMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.ILiveLocationMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.LiveLocationMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.LiveLocationMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.LiveLocationMessage;

      public static toObject(
        message: proto.Message.LiveLocationMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ILocationMessage {
      degreesLatitude?: number | null;

      degreesLongitude?: number | null;

      name?: string | null;

      address?: string | null;

      url?: string | null;

      isLive?: boolean | null;

      accuracyInMeters?: number | null;

      speedInMps?: number | null;

      degreesClockwiseFromMagneticNorth?: number | null;

      comment?: string | null;

      jpegThumbnail?: Uint8Array | null;

      contextInfo?: proto.IContextInfo | null;
    }

    class LocationMessage implements ILocationMessage {
      constructor(properties?: proto.Message.ILocationMessage);

      public degreesLatitude: number;

      public degreesLongitude: number;

      public name: string;

      public address: string;

      public url: string;

      public isLive: boolean;

      public accuracyInMeters: number;

      public speedInMps: number;

      public degreesClockwiseFromMagneticNorth: number;

      public comment: string;

      public jpegThumbnail: Uint8Array;

      public contextInfo?: proto.IContextInfo | null;

      public static create(
        properties?: proto.Message.ILocationMessage,
      ): proto.Message.LocationMessage;

      public static encode(
        message: proto.Message.ILocationMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.ILocationMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.LocationMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.LocationMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.LocationMessage;

      public static toObject(
        message: proto.Message.LocationMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IMessageHistoryBundle {
      mimetype?: string | null;

      fileSha256?: Uint8Array | null;

      mediaKey?: Uint8Array | null;

      fileEncSha256?: Uint8Array | null;

      directPath?: string | null;

      mediaKeyTimestamp?: number | Long | null;

      contextInfo?: proto.IContextInfo | null;

      participants?: string[] | null;
    }

    class MessageHistoryBundle implements IMessageHistoryBundle {
      constructor(properties?: proto.Message.IMessageHistoryBundle);

      public mimetype: string;

      public fileSha256: Uint8Array;

      public mediaKey: Uint8Array;

      public fileEncSha256: Uint8Array;

      public directPath: string;

      public mediaKeyTimestamp: number | Long;

      public contextInfo?: proto.IContextInfo | null;

      public participants: string[];

      public static create(
        properties?: proto.Message.IMessageHistoryBundle,
      ): proto.Message.MessageHistoryBundle;

      public static encode(
        message: proto.Message.IMessageHistoryBundle,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IMessageHistoryBundle,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.MessageHistoryBundle;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.MessageHistoryBundle;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.MessageHistoryBundle;

      public static toObject(
        message: proto.Message.MessageHistoryBundle,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface INewsletterAdminInviteMessage {
      newsletterJid?: string | null;

      newsletterName?: string | null;

      jpegThumbnail?: Uint8Array | null;

      caption?: string | null;

      inviteExpiration?: number | Long | null;
    }

    class NewsletterAdminInviteMessage
      implements INewsletterAdminInviteMessage
    {
      constructor(properties?: proto.Message.INewsletterAdminInviteMessage);

      public newsletterJid: string;

      public newsletterName: string;

      public jpegThumbnail: Uint8Array;

      public caption: string;

      public inviteExpiration: number | Long;

      public static create(
        properties?: proto.Message.INewsletterAdminInviteMessage,
      ): proto.Message.NewsletterAdminInviteMessage;

      public static encode(
        message: proto.Message.INewsletterAdminInviteMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.INewsletterAdminInviteMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.NewsletterAdminInviteMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.NewsletterAdminInviteMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.NewsletterAdminInviteMessage;

      public static toObject(
        message: proto.Message.NewsletterAdminInviteMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IOrderMessage {
      orderId?: string | null;

      thumbnail?: Uint8Array | null;

      itemCount?: number | null;

      status?: proto.Message.OrderMessage.OrderStatus | null;

      surface?: proto.Message.OrderMessage.OrderSurface | null;

      message?: string | null;

      orderTitle?: string | null;

      sellerJid?: string | null;

      token?: string | null;

      totalAmount1000?: number | Long | null;

      totalCurrencyCode?: string | null;

      contextInfo?: proto.IContextInfo | null;

      messageVersion?: number | null;

      orderRequestMessageId?: proto.IMessageKey | null;
    }

    class OrderMessage implements IOrderMessage {
      constructor(properties?: proto.Message.IOrderMessage);

      public orderId: string;

      public thumbnail: Uint8Array;

      public itemCount: number;

      public status: proto.Message.OrderMessage.OrderStatus;

      public surface: proto.Message.OrderMessage.OrderSurface;

      public message: string;

      public orderTitle: string;

      public sellerJid: string;

      public token: string;

      public totalAmount1000: number | Long;

      public totalCurrencyCode: string;

      public contextInfo?: proto.IContextInfo | null;

      public messageVersion: number;

      public orderRequestMessageId?: proto.IMessageKey | null;

      public static create(
        properties?: proto.Message.IOrderMessage,
      ): proto.Message.OrderMessage;

      public static encode(
        message: proto.Message.IOrderMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IOrderMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.OrderMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.OrderMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.OrderMessage;

      public static toObject(
        message: proto.Message.OrderMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace OrderMessage {
      enum OrderStatus {
        INQUIRY = 1,
        ACCEPTED = 2,
        DECLINED = 3,
      }

      enum OrderSurface {
        CATALOG = 1,
      }
    }

    interface IPaymentInviteMessage {
      serviceType?: proto.Message.PaymentInviteMessage.ServiceType | null;

      expiryTimestamp?: number | Long | null;
    }

    class PaymentInviteMessage implements IPaymentInviteMessage {
      constructor(properties?: proto.Message.IPaymentInviteMessage);

      public serviceType: proto.Message.PaymentInviteMessage.ServiceType;

      public expiryTimestamp: number | Long;

      public static create(
        properties?: proto.Message.IPaymentInviteMessage,
      ): proto.Message.PaymentInviteMessage;

      public static encode(
        message: proto.Message.IPaymentInviteMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IPaymentInviteMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.PaymentInviteMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.PaymentInviteMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.PaymentInviteMessage;

      public static toObject(
        message: proto.Message.PaymentInviteMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace PaymentInviteMessage {
      enum ServiceType {
        UNKNOWN = 0,
        FBPAY = 1,
        NOVI = 2,
        UPI = 3,
      }
    }

    interface IPeerDataOperationRequestMessage {
      peerDataOperationRequestType?: proto.Message.PeerDataOperationRequestType | null;

      requestStickerReupload?:
        | proto.Message.PeerDataOperationRequestMessage.IRequestStickerReupload[]
        | null;

      requestUrlPreview?:
        | proto.Message.PeerDataOperationRequestMessage.IRequestUrlPreview[]
        | null;

      historySyncOnDemandRequest?: proto.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest | null;

      placeholderMessageResendRequest?:
        | proto.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest[]
        | null;
    }

    class PeerDataOperationRequestMessage
      implements IPeerDataOperationRequestMessage
    {
      constructor(properties?: proto.Message.IPeerDataOperationRequestMessage);

      public peerDataOperationRequestType: proto.Message.PeerDataOperationRequestType;

      public requestStickerReupload: proto.Message.PeerDataOperationRequestMessage.IRequestStickerReupload[];

      public requestUrlPreview: proto.Message.PeerDataOperationRequestMessage.IRequestUrlPreview[];

      public historySyncOnDemandRequest?: proto.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest | null;

      public placeholderMessageResendRequest: proto.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest[];

      public static create(
        properties?: proto.Message.IPeerDataOperationRequestMessage,
      ): proto.Message.PeerDataOperationRequestMessage;

      public static encode(
        message: proto.Message.IPeerDataOperationRequestMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IPeerDataOperationRequestMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.PeerDataOperationRequestMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.PeerDataOperationRequestMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.PeerDataOperationRequestMessage;

      public static toObject(
        message: proto.Message.PeerDataOperationRequestMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace PeerDataOperationRequestMessage {
      interface IHistorySyncOnDemandRequest {
        chatJid?: string | null;

        oldestMsgId?: string | null;

        oldestMsgFromMe?: boolean | null;

        onDemandMsgCount?: number | null;

        oldestMsgTimestampMs?: number | Long | null;
      }

      class HistorySyncOnDemandRequest implements IHistorySyncOnDemandRequest {
        constructor(
          properties?: proto.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest,
        );

        public chatJid: string;

        public oldestMsgId: string;

        public oldestMsgFromMe: boolean;

        public onDemandMsgCount: number;

        public oldestMsgTimestampMs: number | Long;

        public static create(
          properties?: proto.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest,
        ): proto.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;

        public static encode(
          message: proto.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;

        public static toObject(
          message: proto.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IPlaceholderMessageResendRequest {
        messageKey?: proto.IMessageKey | null;
      }

      class PlaceholderMessageResendRequest
        implements IPlaceholderMessageResendRequest
      {
        constructor(
          properties?: proto.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest,
        );

        public messageKey?: proto.IMessageKey | null;

        public static create(
          properties?: proto.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest,
        ): proto.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;

        public static encode(
          message: proto.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;

        public static toObject(
          message: proto.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IRequestStickerReupload {
        fileSha256?: string | null;
      }

      class RequestStickerReupload implements IRequestStickerReupload {
        constructor(
          properties?: proto.Message.PeerDataOperationRequestMessage.IRequestStickerReupload,
        );

        public fileSha256: string;

        public static create(
          properties?: proto.Message.PeerDataOperationRequestMessage.IRequestStickerReupload,
        ): proto.Message.PeerDataOperationRequestMessage.RequestStickerReupload;

        public static encode(
          message: proto.Message.PeerDataOperationRequestMessage.IRequestStickerReupload,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.PeerDataOperationRequestMessage.IRequestStickerReupload,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.PeerDataOperationRequestMessage.RequestStickerReupload;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.PeerDataOperationRequestMessage.RequestStickerReupload;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.PeerDataOperationRequestMessage.RequestStickerReupload;

        public static toObject(
          message: proto.Message.PeerDataOperationRequestMessage.RequestStickerReupload,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IRequestUrlPreview {
        url?: string | null;

        includeHqThumbnail?: boolean | null;
      }

      class RequestUrlPreview implements IRequestUrlPreview {
        constructor(
          properties?: proto.Message.PeerDataOperationRequestMessage.IRequestUrlPreview,
        );

        public url: string;

        public includeHqThumbnail: boolean;

        public static create(
          properties?: proto.Message.PeerDataOperationRequestMessage.IRequestUrlPreview,
        ): proto.Message.PeerDataOperationRequestMessage.RequestUrlPreview;

        public static encode(
          message: proto.Message.PeerDataOperationRequestMessage.IRequestUrlPreview,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.PeerDataOperationRequestMessage.IRequestUrlPreview,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.PeerDataOperationRequestMessage.RequestUrlPreview;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.PeerDataOperationRequestMessage.RequestUrlPreview;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.PeerDataOperationRequestMessage.RequestUrlPreview;

        public static toObject(
          message: proto.Message.PeerDataOperationRequestMessage.RequestUrlPreview,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }

    interface IPeerDataOperationRequestResponseMessage {
      peerDataOperationRequestType?: proto.Message.PeerDataOperationRequestType | null;

      stanzaId?: string | null;

      peerDataOperationResult?:
        | proto.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult[]
        | null;
    }

    class PeerDataOperationRequestResponseMessage
      implements IPeerDataOperationRequestResponseMessage
    {
      constructor(
        properties?: proto.Message.IPeerDataOperationRequestResponseMessage,
      );

      public peerDataOperationRequestType: proto.Message.PeerDataOperationRequestType;

      public stanzaId: string;

      public peerDataOperationResult: proto.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult[];

      public static create(
        properties?: proto.Message.IPeerDataOperationRequestResponseMessage,
      ): proto.Message.PeerDataOperationRequestResponseMessage;

      public static encode(
        message: proto.Message.IPeerDataOperationRequestResponseMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IPeerDataOperationRequestResponseMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.PeerDataOperationRequestResponseMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.PeerDataOperationRequestResponseMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.PeerDataOperationRequestResponseMessage;

      public static toObject(
        message: proto.Message.PeerDataOperationRequestResponseMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace PeerDataOperationRequestResponseMessage {
      interface IPeerDataOperationResult {
        mediaUploadResult?: proto.MediaRetryNotification.ResultType | null;

        stickerMessage?: proto.Message.IStickerMessage | null;

        linkPreviewResponse?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse | null;

        placeholderMessageResendResponse?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse | null;
      }

      class PeerDataOperationResult implements IPeerDataOperationResult {
        constructor(
          properties?: proto.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult,
        );

        public mediaUploadResult: proto.MediaRetryNotification.ResultType;

        public stickerMessage?: proto.Message.IStickerMessage | null;

        public linkPreviewResponse?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse | null;

        public placeholderMessageResendResponse?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse | null;

        public static create(
          properties?: proto.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult,
        ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;

        public static encode(
          message: proto.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;

        public static toObject(
          message: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      namespace PeerDataOperationResult {
        interface ILinkPreviewResponse {
          url?: string | null;

          title?: string | null;

          description?: string | null;

          thumbData?: Uint8Array | null;

          canonicalUrl?: string | null;

          matchText?: string | null;

          previewType?: string | null;

          hqThumbnail?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail | null;
        }

        class LinkPreviewResponse implements ILinkPreviewResponse {
          constructor(
            properties?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse,
          );

          public url: string;

          public title: string;

          public description: string;

          public thumbData: Uint8Array;

          public canonicalUrl: string;

          public matchText: string;

          public previewType: string;

          public hqThumbnail?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail | null;

          public static create(
            properties?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse,
          ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;

          public static encode(
            message: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static encodeDelimited(
            message: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number,
          ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;

          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array,
          ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;

          public static verify(message: { [k: string]: any }): string | null;

          public static fromObject(object: {
            [k: string]: any;
          }): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;

          public static toObject(
            message: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse,
            options?: $protobuf.IConversionOptions,
          ): { [k: string]: any };

          public toJSON(): { [k: string]: any };
        }

        namespace LinkPreviewResponse {
          interface ILinkPreviewHighQualityThumbnail {
            directPath?: string | null;

            thumbHash?: string | null;

            encThumbHash?: string | null;

            mediaKey?: Uint8Array | null;

            mediaKeyTimestampMs?: number | Long | null;

            thumbWidth?: number | null;

            thumbHeight?: number | null;
          }

          class LinkPreviewHighQualityThumbnail
            implements ILinkPreviewHighQualityThumbnail
          {
            constructor(
              properties?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail,
            );

            public directPath: string;

            public thumbHash: string;

            public encThumbHash: string;

            public mediaKey: Uint8Array;

            public mediaKeyTimestampMs: number | Long;

            public thumbWidth: number;

            public thumbHeight: number;

            public static create(
              properties?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail,
            ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;

            public static encode(
              message: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail,
              writer?: $protobuf.Writer,
            ): $protobuf.Writer;

            public static encodeDelimited(
              message: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail,
              writer?: $protobuf.Writer,
            ): $protobuf.Writer;

            public static decode(
              reader: $protobuf.Reader | Uint8Array,
              length?: number,
            ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;

            public static decodeDelimited(
              reader: $protobuf.Reader | Uint8Array,
            ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;

            public static verify(message: { [k: string]: any }): string | null;

            public static fromObject(object: {
              [k: string]: any;
            }): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;

            public static toObject(
              message: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail,
              options?: $protobuf.IConversionOptions,
            ): { [k: string]: any };

            public toJSON(): { [k: string]: any };
          }
        }

        interface IPlaceholderMessageResendResponse {
          webMessageInfoBytes?: Uint8Array | null;
        }

        class PlaceholderMessageResendResponse
          implements IPlaceholderMessageResendResponse
        {
          constructor(
            properties?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse,
          );

          public webMessageInfoBytes: Uint8Array;

          public static create(
            properties?: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse,
          ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;

          public static encode(
            message: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static encodeDelimited(
            message: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse,
            writer?: $protobuf.Writer,
          ): $protobuf.Writer;

          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number,
          ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;

          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array,
          ): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;

          public static verify(message: { [k: string]: any }): string | null;

          public static fromObject(object: {
            [k: string]: any;
          }): proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;

          public static toObject(
            message: proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse,
            options?: $protobuf.IConversionOptions,
          ): { [k: string]: any };

          public toJSON(): { [k: string]: any };
        }
      }
    }

    enum PeerDataOperationRequestType {
      UPLOAD_STICKER = 0,
      SEND_RECENT_STICKER_BOOTSTRAP = 1,
      GENERATE_LINK_PREVIEW = 2,
      HISTORY_SYNC_ON_DEMAND = 3,
      PLACEHOLDER_MESSAGE_RESEND = 4,
    }

    interface IPinInChatMessage {
      key?: proto.IMessageKey | null;

      type?: proto.Message.PinInChatMessage.Type | null;

      senderTimestampMs?: number | Long | null;
    }

    class PinInChatMessage implements IPinInChatMessage {
      constructor(properties?: proto.Message.IPinInChatMessage);

      public key?: proto.IMessageKey | null;

      public type: proto.Message.PinInChatMessage.Type;

      public senderTimestampMs: number | Long;

      public static create(
        properties?: proto.Message.IPinInChatMessage,
      ): proto.Message.PinInChatMessage;

      public static encode(
        message: proto.Message.IPinInChatMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IPinInChatMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.PinInChatMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.PinInChatMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.PinInChatMessage;

      public static toObject(
        message: proto.Message.PinInChatMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace PinInChatMessage {
      enum Type {
        UNKNOWN_TYPE = 0,
        PIN_FOR_ALL = 1,
        UNPIN_FOR_ALL = 2,
      }
    }

    interface IPlaceholderMessage {
      type?: proto.Message.PlaceholderMessage.PlaceholderType | null;
    }

    class PlaceholderMessage implements IPlaceholderMessage {
      constructor(properties?: proto.Message.IPlaceholderMessage);

      public type: proto.Message.PlaceholderMessage.PlaceholderType;

      public static create(
        properties?: proto.Message.IPlaceholderMessage,
      ): proto.Message.PlaceholderMessage;

      public static encode(
        message: proto.Message.IPlaceholderMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IPlaceholderMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.PlaceholderMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.PlaceholderMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.PlaceholderMessage;

      public static toObject(
        message: proto.Message.PlaceholderMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace PlaceholderMessage {
      enum PlaceholderType {
        MASK_LINKED_DEVICES = 0,
      }
    }

    interface IPollCreationMessage {
      encKey?: Uint8Array | null;

      name?: string | null;

      options?: proto.Message.PollCreationMessage.IOption[] | null;

      selectableOptionsCount?: number | null;

      contextInfo?: proto.IContextInfo | null;
    }

    class PollCreationMessage implements IPollCreationMessage {
      constructor(properties?: proto.Message.IPollCreationMessage);

      public encKey: Uint8Array;

      public name: string;

      public options: proto.Message.PollCreationMessage.IOption[];

      public selectableOptionsCount: number;

      public contextInfo?: proto.IContextInfo | null;

      public static create(
        properties?: proto.Message.IPollCreationMessage,
      ): proto.Message.PollCreationMessage;

      public static encode(
        message: proto.Message.IPollCreationMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IPollCreationMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.PollCreationMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.PollCreationMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.PollCreationMessage;

      public static toObject(
        message: proto.Message.PollCreationMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace PollCreationMessage {
      interface IOption {
        optionName?: string | null;
      }

      class Option implements IOption {
        constructor(properties?: proto.Message.PollCreationMessage.IOption);

        public optionName: string;

        public static create(
          properties?: proto.Message.PollCreationMessage.IOption,
        ): proto.Message.PollCreationMessage.Option;

        public static encode(
          message: proto.Message.PollCreationMessage.IOption,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.PollCreationMessage.IOption,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.PollCreationMessage.Option;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.PollCreationMessage.Option;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.PollCreationMessage.Option;

        public static toObject(
          message: proto.Message.PollCreationMessage.Option,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }

    interface IPollEncValue {
      encPayload?: Uint8Array | null;

      encIv?: Uint8Array | null;
    }

    class PollEncValue implements IPollEncValue {
      constructor(properties?: proto.Message.IPollEncValue);

      public encPayload: Uint8Array;

      public encIv: Uint8Array;

      public static create(
        properties?: proto.Message.IPollEncValue,
      ): proto.Message.PollEncValue;

      public static encode(
        message: proto.Message.IPollEncValue,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IPollEncValue,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.PollEncValue;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.PollEncValue;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.PollEncValue;

      public static toObject(
        message: proto.Message.PollEncValue,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPollUpdateMessage {
      pollCreationMessageKey?: proto.IMessageKey | null;

      vote?: proto.Message.IPollEncValue | null;

      metadata?: proto.Message.IPollUpdateMessageMetadata | null;

      senderTimestampMs?: number | Long | null;
    }

    class PollUpdateMessage implements IPollUpdateMessage {
      constructor(properties?: proto.Message.IPollUpdateMessage);

      public pollCreationMessageKey?: proto.IMessageKey | null;

      public vote?: proto.Message.IPollEncValue | null;

      public metadata?: proto.Message.IPollUpdateMessageMetadata | null;

      public senderTimestampMs: number | Long;

      public static create(
        properties?: proto.Message.IPollUpdateMessage,
      ): proto.Message.PollUpdateMessage;

      public static encode(
        message: proto.Message.IPollUpdateMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IPollUpdateMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.PollUpdateMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.PollUpdateMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.PollUpdateMessage;

      public static toObject(
        message: proto.Message.PollUpdateMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPollUpdateMessageMetadata {}

    class PollUpdateMessageMetadata implements IPollUpdateMessageMetadata {
      constructor(properties?: proto.Message.IPollUpdateMessageMetadata);

      public static create(
        properties?: proto.Message.IPollUpdateMessageMetadata,
      ): proto.Message.PollUpdateMessageMetadata;

      public static encode(
        message: proto.Message.IPollUpdateMessageMetadata,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IPollUpdateMessageMetadata,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.PollUpdateMessageMetadata;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.PollUpdateMessageMetadata;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.PollUpdateMessageMetadata;

      public static toObject(
        message: proto.Message.PollUpdateMessageMetadata,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPollVoteMessage {
      selectedOptions?: Uint8Array[] | null;
    }

    class PollVoteMessage implements IPollVoteMessage {
      constructor(properties?: proto.Message.IPollVoteMessage);

      public selectedOptions: Uint8Array[];

      public static create(
        properties?: proto.Message.IPollVoteMessage,
      ): proto.Message.PollVoteMessage;

      public static encode(
        message: proto.Message.IPollVoteMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IPollVoteMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.PollVoteMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.PollVoteMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.PollVoteMessage;

      public static toObject(
        message: proto.Message.PollVoteMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IProductMessage {
      product?: proto.Message.ProductMessage.IProductSnapshot | null;

      businessOwnerJid?: string | null;

      catalog?: proto.Message.ProductMessage.ICatalogSnapshot | null;

      body?: string | null;

      footer?: string | null;

      contextInfo?: proto.IContextInfo | null;
    }

    class ProductMessage implements IProductMessage {
      constructor(properties?: proto.Message.IProductMessage);

      public product?: proto.Message.ProductMessage.IProductSnapshot | null;

      public businessOwnerJid: string;

      public catalog?: proto.Message.ProductMessage.ICatalogSnapshot | null;

      public body: string;

      public footer: string;

      public contextInfo?: proto.IContextInfo | null;

      public static create(
        properties?: proto.Message.IProductMessage,
      ): proto.Message.ProductMessage;

      public static encode(
        message: proto.Message.IProductMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IProductMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ProductMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ProductMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ProductMessage;

      public static toObject(
        message: proto.Message.ProductMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ProductMessage {
      interface ICatalogSnapshot {
        catalogImage?: proto.Message.IImageMessage | null;

        title?: string | null;

        description?: string | null;
      }

      class CatalogSnapshot implements ICatalogSnapshot {
        constructor(properties?: proto.Message.ProductMessage.ICatalogSnapshot);

        public catalogImage?: proto.Message.IImageMessage | null;

        public title: string;

        public description: string;

        public static create(
          properties?: proto.Message.ProductMessage.ICatalogSnapshot,
        ): proto.Message.ProductMessage.CatalogSnapshot;

        public static encode(
          message: proto.Message.ProductMessage.ICatalogSnapshot,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.ProductMessage.ICatalogSnapshot,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.ProductMessage.CatalogSnapshot;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.ProductMessage.CatalogSnapshot;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.ProductMessage.CatalogSnapshot;

        public static toObject(
          message: proto.Message.ProductMessage.CatalogSnapshot,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IProductSnapshot {
        productImage?: proto.Message.IImageMessage | null;

        productId?: string | null;

        title?: string | null;

        description?: string | null;

        currencyCode?: string | null;

        priceAmount1000?: number | Long | null;

        retailerId?: string | null;

        url?: string | null;

        productImageCount?: number | null;

        firstImageId?: string | null;

        salePriceAmount1000?: number | Long | null;
      }

      class ProductSnapshot implements IProductSnapshot {
        constructor(properties?: proto.Message.ProductMessage.IProductSnapshot);

        public productImage?: proto.Message.IImageMessage | null;

        public productId: string;

        public title: string;

        public description: string;

        public currencyCode: string;

        public priceAmount1000: number | Long;

        public retailerId: string;

        public url: string;

        public productImageCount: number;

        public firstImageId: string;

        public salePriceAmount1000: number | Long;

        public static create(
          properties?: proto.Message.ProductMessage.IProductSnapshot,
        ): proto.Message.ProductMessage.ProductSnapshot;

        public static encode(
          message: proto.Message.ProductMessage.IProductSnapshot,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.ProductMessage.IProductSnapshot,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.ProductMessage.ProductSnapshot;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.ProductMessage.ProductSnapshot;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.ProductMessage.ProductSnapshot;

        public static toObject(
          message: proto.Message.ProductMessage.ProductSnapshot,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }

    interface IProtocolMessage {
      key?: proto.IMessageKey | null;

      type?: proto.Message.ProtocolMessage.Type | null;

      ephemeralExpiration?: number | null;

      ephemeralSettingTimestamp?: number | Long | null;

      historySyncNotification?: proto.Message.IHistorySyncNotification | null;

      appStateSyncKeyShare?: proto.Message.IAppStateSyncKeyShare | null;

      appStateSyncKeyRequest?: proto.Message.IAppStateSyncKeyRequest | null;

      initialSecurityNotificationSettingSync?: proto.Message.IInitialSecurityNotificationSettingSync | null;

      appStateFatalExceptionNotification?: proto.Message.IAppStateFatalExceptionNotification | null;

      disappearingMode?: proto.IDisappearingMode | null;

      editedMessage?: proto.IMessage | null;

      timestampMs?: number | Long | null;

      peerDataOperationRequestMessage?: proto.Message.IPeerDataOperationRequestMessage | null;

      peerDataOperationRequestResponseMessage?: proto.Message.IPeerDataOperationRequestResponseMessage | null;

      botFeedbackMessage?: proto.Message.IBotFeedbackMessage | null;

      invokerJid?: string | null;

      requestWelcomeMessageMetadata?: proto.Message.IRequestWelcomeMessageMetadata | null;

      mediaNotifyMessage?: proto.IMediaNotifyMessage | null;
    }

    class ProtocolMessage implements IProtocolMessage {
      constructor(properties?: proto.Message.IProtocolMessage);

      public key?: proto.IMessageKey | null;

      public type: proto.Message.ProtocolMessage.Type;

      public ephemeralExpiration: number;

      public ephemeralSettingTimestamp: number | Long;

      public historySyncNotification?: proto.Message.IHistorySyncNotification | null;

      public appStateSyncKeyShare?: proto.Message.IAppStateSyncKeyShare | null;

      public appStateSyncKeyRequest?: proto.Message.IAppStateSyncKeyRequest | null;

      public initialSecurityNotificationSettingSync?: proto.Message.IInitialSecurityNotificationSettingSync | null;

      public appStateFatalExceptionNotification?: proto.Message.IAppStateFatalExceptionNotification | null;

      public disappearingMode?: proto.IDisappearingMode | null;

      public editedMessage?: proto.IMessage | null;

      public timestampMs: number | Long;

      public peerDataOperationRequestMessage?: proto.Message.IPeerDataOperationRequestMessage | null;

      public peerDataOperationRequestResponseMessage?: proto.Message.IPeerDataOperationRequestResponseMessage | null;

      public botFeedbackMessage?: proto.Message.IBotFeedbackMessage | null;

      public invokerJid: string;

      public requestWelcomeMessageMetadata?: proto.Message.IRequestWelcomeMessageMetadata | null;

      public mediaNotifyMessage?: proto.IMediaNotifyMessage | null;

      public static create(
        properties?: proto.Message.IProtocolMessage,
      ): proto.Message.ProtocolMessage;

      public static encode(
        message: proto.Message.IProtocolMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IProtocolMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ProtocolMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ProtocolMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ProtocolMessage;

      public static toObject(
        message: proto.Message.ProtocolMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ProtocolMessage {
      enum Type {
        REVOKE = 0,
        EPHEMERAL_SETTING = 3,
        EPHEMERAL_SYNC_RESPONSE = 4,
        HISTORY_SYNC_NOTIFICATION = 5,
        APP_STATE_SYNC_KEY_SHARE = 6,
        APP_STATE_SYNC_KEY_REQUEST = 7,
        MSG_FANOUT_BACKFILL_REQUEST = 8,
        INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC = 9,
        APP_STATE_FATAL_EXCEPTION_NOTIFICATION = 10,
        SHARE_PHONE_NUMBER = 11,
        MESSAGE_EDIT = 14,
        PEER_DATA_OPERATION_REQUEST_MESSAGE = 16,
        PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE = 17,
        REQUEST_WELCOME_MESSAGE = 18,
        BOT_FEEDBACK_MESSAGE = 19,
        MEDIA_NOTIFY_MESSAGE = 20,
      }
    }

    interface IReactionMessage {
      key?: proto.IMessageKey | null;

      text?: string | null;

      groupingKey?: string | null;

      senderTimestampMs?: number | Long | null;
    }

    class ReactionMessage implements IReactionMessage {
      constructor(properties?: proto.Message.IReactionMessage);

      public key?: proto.IMessageKey | null;

      public text: string;

      public groupingKey: string;

      public senderTimestampMs: number | Long;

      public static create(
        properties?: proto.Message.IReactionMessage,
      ): proto.Message.ReactionMessage;

      public static encode(
        message: proto.Message.IReactionMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IReactionMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ReactionMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ReactionMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ReactionMessage;

      public static toObject(
        message: proto.Message.ReactionMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IRequestPaymentMessage {
      noteMessage?: proto.IMessage | null;

      currencyCodeIso4217?: string | null;

      amount1000?: number | Long | null;

      requestFrom?: string | null;

      expiryTimestamp?: number | Long | null;

      amount?: proto.IMoney | null;

      background?: proto.IPaymentBackground | null;
    }

    class RequestPaymentMessage implements IRequestPaymentMessage {
      constructor(properties?: proto.Message.IRequestPaymentMessage);

      public noteMessage?: proto.IMessage | null;

      public currencyCodeIso4217: string;

      public amount1000: number | Long;

      public requestFrom: string;

      public expiryTimestamp: number | Long;

      public amount?: proto.IMoney | null;

      public background?: proto.IPaymentBackground | null;

      public static create(
        properties?: proto.Message.IRequestPaymentMessage,
      ): proto.Message.RequestPaymentMessage;

      public static encode(
        message: proto.Message.IRequestPaymentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IRequestPaymentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.RequestPaymentMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.RequestPaymentMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.RequestPaymentMessage;

      public static toObject(
        message: proto.Message.RequestPaymentMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IRequestPhoneNumberMessage {
      contextInfo?: proto.IContextInfo | null;
    }

    class RequestPhoneNumberMessage implements IRequestPhoneNumberMessage {
      constructor(properties?: proto.Message.IRequestPhoneNumberMessage);

      public contextInfo?: proto.IContextInfo | null;

      public static create(
        properties?: proto.Message.IRequestPhoneNumberMessage,
      ): proto.Message.RequestPhoneNumberMessage;

      public static encode(
        message: proto.Message.IRequestPhoneNumberMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IRequestPhoneNumberMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.RequestPhoneNumberMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.RequestPhoneNumberMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.RequestPhoneNumberMessage;

      public static toObject(
        message: proto.Message.RequestPhoneNumberMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IRequestWelcomeMessageMetadata {
      localChatState?: proto.Message.RequestWelcomeMessageMetadata.LocalChatState | null;
    }

    class RequestWelcomeMessageMetadata
      implements IRequestWelcomeMessageMetadata
    {
      constructor(properties?: proto.Message.IRequestWelcomeMessageMetadata);

      public localChatState: proto.Message.RequestWelcomeMessageMetadata.LocalChatState;

      public static create(
        properties?: proto.Message.IRequestWelcomeMessageMetadata,
      ): proto.Message.RequestWelcomeMessageMetadata;

      public static encode(
        message: proto.Message.IRequestWelcomeMessageMetadata,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IRequestWelcomeMessageMetadata,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.RequestWelcomeMessageMetadata;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.RequestWelcomeMessageMetadata;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.RequestWelcomeMessageMetadata;

      public static toObject(
        message: proto.Message.RequestWelcomeMessageMetadata,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace RequestWelcomeMessageMetadata {
      enum LocalChatState {
        EMPTY = 0,
        NON_EMPTY = 1,
      }
    }

    interface IScheduledCallCreationMessage {
      scheduledTimestampMs?: number | Long | null;

      callType?: proto.Message.ScheduledCallCreationMessage.CallType | null;

      title?: string | null;
    }

    class ScheduledCallCreationMessage
      implements IScheduledCallCreationMessage
    {
      constructor(properties?: proto.Message.IScheduledCallCreationMessage);

      public scheduledTimestampMs: number | Long;

      public callType: proto.Message.ScheduledCallCreationMessage.CallType;

      public title: string;

      public static create(
        properties?: proto.Message.IScheduledCallCreationMessage,
      ): proto.Message.ScheduledCallCreationMessage;

      public static encode(
        message: proto.Message.IScheduledCallCreationMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IScheduledCallCreationMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ScheduledCallCreationMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ScheduledCallCreationMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ScheduledCallCreationMessage;

      public static toObject(
        message: proto.Message.ScheduledCallCreationMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ScheduledCallCreationMessage {
      enum CallType {
        UNKNOWN = 0,
        VOICE = 1,
        VIDEO = 2,
      }
    }

    interface IScheduledCallEditMessage {
      key?: proto.IMessageKey | null;

      editType?: proto.Message.ScheduledCallEditMessage.EditType | null;
    }

    class ScheduledCallEditMessage implements IScheduledCallEditMessage {
      constructor(properties?: proto.Message.IScheduledCallEditMessage);

      public key?: proto.IMessageKey | null;

      public editType: proto.Message.ScheduledCallEditMessage.EditType;

      public static create(
        properties?: proto.Message.IScheduledCallEditMessage,
      ): proto.Message.ScheduledCallEditMessage;

      public static encode(
        message: proto.Message.IScheduledCallEditMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IScheduledCallEditMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.ScheduledCallEditMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.ScheduledCallEditMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.ScheduledCallEditMessage;

      public static toObject(
        message: proto.Message.ScheduledCallEditMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace ScheduledCallEditMessage {
      enum EditType {
        UNKNOWN = 0,
        CANCEL = 1,
      }
    }

    interface ISendPaymentMessage {
      noteMessage?: proto.IMessage | null;

      requestMessageKey?: proto.IMessageKey | null;

      background?: proto.IPaymentBackground | null;
    }

    class SendPaymentMessage implements ISendPaymentMessage {
      constructor(properties?: proto.Message.ISendPaymentMessage);

      public noteMessage?: proto.IMessage | null;

      public requestMessageKey?: proto.IMessageKey | null;

      public background?: proto.IPaymentBackground | null;

      public static create(
        properties?: proto.Message.ISendPaymentMessage,
      ): proto.Message.SendPaymentMessage;

      public static encode(
        message: proto.Message.ISendPaymentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.ISendPaymentMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.SendPaymentMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.SendPaymentMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.SendPaymentMessage;

      public static toObject(
        message: proto.Message.SendPaymentMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ISenderKeyDistributionMessage {
      groupId?: string | null;

      axolotlSenderKeyDistributionMessage?: Uint8Array | null;
    }

    class SenderKeyDistributionMessage
      implements ISenderKeyDistributionMessage
    {
      constructor(properties?: proto.Message.ISenderKeyDistributionMessage);

      public groupId: string;

      public axolotlSenderKeyDistributionMessage: Uint8Array;

      public static create(
        properties?: proto.Message.ISenderKeyDistributionMessage,
      ): proto.Message.SenderKeyDistributionMessage;

      public static encode(
        message: proto.Message.ISenderKeyDistributionMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.ISenderKeyDistributionMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.SenderKeyDistributionMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.SenderKeyDistributionMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.SenderKeyDistributionMessage;

      public static toObject(
        message: proto.Message.SenderKeyDistributionMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IStickerMessage {
      url?: string | null;

      fileSha256?: Uint8Array | null;

      fileEncSha256?: Uint8Array | null;

      mediaKey?: Uint8Array | null;

      mimetype?: string | null;

      height?: number | null;

      width?: number | null;

      directPath?: string | null;

      fileLength?: number | Long | null;

      mediaKeyTimestamp?: number | Long | null;

      firstFrameLength?: number | null;

      firstFrameSidecar?: Uint8Array | null;

      isAnimated?: boolean | null;

      pngThumbnail?: Uint8Array | null;

      contextInfo?: proto.IContextInfo | null;

      stickerSentTs?: number | Long | null;

      isAvatar?: boolean | null;

      isAiSticker?: boolean | null;

      isLottie?: boolean | null;
    }

    class StickerMessage implements IStickerMessage {
      constructor(properties?: proto.Message.IStickerMessage);

      public url: string;

      public fileSha256: Uint8Array;

      public fileEncSha256: Uint8Array;

      public mediaKey: Uint8Array;

      public mimetype: string;

      public height: number;

      public width: number;

      public directPath: string;

      public fileLength: number | Long;

      public mediaKeyTimestamp: number | Long;

      public firstFrameLength: number;

      public firstFrameSidecar: Uint8Array;

      public isAnimated: boolean;

      public pngThumbnail: Uint8Array;

      public contextInfo?: proto.IContextInfo | null;

      public stickerSentTs: number | Long;

      public isAvatar: boolean;

      public isAiSticker: boolean;

      public isLottie: boolean;

      public static create(
        properties?: proto.Message.IStickerMessage,
      ): proto.Message.StickerMessage;

      public static encode(
        message: proto.Message.IStickerMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IStickerMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.StickerMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.StickerMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.StickerMessage;

      public static toObject(
        message: proto.Message.StickerMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IStickerSyncRMRMessage {
      filehash?: string[] | null;

      rmrSource?: string | null;

      requestTimestamp?: number | Long | null;
    }

    class StickerSyncRMRMessage implements IStickerSyncRMRMessage {
      constructor(properties?: proto.Message.IStickerSyncRMRMessage);

      public filehash: string[];

      public rmrSource: string;

      public requestTimestamp: number | Long;

      public static create(
        properties?: proto.Message.IStickerSyncRMRMessage,
      ): proto.Message.StickerSyncRMRMessage;

      public static encode(
        message: proto.Message.IStickerSyncRMRMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IStickerSyncRMRMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.StickerSyncRMRMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.StickerSyncRMRMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.StickerSyncRMRMessage;

      public static toObject(
        message: proto.Message.StickerSyncRMRMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ITemplateButtonReplyMessage {
      selectedId?: string | null;

      selectedDisplayText?: string | null;

      contextInfo?: proto.IContextInfo | null;

      selectedIndex?: number | null;

      selectedCarouselCardIndex?: number | null;
    }

    class TemplateButtonReplyMessage implements ITemplateButtonReplyMessage {
      constructor(properties?: proto.Message.ITemplateButtonReplyMessage);

      public selectedId: string;

      public selectedDisplayText: string;

      public contextInfo?: proto.IContextInfo | null;

      public selectedIndex: number;

      public selectedCarouselCardIndex: number;

      public static create(
        properties?: proto.Message.ITemplateButtonReplyMessage,
      ): proto.Message.TemplateButtonReplyMessage;

      public static encode(
        message: proto.Message.ITemplateButtonReplyMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.ITemplateButtonReplyMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.TemplateButtonReplyMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.TemplateButtonReplyMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.TemplateButtonReplyMessage;

      public static toObject(
        message: proto.Message.TemplateButtonReplyMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ITemplateMessage {
      contextInfo?: proto.IContextInfo | null;

      hydratedTemplate?: proto.Message.TemplateMessage.IHydratedFourRowTemplate | null;

      templateId?: string | null;

      fourRowTemplate?: proto.Message.TemplateMessage.IFourRowTemplate | null;

      hydratedFourRowTemplate?: proto.Message.TemplateMessage.IHydratedFourRowTemplate | null;

      interactiveMessageTemplate?: proto.Message.IInteractiveMessage | null;
    }

    class TemplateMessage implements ITemplateMessage {
      constructor(properties?: proto.Message.ITemplateMessage);

      public contextInfo?: proto.IContextInfo | null;

      public hydratedTemplate?: proto.Message.TemplateMessage.IHydratedFourRowTemplate | null;

      public templateId: string;

      public fourRowTemplate?: proto.Message.TemplateMessage.IFourRowTemplate | null;

      public hydratedFourRowTemplate?: proto.Message.TemplateMessage.IHydratedFourRowTemplate | null;

      public interactiveMessageTemplate?: proto.Message.IInteractiveMessage | null;

      public format?:
        | "fourRowTemplate"
        | "hydratedFourRowTemplate"
        | "interactiveMessageTemplate";

      public static create(
        properties?: proto.Message.ITemplateMessage,
      ): proto.Message.TemplateMessage;

      public static encode(
        message: proto.Message.ITemplateMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.ITemplateMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.TemplateMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.TemplateMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.TemplateMessage;

      public static toObject(
        message: proto.Message.TemplateMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace TemplateMessage {
      interface IFourRowTemplate {
        content?: proto.Message.IHighlyStructuredMessage | null;

        footer?: proto.Message.IHighlyStructuredMessage | null;

        buttons?: proto.ITemplateButton[] | null;

        documentMessage?: proto.Message.IDocumentMessage | null;

        highlyStructuredMessage?: proto.Message.IHighlyStructuredMessage | null;

        imageMessage?: proto.Message.IImageMessage | null;

        videoMessage?: proto.Message.IVideoMessage | null;

        locationMessage?: proto.Message.ILocationMessage | null;
      }

      class FourRowTemplate implements IFourRowTemplate {
        constructor(
          properties?: proto.Message.TemplateMessage.IFourRowTemplate,
        );

        public content?: proto.Message.IHighlyStructuredMessage | null;

        public footer?: proto.Message.IHighlyStructuredMessage | null;

        public buttons: proto.ITemplateButton[];

        public documentMessage?: proto.Message.IDocumentMessage | null;

        public highlyStructuredMessage?: proto.Message.IHighlyStructuredMessage | null;

        public imageMessage?: proto.Message.IImageMessage | null;

        public videoMessage?: proto.Message.IVideoMessage | null;

        public locationMessage?: proto.Message.ILocationMessage | null;

        public title?:
          | "documentMessage"
          | "highlyStructuredMessage"
          | "imageMessage"
          | "videoMessage"
          | "locationMessage";

        public static create(
          properties?: proto.Message.TemplateMessage.IFourRowTemplate,
        ): proto.Message.TemplateMessage.FourRowTemplate;

        public static encode(
          message: proto.Message.TemplateMessage.IFourRowTemplate,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.TemplateMessage.IFourRowTemplate,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.TemplateMessage.FourRowTemplate;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.TemplateMessage.FourRowTemplate;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.TemplateMessage.FourRowTemplate;

        public static toObject(
          message: proto.Message.TemplateMessage.FourRowTemplate,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IHydratedFourRowTemplate {
        hydratedContentText?: string | null;

        hydratedFooterText?: string | null;

        hydratedButtons?: proto.IHydratedTemplateButton[] | null;

        templateId?: string | null;

        maskLinkedDevices?: boolean | null;

        documentMessage?: proto.Message.IDocumentMessage | null;

        hydratedTitleText?: string | null;

        imageMessage?: proto.Message.IImageMessage | null;

        videoMessage?: proto.Message.IVideoMessage | null;

        locationMessage?: proto.Message.ILocationMessage | null;
      }

      class HydratedFourRowTemplate implements IHydratedFourRowTemplate {
        constructor(
          properties?: proto.Message.TemplateMessage.IHydratedFourRowTemplate,
        );

        public hydratedContentText: string;

        public hydratedFooterText: string;

        public hydratedButtons: proto.IHydratedTemplateButton[];

        public templateId: string;

        public maskLinkedDevices: boolean;

        public documentMessage?: proto.Message.IDocumentMessage | null;

        public hydratedTitleText?: string | null;

        public imageMessage?: proto.Message.IImageMessage | null;

        public videoMessage?: proto.Message.IVideoMessage | null;

        public locationMessage?: proto.Message.ILocationMessage | null;

        public title?:
          | "documentMessage"
          | "hydratedTitleText"
          | "imageMessage"
          | "videoMessage"
          | "locationMessage";

        public static create(
          properties?: proto.Message.TemplateMessage.IHydratedFourRowTemplate,
        ): proto.Message.TemplateMessage.HydratedFourRowTemplate;

        public static encode(
          message: proto.Message.TemplateMessage.IHydratedFourRowTemplate,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.Message.TemplateMessage.IHydratedFourRowTemplate,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.Message.TemplateMessage.HydratedFourRowTemplate;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.Message.TemplateMessage.HydratedFourRowTemplate;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.Message.TemplateMessage.HydratedFourRowTemplate;

        public static toObject(
          message: proto.Message.TemplateMessage.HydratedFourRowTemplate,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }

    interface IVideoMessage {
      url?: string | null;

      mimetype?: string | null;

      fileSha256?: Uint8Array | null;

      fileLength?: number | Long | null;

      seconds?: number | null;

      mediaKey?: Uint8Array | null;

      caption?: string | null;

      gifPlayback?: boolean | null;

      height?: number | null;

      width?: number | null;

      fileEncSha256?: Uint8Array | null;

      interactiveAnnotations?: proto.IInteractiveAnnotation[] | null;

      directPath?: string | null;

      mediaKeyTimestamp?: number | Long | null;

      jpegThumbnail?: Uint8Array | null;

      contextInfo?: proto.IContextInfo | null;

      streamingSidecar?: Uint8Array | null;

      gifAttribution?: proto.Message.VideoMessage.Attribution | null;

      viewOnce?: boolean | null;

      thumbnailDirectPath?: string | null;

      thumbnailSha256?: Uint8Array | null;

      thumbnailEncSha256?: Uint8Array | null;

      staticUrl?: string | null;

      annotations?: proto.IInteractiveAnnotation[] | null;
    }

    class VideoMessage implements IVideoMessage {
      constructor(properties?: proto.Message.IVideoMessage);

      public url: string;

      public mimetype: string;

      public fileSha256: Uint8Array;

      public fileLength: number | Long;

      public seconds: number;

      public mediaKey: Uint8Array;

      public caption: string;

      public gifPlayback: boolean;

      public height: number;

      public width: number;

      public fileEncSha256: Uint8Array;

      public interactiveAnnotations: proto.IInteractiveAnnotation[];

      public directPath: string;

      public mediaKeyTimestamp: number | Long;

      public jpegThumbnail: Uint8Array;

      public contextInfo?: proto.IContextInfo | null;

      public streamingSidecar: Uint8Array;

      public gifAttribution: proto.Message.VideoMessage.Attribution;

      public viewOnce: boolean;

      public thumbnailDirectPath: string;

      public thumbnailSha256: Uint8Array;

      public thumbnailEncSha256: Uint8Array;

      public staticUrl: string;

      public annotations: proto.IInteractiveAnnotation[];

      public static create(
        properties?: proto.Message.IVideoMessage,
      ): proto.Message.VideoMessage;

      public static encode(
        message: proto.Message.IVideoMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.Message.IVideoMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.Message.VideoMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.Message.VideoMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.Message.VideoMessage;

      public static toObject(
        message: proto.Message.VideoMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace VideoMessage {
      enum Attribution {
        NONE = 0,
        GIPHY = 1,
        TENOR = 2,
      }
    }
  }

  interface IMessageAddOnContextInfo {
    messageAddOnDurationInSecs?: number | null;
  }

  class MessageAddOnContextInfo implements IMessageAddOnContextInfo {
    constructor(properties?: proto.IMessageAddOnContextInfo);

    public messageAddOnDurationInSecs: number;

    public static create(
      properties?: proto.IMessageAddOnContextInfo,
    ): proto.MessageAddOnContextInfo;

    public static encode(
      message: proto.IMessageAddOnContextInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMessageAddOnContextInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.MessageAddOnContextInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.MessageAddOnContextInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.MessageAddOnContextInfo;

    public static toObject(
      message: proto.MessageAddOnContextInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IMessageContextInfo {
    deviceListMetadata?: proto.IDeviceListMetadata | null;

    deviceListMetadataVersion?: number | null;

    messageSecret?: Uint8Array | null;

    paddingBytes?: Uint8Array | null;

    messageAddOnDurationInSecs?: number | null;

    botMessageSecret?: Uint8Array | null;

    botMetadata?: proto.IBotMetadata | null;

    reportingTokenVersion?: number | null;
  }

  class MessageContextInfo implements IMessageContextInfo {
    constructor(properties?: proto.IMessageContextInfo);

    public deviceListMetadata?: proto.IDeviceListMetadata | null;

    public deviceListMetadataVersion: number;

    public messageSecret: Uint8Array;

    public paddingBytes: Uint8Array;

    public messageAddOnDurationInSecs: number;

    public botMessageSecret: Uint8Array;

    public botMetadata?: proto.IBotMetadata | null;

    public reportingTokenVersion: number;

    public static create(
      properties?: proto.IMessageContextInfo,
    ): proto.MessageContextInfo;

    public static encode(
      message: proto.IMessageContextInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMessageContextInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.MessageContextInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.MessageContextInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.MessageContextInfo;

    public static toObject(
      message: proto.MessageContextInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IMessageKey {
    remoteJid?: string | null;

    fromMe?: boolean | null;

    id?: string | null;

    participant?: string | null;
  }

  class MessageKey implements IMessageKey {
    constructor(properties?: proto.IMessageKey);

    public remoteJid: string;

    public fromMe: boolean;

    public id: string;

    public participant: string;

    public static create(properties?: proto.IMessageKey): proto.MessageKey;

    public static encode(
      message: proto.IMessageKey,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMessageKey,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.MessageKey;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.MessageKey;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.MessageKey;

    public static toObject(
      message: proto.MessageKey,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IMessageSecretMessage {
    version?: number | null;

    encIv?: Uint8Array | null;

    encPayload?: Uint8Array | null;
  }

  class MessageSecretMessage implements IMessageSecretMessage {
    constructor(properties?: proto.IMessageSecretMessage);

    public version: number;

    public encIv: Uint8Array;

    public encPayload: Uint8Array;

    public static create(
      properties?: proto.IMessageSecretMessage,
    ): proto.MessageSecretMessage;

    public static encode(
      message: proto.IMessageSecretMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMessageSecretMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.MessageSecretMessage;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.MessageSecretMessage;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.MessageSecretMessage;

    public static toObject(
      message: proto.MessageSecretMessage,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IMoney {
    value?: number | Long | null;

    offset?: number | null;

    currencyCode?: string | null;
  }

  class Money implements IMoney {
    constructor(properties?: proto.IMoney);

    public value: number | Long;

    public offset: number;

    public currencyCode: string;

    public static create(properties?: proto.IMoney): proto.Money;

    public static encode(
      message: proto.IMoney,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMoney,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.Money;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.Money;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.Money;

    public static toObject(
      message: proto.Money,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IMsgOpaqueData {
    body?: string | null;

    caption?: string | null;

    lng?: number | null;

    isLive?: boolean | null;

    lat?: number | null;

    paymentAmount1000?: number | null;

    paymentNoteMsgBody?: string | null;

    canonicalUrl?: string | null;

    matchedText?: string | null;

    title?: string | null;

    description?: string | null;

    futureproofBuffer?: Uint8Array | null;

    clientUrl?: string | null;

    loc?: string | null;

    pollName?: string | null;

    pollOptions?: proto.MsgOpaqueData.IPollOption[] | null;

    pollSelectableOptionsCount?: number | null;

    messageSecret?: Uint8Array | null;

    originalSelfAuthor?: string | null;

    senderTimestampMs?: number | Long | null;

    pollUpdateParentKey?: string | null;

    encPollVote?: proto.IPollEncValue | null;

    isSentCagPollCreation?: boolean | null;

    encReactionTargetMessageKey?: string | null;

    encReactionEncPayload?: Uint8Array | null;

    encReactionEncIv?: Uint8Array | null;

    botMessageSecret?: Uint8Array | null;

    targetMessageKey?: string | null;

    encPayload?: Uint8Array | null;

    encIv?: Uint8Array | null;
  }

  class MsgOpaqueData implements IMsgOpaqueData {
    constructor(properties?: proto.IMsgOpaqueData);

    public body: string;

    public caption: string;

    public lng: number;

    public isLive: boolean;

    public lat: number;

    public paymentAmount1000: number;

    public paymentNoteMsgBody: string;

    public canonicalUrl: string;

    public matchedText: string;

    public title: string;

    public description: string;

    public futureproofBuffer: Uint8Array;

    public clientUrl: string;

    public loc: string;

    public pollName: string;

    public pollOptions: proto.MsgOpaqueData.IPollOption[];

    public pollSelectableOptionsCount: number;

    public messageSecret: Uint8Array;

    public originalSelfAuthor: string;

    public senderTimestampMs: number | Long;

    public pollUpdateParentKey: string;

    public encPollVote?: proto.IPollEncValue | null;

    public isSentCagPollCreation: boolean;

    public encReactionTargetMessageKey: string;

    public encReactionEncPayload: Uint8Array;

    public encReactionEncIv: Uint8Array;

    public botMessageSecret: Uint8Array;

    public targetMessageKey: string;

    public encPayload: Uint8Array;

    public encIv: Uint8Array;

    public static create(
      properties?: proto.IMsgOpaqueData,
    ): proto.MsgOpaqueData;

    public static encode(
      message: proto.IMsgOpaqueData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMsgOpaqueData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.MsgOpaqueData;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.MsgOpaqueData;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.MsgOpaqueData;

    public static toObject(
      message: proto.MsgOpaqueData,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace MsgOpaqueData {
    interface IPollOption {
      name?: string | null;
    }

    class PollOption implements IPollOption {
      constructor(properties?: proto.MsgOpaqueData.IPollOption);

      public name: string;

      public static create(
        properties?: proto.MsgOpaqueData.IPollOption,
      ): proto.MsgOpaqueData.PollOption;

      public static encode(
        message: proto.MsgOpaqueData.IPollOption,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.MsgOpaqueData.IPollOption,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.MsgOpaqueData.PollOption;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.MsgOpaqueData.PollOption;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.MsgOpaqueData.PollOption;

      public static toObject(
        message: proto.MsgOpaqueData.PollOption,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }
  }

  interface IMsgRowOpaqueData {
    currentMsg?: proto.IMsgOpaqueData | null;

    quotedMsg?: proto.IMsgOpaqueData | null;
  }

  class MsgRowOpaqueData implements IMsgRowOpaqueData {
    constructor(properties?: proto.IMsgRowOpaqueData);

    public currentMsg?: proto.IMsgOpaqueData | null;

    public quotedMsg?: proto.IMsgOpaqueData | null;

    public static create(
      properties?: proto.IMsgRowOpaqueData,
    ): proto.MsgRowOpaqueData;

    public static encode(
      message: proto.IMsgRowOpaqueData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IMsgRowOpaqueData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.MsgRowOpaqueData;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.MsgRowOpaqueData;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.MsgRowOpaqueData;

    public static toObject(
      message: proto.MsgRowOpaqueData,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface INoiseCertificate {
    details?: Uint8Array | null;

    signature?: Uint8Array | null;
  }

  class NoiseCertificate implements INoiseCertificate {
    constructor(properties?: proto.INoiseCertificate);

    public details: Uint8Array;

    public signature: Uint8Array;

    public static create(
      properties?: proto.INoiseCertificate,
    ): proto.NoiseCertificate;

    public static encode(
      message: proto.INoiseCertificate,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.INoiseCertificate,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.NoiseCertificate;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.NoiseCertificate;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.NoiseCertificate;

    public static toObject(
      message: proto.NoiseCertificate,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace NoiseCertificate {
    interface IDetails {
      serial?: number | null;

      issuer?: string | null;

      expires?: number | Long | null;

      subject?: string | null;

      key?: Uint8Array | null;
    }

    class Details implements IDetails {
      constructor(properties?: proto.NoiseCertificate.IDetails);

      public serial: number;

      public issuer: string;

      public expires: number | Long;

      public subject: string;

      public key: Uint8Array;

      public static create(
        properties?: proto.NoiseCertificate.IDetails,
      ): proto.NoiseCertificate.Details;

      public static encode(
        message: proto.NoiseCertificate.IDetails,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.NoiseCertificate.IDetails,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.NoiseCertificate.Details;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.NoiseCertificate.Details;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.NoiseCertificate.Details;

      public static toObject(
        message: proto.NoiseCertificate.Details,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }
  }

  interface INotificationMessageInfo {
    key?: proto.IMessageKey | null;

    message?: proto.IMessage | null;

    messageTimestamp?: number | Long | null;

    participant?: string | null;
  }

  class NotificationMessageInfo implements INotificationMessageInfo {
    constructor(properties?: proto.INotificationMessageInfo);

    public key?: proto.IMessageKey | null;

    public message?: proto.IMessage | null;

    public messageTimestamp: number | Long;

    public participant: string;

    public static create(
      properties?: proto.INotificationMessageInfo,
    ): proto.NotificationMessageInfo;

    public static encode(
      message: proto.INotificationMessageInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.INotificationMessageInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.NotificationMessageInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.NotificationMessageInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.NotificationMessageInfo;

    public static toObject(
      message: proto.NotificationMessageInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface INotificationSettings {
    messageVibrate?: string | null;

    messagePopup?: string | null;

    messageLight?: string | null;

    lowPriorityNotifications?: boolean | null;

    reactionsMuted?: boolean | null;

    callVibrate?: string | null;
  }

  class NotificationSettings implements INotificationSettings {
    constructor(properties?: proto.INotificationSettings);

    public messageVibrate: string;

    public messagePopup: string;

    public messageLight: string;

    public lowPriorityNotifications: boolean;

    public reactionsMuted: boolean;

    public callVibrate: string;

    public static create(
      properties?: proto.INotificationSettings,
    ): proto.NotificationSettings;

    public static encode(
      message: proto.INotificationSettings,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.INotificationSettings,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.NotificationSettings;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.NotificationSettings;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.NotificationSettings;

    public static toObject(
      message: proto.NotificationSettings,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPastParticipant {
    userJid?: string | null;

    leaveReason?: proto.PastParticipant.LeaveReason | null;

    leaveTs?: number | Long | null;
  }

  class PastParticipant implements IPastParticipant {
    constructor(properties?: proto.IPastParticipant);

    public userJid: string;

    public leaveReason: proto.PastParticipant.LeaveReason;

    public leaveTs: number | Long;

    public static create(
      properties?: proto.IPastParticipant,
    ): proto.PastParticipant;

    public static encode(
      message: proto.IPastParticipant,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPastParticipant,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PastParticipant;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PastParticipant;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.PastParticipant;

    public static toObject(
      message: proto.PastParticipant,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace PastParticipant {
    enum LeaveReason {
      LEFT = 0,
      REMOVED = 1,
    }
  }

  interface IPastParticipants {
    groupJid?: string | null;

    pastParticipants?: proto.IPastParticipant[] | null;
  }

  class PastParticipants implements IPastParticipants {
    constructor(properties?: proto.IPastParticipants);

    public groupJid: string;

    public pastParticipants: proto.IPastParticipant[];

    public static create(
      properties?: proto.IPastParticipants,
    ): proto.PastParticipants;

    public static encode(
      message: proto.IPastParticipants,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPastParticipants,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PastParticipants;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PastParticipants;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.PastParticipants;

    public static toObject(
      message: proto.PastParticipants,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPatchDebugData {
    currentLthash?: Uint8Array | null;

    newLthash?: Uint8Array | null;

    patchVersion?: Uint8Array | null;

    collectionName?: Uint8Array | null;

    firstFourBytesFromAHashOfSnapshotMacKey?: Uint8Array | null;

    newLthashSubtract?: Uint8Array | null;

    numberAdd?: number | null;

    numberRemove?: number | null;

    numberOverride?: number | null;

    senderPlatform?: proto.PatchDebugData.Platform | null;

    isSenderPrimary?: boolean | null;
  }

  class PatchDebugData implements IPatchDebugData {
    constructor(properties?: proto.IPatchDebugData);

    public currentLthash: Uint8Array;

    public newLthash: Uint8Array;

    public patchVersion: Uint8Array;

    public collectionName: Uint8Array;

    public firstFourBytesFromAHashOfSnapshotMacKey: Uint8Array;

    public newLthashSubtract: Uint8Array;

    public numberAdd: number;

    public numberRemove: number;

    public numberOverride: number;

    public senderPlatform: proto.PatchDebugData.Platform;

    public isSenderPrimary: boolean;

    public static create(
      properties?: proto.IPatchDebugData,
    ): proto.PatchDebugData;

    public static encode(
      message: proto.IPatchDebugData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPatchDebugData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PatchDebugData;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PatchDebugData;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.PatchDebugData;

    public static toObject(
      message: proto.PatchDebugData,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace PatchDebugData {
    enum Platform {
      ANDROID = 0,
      SMBA = 1,
      IPHONE = 2,
      SMBI = 3,
      WEB = 4,
      UWP = 5,
      DARWIN = 6,
    }
  }

  interface IPaymentBackground {
    id?: string | null;

    fileLength?: number | Long | null;

    width?: number | null;

    height?: number | null;

    mimetype?: string | null;

    placeholderArgb?: number | null;

    textArgb?: number | null;

    subtextArgb?: number | null;

    mediaData?: proto.PaymentBackground.IMediaData | null;

    type?: proto.PaymentBackground.Type | null;
  }

  class PaymentBackground implements IPaymentBackground {
    constructor(properties?: proto.IPaymentBackground);

    public id: string;

    public fileLength: number | Long;

    public width: number;

    public height: number;

    public mimetype: string;

    public placeholderArgb: number;

    public textArgb: number;

    public subtextArgb: number;

    public mediaData?: proto.PaymentBackground.IMediaData | null;

    public type: proto.PaymentBackground.Type;

    public static create(
      properties?: proto.IPaymentBackground,
    ): proto.PaymentBackground;

    public static encode(
      message: proto.IPaymentBackground,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPaymentBackground,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PaymentBackground;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PaymentBackground;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.PaymentBackground;

    public static toObject(
      message: proto.PaymentBackground,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace PaymentBackground {
    interface IMediaData {
      mediaKey?: Uint8Array | null;

      mediaKeyTimestamp?: number | Long | null;

      fileSha256?: Uint8Array | null;

      fileEncSha256?: Uint8Array | null;

      directPath?: string | null;
    }

    class MediaData implements IMediaData {
      constructor(properties?: proto.PaymentBackground.IMediaData);

      public mediaKey: Uint8Array;

      public mediaKeyTimestamp: number | Long;

      public fileSha256: Uint8Array;

      public fileEncSha256: Uint8Array;

      public directPath: string;

      public static create(
        properties?: proto.PaymentBackground.IMediaData,
      ): proto.PaymentBackground.MediaData;

      public static encode(
        message: proto.PaymentBackground.IMediaData,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.PaymentBackground.IMediaData,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.PaymentBackground.MediaData;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.PaymentBackground.MediaData;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.PaymentBackground.MediaData;

      public static toObject(
        message: proto.PaymentBackground.MediaData,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    enum Type {
      UNKNOWN = 0,
      DEFAULT = 1,
    }
  }

  interface IPaymentInfo {
    currencyDeprecated?: proto.PaymentInfo.Currency | null;

    amount1000?: number | Long | null;

    receiverJid?: string | null;

    status?: proto.PaymentInfo.Status | null;

    transactionTimestamp?: number | Long | null;

    requestMessageKey?: proto.IMessageKey | null;

    expiryTimestamp?: number | Long | null;

    futureproofed?: boolean | null;

    currency?: string | null;

    txnStatus?: proto.PaymentInfo.TxnStatus | null;

    useNoviFiatFormat?: boolean | null;

    primaryAmount?: proto.IMoney | null;

    exchangeAmount?: proto.IMoney | null;
  }

  class PaymentInfo implements IPaymentInfo {
    constructor(properties?: proto.IPaymentInfo);

    public currencyDeprecated: proto.PaymentInfo.Currency;

    public amount1000: number | Long;

    public receiverJid: string;

    public status: proto.PaymentInfo.Status;

    public transactionTimestamp: number | Long;

    public requestMessageKey?: proto.IMessageKey | null;

    public expiryTimestamp: number | Long;

    public futureproofed: boolean;

    public currency: string;

    public txnStatus: proto.PaymentInfo.TxnStatus;

    public useNoviFiatFormat: boolean;

    public primaryAmount?: proto.IMoney | null;

    public exchangeAmount?: proto.IMoney | null;

    public static create(properties?: proto.IPaymentInfo): proto.PaymentInfo;

    public static encode(
      message: proto.IPaymentInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPaymentInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PaymentInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PaymentInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.PaymentInfo;

    public static toObject(
      message: proto.PaymentInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace PaymentInfo {
    enum Currency {
      UNKNOWN_CURRENCY = 0,
      INR = 1,
    }

    enum Status {
      UNKNOWN_STATUS = 0,
      PROCESSING = 1,
      SENT = 2,
      NEED_TO_ACCEPT = 3,
      COMPLETE = 4,
      COULD_NOT_COMPLETE = 5,
      REFUNDED = 6,
      EXPIRED = 7,
      REJECTED = 8,
      CANCELLED = 9,
      WAITING_FOR_PAYER = 10,
      WAITING = 11,
    }

    enum TxnStatus {
      UNKNOWN = 0,
      PENDING_SETUP = 1,
      PENDING_RECEIVER_SETUP = 2,
      INIT = 3,
      SUCCESS = 4,
      COMPLETED = 5,
      FAILED = 6,
      FAILED_RISK = 7,
      FAILED_PROCESSING = 8,
      FAILED_RECEIVER_PROCESSING = 9,
      FAILED_DA = 10,
      FAILED_DA_FINAL = 11,
      REFUNDED_TXN = 12,
      REFUND_FAILED = 13,
      REFUND_FAILED_PROCESSING = 14,
      REFUND_FAILED_DA = 15,
      EXPIRED_TXN = 16,
      AUTH_CANCELED = 17,
      AUTH_CANCEL_FAILED_PROCESSING = 18,
      AUTH_CANCEL_FAILED = 19,
      COLLECT_INIT = 20,
      COLLECT_SUCCESS = 21,
      COLLECT_FAILED = 22,
      COLLECT_FAILED_RISK = 23,
      COLLECT_REJECTED = 24,
      COLLECT_EXPIRED = 25,
      COLLECT_CANCELED = 26,
      COLLECT_CANCELLING = 27,
      IN_REVIEW = 28,
      REVERSAL_SUCCESS = 29,
      REVERSAL_PENDING = 30,
      REFUND_PENDING = 31,
    }
  }

  interface IPhoneNumberToLIDMapping {
    pnJid?: string | null;

    lidJid?: string | null;
  }

  class PhoneNumberToLIDMapping implements IPhoneNumberToLIDMapping {
    constructor(properties?: proto.IPhoneNumberToLIDMapping);

    public pnJid: string;

    public lidJid: string;

    public static create(
      properties?: proto.IPhoneNumberToLIDMapping,
    ): proto.PhoneNumberToLIDMapping;

    public static encode(
      message: proto.IPhoneNumberToLIDMapping,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPhoneNumberToLIDMapping,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PhoneNumberToLIDMapping;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PhoneNumberToLIDMapping;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.PhoneNumberToLIDMapping;

    public static toObject(
      message: proto.PhoneNumberToLIDMapping,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPhotoChange {
    oldPhoto?: Uint8Array | null;

    newPhoto?: Uint8Array | null;

    newPhotoId?: number | null;
  }

  class PhotoChange implements IPhotoChange {
    constructor(properties?: proto.IPhotoChange);

    public oldPhoto: Uint8Array;

    public newPhoto: Uint8Array;

    public newPhotoId: number;

    public static create(properties?: proto.IPhotoChange): proto.PhotoChange;

    public static encode(
      message: proto.IPhotoChange,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPhotoChange,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PhotoChange;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PhotoChange;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.PhotoChange;

    public static toObject(
      message: proto.PhotoChange,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPinInChat {
    type?: proto.PinInChat.Type | null;

    key?: proto.IMessageKey | null;

    senderTimestampMs?: number | Long | null;

    serverTimestampMs?: number | Long | null;

    messageAddOnContextInfo?: proto.IMessageAddOnContextInfo | null;
  }

  class PinInChat implements IPinInChat {
    constructor(properties?: proto.IPinInChat);

    public type: proto.PinInChat.Type;

    public key?: proto.IMessageKey | null;

    public senderTimestampMs: number | Long;

    public serverTimestampMs: number | Long;

    public messageAddOnContextInfo?: proto.IMessageAddOnContextInfo | null;

    public static create(properties?: proto.IPinInChat): proto.PinInChat;

    public static encode(
      message: proto.IPinInChat,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPinInChat,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PinInChat;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PinInChat;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.PinInChat;

    public static toObject(
      message: proto.PinInChat,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace PinInChat {
    enum Type {
      UNKNOWN_TYPE = 0,
      PIN_FOR_ALL = 1,
      UNPIN_FOR_ALL = 2,
    }
  }

  interface IPoint {
    xDeprecated?: number | null;

    yDeprecated?: number | null;

    x?: number | null;

    y?: number | null;
  }

  class Point implements IPoint {
    constructor(properties?: proto.IPoint);

    public xDeprecated: number;

    public yDeprecated: number;

    public x: number;

    public y: number;

    public static create(properties?: proto.IPoint): proto.Point;

    public static encode(
      message: proto.IPoint,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPoint,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.Point;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.Point;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.Point;

    public static toObject(
      message: proto.Point,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPollAdditionalMetadata {
    pollInvalidated?: boolean | null;
  }

  class PollAdditionalMetadata implements IPollAdditionalMetadata {
    constructor(properties?: proto.IPollAdditionalMetadata);

    public pollInvalidated: boolean;

    public static create(
      properties?: proto.IPollAdditionalMetadata,
    ): proto.PollAdditionalMetadata;

    public static encode(
      message: proto.IPollAdditionalMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPollAdditionalMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PollAdditionalMetadata;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PollAdditionalMetadata;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.PollAdditionalMetadata;

    public static toObject(
      message: proto.PollAdditionalMetadata,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPollEncValue {
    encPayload?: Uint8Array | null;

    encIv?: Uint8Array | null;
  }

  class PollEncValue implements IPollEncValue {
    constructor(properties?: proto.IPollEncValue);

    public encPayload: Uint8Array;

    public encIv: Uint8Array;

    public static create(properties?: proto.IPollEncValue): proto.PollEncValue;

    public static encode(
      message: proto.IPollEncValue,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPollEncValue,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PollEncValue;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PollEncValue;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.PollEncValue;

    public static toObject(
      message: proto.PollEncValue,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPollUpdate {
    pollUpdateMessageKey?: proto.IMessageKey | null;

    vote?: proto.Message.IPollVoteMessage | null;

    senderTimestampMs?: number | Long | null;

    serverTimestampMs?: number | Long | null;

    unread?: boolean | null;
  }

  class PollUpdate implements IPollUpdate {
    constructor(properties?: proto.IPollUpdate);

    public pollUpdateMessageKey?: proto.IMessageKey | null;

    public vote?: proto.Message.IPollVoteMessage | null;

    public senderTimestampMs: number | Long;

    public serverTimestampMs: number | Long;

    public unread: boolean;

    public static create(properties?: proto.IPollUpdate): proto.PollUpdate;

    public static encode(
      message: proto.IPollUpdate,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPollUpdate,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PollUpdate;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PollUpdate;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.PollUpdate;

    public static toObject(
      message: proto.PollUpdate,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPreKeyRecordStructure {
    id?: number | null;

    publicKey?: Uint8Array | null;

    privateKey?: Uint8Array | null;
  }

  class PreKeyRecordStructure implements IPreKeyRecordStructure {
    constructor(properties?: proto.IPreKeyRecordStructure);

    public id: number;

    public publicKey: Uint8Array;

    public privateKey: Uint8Array;

    public static create(
      properties?: proto.IPreKeyRecordStructure,
    ): proto.PreKeyRecordStructure;

    public static encode(
      message: proto.IPreKeyRecordStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPreKeyRecordStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PreKeyRecordStructure;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PreKeyRecordStructure;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.PreKeyRecordStructure;

    public static toObject(
      message: proto.PreKeyRecordStructure,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPreKeySignalMessage {
    registrationId?: number | null;

    preKeyId?: number | null;

    signedPreKeyId?: number | null;

    baseKey?: Uint8Array | null;

    identityKey?: Uint8Array | null;

    message?: Uint8Array | null;
  }

  class PreKeySignalMessage implements IPreKeySignalMessage {
    constructor(properties?: proto.IPreKeySignalMessage);

    public registrationId: number;

    public preKeyId: number;

    public signedPreKeyId: number;

    public baseKey: Uint8Array;

    public identityKey: Uint8Array;

    public message: Uint8Array;

    public static create(
      properties?: proto.IPreKeySignalMessage,
    ): proto.PreKeySignalMessage;

    public static encode(
      message: proto.IPreKeySignalMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPreKeySignalMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PreKeySignalMessage;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PreKeySignalMessage;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.PreKeySignalMessage;

    public static toObject(
      message: proto.PreKeySignalMessage,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPremiumMessageInfo {
    serverCampaignId?: string | null;
  }

  class PremiumMessageInfo implements IPremiumMessageInfo {
    constructor(properties?: proto.IPremiumMessageInfo);

    public serverCampaignId: string;

    public static create(
      properties?: proto.IPremiumMessageInfo,
    ): proto.PremiumMessageInfo;

    public static encode(
      message: proto.IPremiumMessageInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPremiumMessageInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.PremiumMessageInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.PremiumMessageInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.PremiumMessageInfo;

    public static toObject(
      message: proto.PremiumMessageInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IPushname {
    id?: string | null;

    pushname?: string | null;
  }

  class Pushname implements IPushname {
    constructor(properties?: proto.IPushname);

    public id: string;

    public pushname: string;

    public static create(properties?: proto.IPushname): proto.Pushname;

    public static encode(
      message: proto.IPushname,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IPushname,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.Pushname;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.Pushname;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.Pushname;

    public static toObject(
      message: proto.Pushname,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IQP {}

  class QP implements IQP {
    constructor(properties?: proto.IQP);

    public static create(properties?: proto.IQP): proto.QP;

    public static encode(
      message: proto.IQP,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IQP,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.QP;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.QP;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.QP;

    public static toObject(
      message: proto.QP,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace QP {
    enum ClauseType {
      AND = 1,
      OR = 2,
      NOR = 3,
    }

    interface IFilter {
      filterName: string;

      parameters?: proto.QP.IFilterParameters[] | null;

      filterResult?: proto.QP.FilterResult | null;

      clientNotSupportedConfig: proto.QP.FilterClientNotSupportedConfig;
    }

    class Filter implements IFilter {
      constructor(properties?: proto.QP.IFilter);

      public filterName: string;

      public parameters: proto.QP.IFilterParameters[];

      public filterResult: proto.QP.FilterResult;

      public clientNotSupportedConfig: proto.QP.FilterClientNotSupportedConfig;

      public static create(properties?: proto.QP.IFilter): proto.QP.Filter;

      public static encode(
        message: proto.QP.IFilter,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.QP.IFilter,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.QP.Filter;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.QP.Filter;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: { [k: string]: any }): proto.QP.Filter;

      public static toObject(
        message: proto.QP.Filter,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IFilterClause {
      clauseType: proto.QP.ClauseType;

      clauses?: proto.QP.IFilterClause[] | null;

      filters?: proto.QP.IFilter[] | null;
    }

    class FilterClause implements IFilterClause {
      constructor(properties?: proto.QP.IFilterClause);

      public clauseType: proto.QP.ClauseType;

      public clauses: proto.QP.IFilterClause[];

      public filters: proto.QP.IFilter[];

      public static create(
        properties?: proto.QP.IFilterClause,
      ): proto.QP.FilterClause;

      public static encode(
        message: proto.QP.IFilterClause,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.QP.IFilterClause,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.QP.FilterClause;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.QP.FilterClause;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.QP.FilterClause;

      public static toObject(
        message: proto.QP.FilterClause,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    enum FilterClientNotSupportedConfig {
      PASS_BY_DEFAULT = 1,
      FAIL_BY_DEFAULT = 2,
    }

    interface IFilterParameters {
      key?: string | null;

      value?: string | null;
    }

    class FilterParameters implements IFilterParameters {
      constructor(properties?: proto.QP.IFilterParameters);

      public key: string;

      public value: string;

      public static create(
        properties?: proto.QP.IFilterParameters,
      ): proto.QP.FilterParameters;

      public static encode(
        message: proto.QP.IFilterParameters,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.QP.IFilterParameters,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.QP.FilterParameters;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.QP.FilterParameters;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.QP.FilterParameters;

      public static toObject(
        message: proto.QP.FilterParameters,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    enum FilterResult {
      TRUE = 1,
      FALSE = 2,
      UNKNOWN = 3,
    }
  }

  interface IReaction {
    key?: proto.IMessageKey | null;

    text?: string | null;

    groupingKey?: string | null;

    senderTimestampMs?: number | Long | null;

    unread?: boolean | null;
  }

  class Reaction implements IReaction {
    constructor(properties?: proto.IReaction);

    public key?: proto.IMessageKey | null;

    public text: string;

    public groupingKey: string;

    public senderTimestampMs: number | Long;

    public unread: boolean;

    public static create(properties?: proto.IReaction): proto.Reaction;

    public static encode(
      message: proto.IReaction,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IReaction,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.Reaction;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.Reaction;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.Reaction;

    public static toObject(
      message: proto.Reaction,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IRecentEmojiWeight {
    emoji?: string | null;

    weight?: number | null;
  }

  class RecentEmojiWeight implements IRecentEmojiWeight {
    constructor(properties?: proto.IRecentEmojiWeight);

    public emoji: string;

    public weight: number;

    public static create(
      properties?: proto.IRecentEmojiWeight,
    ): proto.RecentEmojiWeight;

    public static encode(
      message: proto.IRecentEmojiWeight,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IRecentEmojiWeight,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.RecentEmojiWeight;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.RecentEmojiWeight;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.RecentEmojiWeight;

    public static toObject(
      message: proto.RecentEmojiWeight,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IRecordStructure {
    currentSession?: proto.ISessionStructure | null;

    previousSessions?: proto.ISessionStructure[] | null;
  }

  class RecordStructure implements IRecordStructure {
    constructor(properties?: proto.IRecordStructure);

    public currentSession?: proto.ISessionStructure | null;

    public previousSessions: proto.ISessionStructure[];

    public static create(
      properties?: proto.IRecordStructure,
    ): proto.RecordStructure;

    public static encode(
      message: proto.IRecordStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IRecordStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.RecordStructure;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.RecordStructure;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.RecordStructure;

    public static toObject(
      message: proto.RecordStructure,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IReportingTokenInfo {
    reportingTag?: Uint8Array | null;
  }

  class ReportingTokenInfo implements IReportingTokenInfo {
    constructor(properties?: proto.IReportingTokenInfo);

    public reportingTag: Uint8Array;

    public static create(
      properties?: proto.IReportingTokenInfo,
    ): proto.ReportingTokenInfo;

    public static encode(
      message: proto.IReportingTokenInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IReportingTokenInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ReportingTokenInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ReportingTokenInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.ReportingTokenInfo;

    public static toObject(
      message: proto.ReportingTokenInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISenderKeyDistributionMessage {
    id?: number | null;

    iteration?: number | null;

    chainKey?: Uint8Array | null;

    signingKey?: Uint8Array | null;
  }

  class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {
    constructor(properties?: proto.ISenderKeyDistributionMessage);

    public id: number;

    public iteration: number;

    public chainKey: Uint8Array;

    public signingKey: Uint8Array;

    public static create(
      properties?: proto.ISenderKeyDistributionMessage,
    ): proto.SenderKeyDistributionMessage;

    public static encode(
      message: proto.ISenderKeyDistributionMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISenderKeyDistributionMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SenderKeyDistributionMessage;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SenderKeyDistributionMessage;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.SenderKeyDistributionMessage;

    public static toObject(
      message: proto.SenderKeyDistributionMessage,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISenderKeyMessage {
    id?: number | null;

    iteration?: number | null;

    ciphertext?: Uint8Array | null;
  }

  class SenderKeyMessage implements ISenderKeyMessage {
    constructor(properties?: proto.ISenderKeyMessage);

    public id: number;

    public iteration: number;

    public ciphertext: Uint8Array;

    public static create(
      properties?: proto.ISenderKeyMessage,
    ): proto.SenderKeyMessage;

    public static encode(
      message: proto.ISenderKeyMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISenderKeyMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SenderKeyMessage;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SenderKeyMessage;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.SenderKeyMessage;

    public static toObject(
      message: proto.SenderKeyMessage,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISenderKeyRecordStructure {
    senderKeyStates?: proto.ISenderKeyStateStructure[] | null;
  }

  class SenderKeyRecordStructure implements ISenderKeyRecordStructure {
    constructor(properties?: proto.ISenderKeyRecordStructure);

    public senderKeyStates: proto.ISenderKeyStateStructure[];

    public static create(
      properties?: proto.ISenderKeyRecordStructure,
    ): proto.SenderKeyRecordStructure;

    public static encode(
      message: proto.ISenderKeyRecordStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISenderKeyRecordStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SenderKeyRecordStructure;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SenderKeyRecordStructure;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.SenderKeyRecordStructure;

    public static toObject(
      message: proto.SenderKeyRecordStructure,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISenderKeyStateStructure {
    senderKeyId?: number | null;

    senderChainKey?: proto.SenderKeyStateStructure.ISenderChainKey | null;

    senderSigningKey?: proto.SenderKeyStateStructure.ISenderSigningKey | null;

    senderMessageKeys?:
      | proto.SenderKeyStateStructure.ISenderMessageKey[]
      | null;
  }

  class SenderKeyStateStructure implements ISenderKeyStateStructure {
    constructor(properties?: proto.ISenderKeyStateStructure);

    public senderKeyId: number;

    public senderChainKey?: proto.SenderKeyStateStructure.ISenderChainKey | null;

    public senderSigningKey?: proto.SenderKeyStateStructure.ISenderSigningKey | null;

    public senderMessageKeys: proto.SenderKeyStateStructure.ISenderMessageKey[];

    public static create(
      properties?: proto.ISenderKeyStateStructure,
    ): proto.SenderKeyStateStructure;

    public static encode(
      message: proto.ISenderKeyStateStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISenderKeyStateStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SenderKeyStateStructure;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SenderKeyStateStructure;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.SenderKeyStateStructure;

    public static toObject(
      message: proto.SenderKeyStateStructure,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace SenderKeyStateStructure {
    interface ISenderChainKey {
      iteration?: number | null;

      seed?: Uint8Array | null;
    }

    class SenderChainKey implements ISenderChainKey {
      constructor(properties?: proto.SenderKeyStateStructure.ISenderChainKey);

      public iteration: number;

      public seed: Uint8Array;

      public static create(
        properties?: proto.SenderKeyStateStructure.ISenderChainKey,
      ): proto.SenderKeyStateStructure.SenderChainKey;

      public static encode(
        message: proto.SenderKeyStateStructure.ISenderChainKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SenderKeyStateStructure.ISenderChainKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SenderKeyStateStructure.SenderChainKey;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SenderKeyStateStructure.SenderChainKey;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SenderKeyStateStructure.SenderChainKey;

      public static toObject(
        message: proto.SenderKeyStateStructure.SenderChainKey,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ISenderMessageKey {
      iteration?: number | null;

      seed?: Uint8Array | null;
    }

    class SenderMessageKey implements ISenderMessageKey {
      constructor(properties?: proto.SenderKeyStateStructure.ISenderMessageKey);

      public iteration: number;

      public seed: Uint8Array;

      public static create(
        properties?: proto.SenderKeyStateStructure.ISenderMessageKey,
      ): proto.SenderKeyStateStructure.SenderMessageKey;

      public static encode(
        message: proto.SenderKeyStateStructure.ISenderMessageKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SenderKeyStateStructure.ISenderMessageKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SenderKeyStateStructure.SenderMessageKey;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SenderKeyStateStructure.SenderMessageKey;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SenderKeyStateStructure.SenderMessageKey;

      public static toObject(
        message: proto.SenderKeyStateStructure.SenderMessageKey,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ISenderSigningKey {
      public?: Uint8Array | null;

      private?: Uint8Array | null;
    }

    class SenderSigningKey implements ISenderSigningKey {
      constructor(properties?: proto.SenderKeyStateStructure.ISenderSigningKey);

      public public: Uint8Array;

      public private: Uint8Array;

      public static create(
        properties?: proto.SenderKeyStateStructure.ISenderSigningKey,
      ): proto.SenderKeyStateStructure.SenderSigningKey;

      public static encode(
        message: proto.SenderKeyStateStructure.ISenderSigningKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SenderKeyStateStructure.ISenderSigningKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SenderKeyStateStructure.SenderSigningKey;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SenderKeyStateStructure.SenderSigningKey;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SenderKeyStateStructure.SenderSigningKey;

      public static toObject(
        message: proto.SenderKeyStateStructure.SenderSigningKey,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }
  }

  interface IServerErrorReceipt {
    stanzaId?: string | null;
  }

  class ServerErrorReceipt implements IServerErrorReceipt {
    constructor(properties?: proto.IServerErrorReceipt);

    public stanzaId: string;

    public static create(
      properties?: proto.IServerErrorReceipt,
    ): proto.ServerErrorReceipt;

    public static encode(
      message: proto.IServerErrorReceipt,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IServerErrorReceipt,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.ServerErrorReceipt;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.ServerErrorReceipt;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.ServerErrorReceipt;

    public static toObject(
      message: proto.ServerErrorReceipt,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISessionStructure {
    sessionVersion?: number | null;

    localIdentityPublic?: Uint8Array | null;

    remoteIdentityPublic?: Uint8Array | null;

    rootKey?: Uint8Array | null;

    previousCounter?: number | null;

    senderChain?: proto.SessionStructure.IChain | null;

    receiverChains?: proto.SessionStructure.IChain[] | null;

    pendingKeyExchange?: proto.SessionStructure.IPendingKeyExchange | null;

    pendingPreKey?: proto.SessionStructure.IPendingPreKey | null;

    remoteRegistrationId?: number | null;

    localRegistrationId?: number | null;

    needsRefresh?: boolean | null;

    aliceBaseKey?: Uint8Array | null;
  }

  class SessionStructure implements ISessionStructure {
    constructor(properties?: proto.ISessionStructure);

    public sessionVersion: number;

    public localIdentityPublic: Uint8Array;

    public remoteIdentityPublic: Uint8Array;

    public rootKey: Uint8Array;

    public previousCounter: number;

    public senderChain?: proto.SessionStructure.IChain | null;

    public receiverChains: proto.SessionStructure.IChain[];

    public pendingKeyExchange?: proto.SessionStructure.IPendingKeyExchange | null;

    public pendingPreKey?: proto.SessionStructure.IPendingPreKey | null;

    public remoteRegistrationId: number;

    public localRegistrationId: number;

    public needsRefresh: boolean;

    public aliceBaseKey: Uint8Array;

    public static create(
      properties?: proto.ISessionStructure,
    ): proto.SessionStructure;

    public static encode(
      message: proto.ISessionStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISessionStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SessionStructure;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SessionStructure;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.SessionStructure;

    public static toObject(
      message: proto.SessionStructure,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace SessionStructure {
    interface IChain {
      senderRatchetKey?: Uint8Array | null;

      senderRatchetKeyPrivate?: Uint8Array | null;

      chainKey?: proto.SessionStructure.Chain.IChainKey | null;

      messageKeys?: proto.SessionStructure.Chain.IMessageKey[] | null;
    }

    class Chain implements IChain {
      constructor(properties?: proto.SessionStructure.IChain);

      public senderRatchetKey: Uint8Array;

      public senderRatchetKeyPrivate: Uint8Array;

      public chainKey?: proto.SessionStructure.Chain.IChainKey | null;

      public messageKeys: proto.SessionStructure.Chain.IMessageKey[];

      public static create(
        properties?: proto.SessionStructure.IChain,
      ): proto.SessionStructure.Chain;

      public static encode(
        message: proto.SessionStructure.IChain,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SessionStructure.IChain,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SessionStructure.Chain;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SessionStructure.Chain;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SessionStructure.Chain;

      public static toObject(
        message: proto.SessionStructure.Chain,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace Chain {
      interface IChainKey {
        index?: number | null;

        key?: Uint8Array | null;
      }

      class ChainKey implements IChainKey {
        constructor(properties?: proto.SessionStructure.Chain.IChainKey);

        public index: number;

        public key: Uint8Array;

        public static create(
          properties?: proto.SessionStructure.Chain.IChainKey,
        ): proto.SessionStructure.Chain.ChainKey;

        public static encode(
          message: proto.SessionStructure.Chain.IChainKey,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.SessionStructure.Chain.IChainKey,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.SessionStructure.Chain.ChainKey;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.SessionStructure.Chain.ChainKey;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.SessionStructure.Chain.ChainKey;

        public static toObject(
          message: proto.SessionStructure.Chain.ChainKey,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }

      interface IMessageKey {
        index?: number | null;

        cipherKey?: Uint8Array | null;

        macKey?: Uint8Array | null;

        iv?: Uint8Array | null;
      }

      class MessageKey implements IMessageKey {
        constructor(properties?: proto.SessionStructure.Chain.IMessageKey);

        public index: number;

        public cipherKey: Uint8Array;

        public macKey: Uint8Array;

        public iv: Uint8Array;

        public static create(
          properties?: proto.SessionStructure.Chain.IMessageKey,
        ): proto.SessionStructure.Chain.MessageKey;

        public static encode(
          message: proto.SessionStructure.Chain.IMessageKey,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static encodeDelimited(
          message: proto.SessionStructure.Chain.IMessageKey,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): proto.SessionStructure.Chain.MessageKey;

        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): proto.SessionStructure.Chain.MessageKey;

        public static verify(message: { [k: string]: any }): string | null;

        public static fromObject(object: {
          [k: string]: any;
        }): proto.SessionStructure.Chain.MessageKey;

        public static toObject(
          message: proto.SessionStructure.Chain.MessageKey,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any };

        public toJSON(): { [k: string]: any };
      }
    }

    interface IPendingKeyExchange {
      sequence?: number | null;

      localBaseKey?: Uint8Array | null;

      localBaseKeyPrivate?: Uint8Array | null;

      localRatchetKey?: Uint8Array | null;

      localRatchetKeyPrivate?: Uint8Array | null;

      localIdentityKey?: Uint8Array | null;

      localIdentityKeyPrivate?: Uint8Array | null;
    }

    class PendingKeyExchange implements IPendingKeyExchange {
      constructor(properties?: proto.SessionStructure.IPendingKeyExchange);

      public sequence: number;

      public localBaseKey: Uint8Array;

      public localBaseKeyPrivate: Uint8Array;

      public localRatchetKey: Uint8Array;

      public localRatchetKeyPrivate: Uint8Array;

      public localIdentityKey: Uint8Array;

      public localIdentityKeyPrivate: Uint8Array;

      public static create(
        properties?: proto.SessionStructure.IPendingKeyExchange,
      ): proto.SessionStructure.PendingKeyExchange;

      public static encode(
        message: proto.SessionStructure.IPendingKeyExchange,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SessionStructure.IPendingKeyExchange,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SessionStructure.PendingKeyExchange;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SessionStructure.PendingKeyExchange;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SessionStructure.PendingKeyExchange;

      public static toObject(
        message: proto.SessionStructure.PendingKeyExchange,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPendingPreKey {
      preKeyId?: number | null;

      signedPreKeyId?: number | null;

      baseKey?: Uint8Array | null;
    }

    class PendingPreKey implements IPendingPreKey {
      constructor(properties?: proto.SessionStructure.IPendingPreKey);

      public preKeyId: number;

      public signedPreKeyId: number;

      public baseKey: Uint8Array;

      public static create(
        properties?: proto.SessionStructure.IPendingPreKey,
      ): proto.SessionStructure.PendingPreKey;

      public static encode(
        message: proto.SessionStructure.IPendingPreKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SessionStructure.IPendingPreKey,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SessionStructure.PendingPreKey;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SessionStructure.PendingPreKey;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SessionStructure.PendingPreKey;

      public static toObject(
        message: proto.SessionStructure.PendingPreKey,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }
  }

  interface ISignalMessage {
    ratchetKey?: Uint8Array | null;

    counter?: number | null;

    previousCounter?: number | null;

    ciphertext?: Uint8Array | null;
  }

  class SignalMessage implements ISignalMessage {
    constructor(properties?: proto.ISignalMessage);

    public ratchetKey: Uint8Array;

    public counter: number;

    public previousCounter: number;

    public ciphertext: Uint8Array;

    public static create(
      properties?: proto.ISignalMessage,
    ): proto.SignalMessage;

    public static encode(
      message: proto.ISignalMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISignalMessage,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SignalMessage;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SignalMessage;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.SignalMessage;

    public static toObject(
      message: proto.SignalMessage,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISignedPreKeyRecordStructure {
    id?: number | null;

    publicKey?: Uint8Array | null;

    privateKey?: Uint8Array | null;

    signature?: Uint8Array | null;

    timestamp?: number | Long | null;
  }

  class SignedPreKeyRecordStructure implements ISignedPreKeyRecordStructure {
    constructor(properties?: proto.ISignedPreKeyRecordStructure);

    public id: number;

    public publicKey: Uint8Array;

    public privateKey: Uint8Array;

    public signature: Uint8Array;

    public timestamp: number | Long;

    public static create(
      properties?: proto.ISignedPreKeyRecordStructure,
    ): proto.SignedPreKeyRecordStructure;

    public static encode(
      message: proto.ISignedPreKeyRecordStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISignedPreKeyRecordStructure,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SignedPreKeyRecordStructure;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SignedPreKeyRecordStructure;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.SignedPreKeyRecordStructure;

    public static toObject(
      message: proto.SignedPreKeyRecordStructure,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IStatusPSA {
    campaignId: number | Long;

    campaignExpirationTimestamp?: number | Long | null;
  }

  class StatusPSA implements IStatusPSA {
    constructor(properties?: proto.IStatusPSA);

    public campaignId: number | Long;

    public campaignExpirationTimestamp: number | Long;

    public static create(properties?: proto.IStatusPSA): proto.StatusPSA;

    public static encode(
      message: proto.IStatusPSA,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IStatusPSA,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.StatusPSA;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.StatusPSA;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.StatusPSA;

    public static toObject(
      message: proto.StatusPSA,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IStickerMetadata {
    url?: string | null;

    fileSha256?: Uint8Array | null;

    fileEncSha256?: Uint8Array | null;

    mediaKey?: Uint8Array | null;

    mimetype?: string | null;

    height?: number | null;

    width?: number | null;

    directPath?: string | null;

    fileLength?: number | Long | null;

    weight?: number | null;

    lastStickerSentTs?: number | Long | null;
  }

  class StickerMetadata implements IStickerMetadata {
    constructor(properties?: proto.IStickerMetadata);

    public url: string;

    public fileSha256: Uint8Array;

    public fileEncSha256: Uint8Array;

    public mediaKey: Uint8Array;

    public mimetype: string;

    public height: number;

    public width: number;

    public directPath: string;

    public fileLength: number | Long;

    public weight: number;

    public lastStickerSentTs: number | Long;

    public static create(
      properties?: proto.IStickerMetadata,
    ): proto.StickerMetadata;

    public static encode(
      message: proto.IStickerMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IStickerMetadata,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.StickerMetadata;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.StickerMetadata;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.StickerMetadata;

    public static toObject(
      message: proto.StickerMetadata,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISyncActionData {
    index?: Uint8Array | null;

    value?: proto.ISyncActionValue | null;

    padding?: Uint8Array | null;

    version?: number | null;
  }

  class SyncActionData implements ISyncActionData {
    constructor(properties?: proto.ISyncActionData);

    public index: Uint8Array;

    public value?: proto.ISyncActionValue | null;

    public padding: Uint8Array;

    public version: number;

    public static create(
      properties?: proto.ISyncActionData,
    ): proto.SyncActionData;

    public static encode(
      message: proto.ISyncActionData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISyncActionData,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SyncActionData;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SyncActionData;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.SyncActionData;

    public static toObject(
      message: proto.SyncActionData,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISyncActionValue {
    timestamp?: number | Long | null;

    starAction?: proto.SyncActionValue.IStarAction | null;

    contactAction?: proto.SyncActionValue.IContactAction | null;

    muteAction?: proto.SyncActionValue.IMuteAction | null;

    pinAction?: proto.SyncActionValue.IPinAction | null;

    securityNotificationSetting?: proto.SyncActionValue.ISecurityNotificationSetting | null;

    pushNameSetting?: proto.SyncActionValue.IPushNameSetting | null;

    quickReplyAction?: proto.SyncActionValue.IQuickReplyAction | null;

    recentEmojiWeightsAction?: proto.SyncActionValue.IRecentEmojiWeightsAction | null;

    labelEditAction?: proto.SyncActionValue.ILabelEditAction | null;

    labelAssociationAction?: proto.SyncActionValue.ILabelAssociationAction | null;

    localeSetting?: proto.SyncActionValue.ILocaleSetting | null;

    archiveChatAction?: proto.SyncActionValue.IArchiveChatAction | null;

    deleteMessageForMeAction?: proto.SyncActionValue.IDeleteMessageForMeAction | null;

    keyExpiration?: proto.SyncActionValue.IKeyExpiration | null;

    markChatAsReadAction?: proto.SyncActionValue.IMarkChatAsReadAction | null;

    clearChatAction?: proto.SyncActionValue.IClearChatAction | null;

    deleteChatAction?: proto.SyncActionValue.IDeleteChatAction | null;

    unarchiveChatsSetting?: proto.SyncActionValue.IUnarchiveChatsSetting | null;

    primaryFeature?: proto.SyncActionValue.IPrimaryFeature | null;

    androidUnsupportedActions?: proto.SyncActionValue.IAndroidUnsupportedActions | null;

    agentAction?: proto.SyncActionValue.IAgentAction | null;

    subscriptionAction?: proto.SyncActionValue.ISubscriptionAction | null;

    userStatusMuteAction?: proto.SyncActionValue.IUserStatusMuteAction | null;

    timeFormatAction?: proto.SyncActionValue.ITimeFormatAction | null;

    nuxAction?: proto.SyncActionValue.INuxAction | null;

    primaryVersionAction?: proto.SyncActionValue.IPrimaryVersionAction | null;

    stickerAction?: proto.SyncActionValue.IStickerAction | null;

    removeRecentStickerAction?: proto.SyncActionValue.IRemoveRecentStickerAction | null;

    chatAssignment?: proto.SyncActionValue.IChatAssignmentAction | null;

    chatAssignmentOpenedStatus?: proto.SyncActionValue.IChatAssignmentOpenedStatusAction | null;

    pnForLidChatAction?: proto.SyncActionValue.IPnForLidChatAction | null;

    marketingMessageAction?: proto.SyncActionValue.IMarketingMessageAction | null;

    marketingMessageBroadcastAction?: proto.SyncActionValue.IMarketingMessageBroadcastAction | null;

    externalWebBetaAction?: proto.SyncActionValue.IExternalWebBetaAction | null;

    privacySettingRelayAllCalls?: proto.SyncActionValue.IPrivacySettingRelayAllCalls | null;

    callLogAction?: proto.SyncActionValue.ICallLogAction | null;

    statusPrivacy?: proto.SyncActionValue.IStatusPrivacyAction | null;

    botWelcomeRequestAction?: proto.SyncActionValue.IBotWelcomeRequestAction | null;

    deleteIndividualCallLog?: proto.SyncActionValue.IDeleteIndividualCallLogAction | null;

    labelReorderingAction?: proto.SyncActionValue.ILabelReorderingAction | null;

    paymentInfoAction?: proto.SyncActionValue.IPaymentInfoAction | null;

    customPaymentMethodsAction?: proto.SyncActionValue.ICustomPaymentMethodsAction | null;
  }

  class SyncActionValue implements ISyncActionValue {
    constructor(properties?: proto.ISyncActionValue);

    public timestamp: number | Long;

    public starAction?: proto.SyncActionValue.IStarAction | null;

    public contactAction?: proto.SyncActionValue.IContactAction | null;

    public muteAction?: proto.SyncActionValue.IMuteAction | null;

    public pinAction?: proto.SyncActionValue.IPinAction | null;

    public securityNotificationSetting?: proto.SyncActionValue.ISecurityNotificationSetting | null;

    public pushNameSetting?: proto.SyncActionValue.IPushNameSetting | null;

    public quickReplyAction?: proto.SyncActionValue.IQuickReplyAction | null;

    public recentEmojiWeightsAction?: proto.SyncActionValue.IRecentEmojiWeightsAction | null;

    public labelEditAction?: proto.SyncActionValue.ILabelEditAction | null;

    public labelAssociationAction?: proto.SyncActionValue.ILabelAssociationAction | null;

    public localeSetting?: proto.SyncActionValue.ILocaleSetting | null;

    public archiveChatAction?: proto.SyncActionValue.IArchiveChatAction | null;

    public deleteMessageForMeAction?: proto.SyncActionValue.IDeleteMessageForMeAction | null;

    public keyExpiration?: proto.SyncActionValue.IKeyExpiration | null;

    public markChatAsReadAction?: proto.SyncActionValue.IMarkChatAsReadAction | null;

    public clearChatAction?: proto.SyncActionValue.IClearChatAction | null;

    public deleteChatAction?: proto.SyncActionValue.IDeleteChatAction | null;

    public unarchiveChatsSetting?: proto.SyncActionValue.IUnarchiveChatsSetting | null;

    public primaryFeature?: proto.SyncActionValue.IPrimaryFeature | null;

    public androidUnsupportedActions?: proto.SyncActionValue.IAndroidUnsupportedActions | null;

    public agentAction?: proto.SyncActionValue.IAgentAction | null;

    public subscriptionAction?: proto.SyncActionValue.ISubscriptionAction | null;

    public userStatusMuteAction?: proto.SyncActionValue.IUserStatusMuteAction | null;

    public timeFormatAction?: proto.SyncActionValue.ITimeFormatAction | null;

    public nuxAction?: proto.SyncActionValue.INuxAction | null;

    public primaryVersionAction?: proto.SyncActionValue.IPrimaryVersionAction | null;

    public stickerAction?: proto.SyncActionValue.IStickerAction | null;

    public removeRecentStickerAction?: proto.SyncActionValue.IRemoveRecentStickerAction | null;

    public chatAssignment?: proto.SyncActionValue.IChatAssignmentAction | null;

    public chatAssignmentOpenedStatus?: proto.SyncActionValue.IChatAssignmentOpenedStatusAction | null;

    public pnForLidChatAction?: proto.SyncActionValue.IPnForLidChatAction | null;

    public marketingMessageAction?: proto.SyncActionValue.IMarketingMessageAction | null;

    public marketingMessageBroadcastAction?: proto.SyncActionValue.IMarketingMessageBroadcastAction | null;

    public externalWebBetaAction?: proto.SyncActionValue.IExternalWebBetaAction | null;

    public privacySettingRelayAllCalls?: proto.SyncActionValue.IPrivacySettingRelayAllCalls | null;

    public callLogAction?: proto.SyncActionValue.ICallLogAction | null;

    public statusPrivacy?: proto.SyncActionValue.IStatusPrivacyAction | null;

    public botWelcomeRequestAction?: proto.SyncActionValue.IBotWelcomeRequestAction | null;

    public deleteIndividualCallLog?: proto.SyncActionValue.IDeleteIndividualCallLogAction | null;

    public labelReorderingAction?: proto.SyncActionValue.ILabelReorderingAction | null;

    public paymentInfoAction?: proto.SyncActionValue.IPaymentInfoAction | null;

    public customPaymentMethodsAction?: proto.SyncActionValue.ICustomPaymentMethodsAction | null;

    public static create(
      properties?: proto.ISyncActionValue,
    ): proto.SyncActionValue;

    public static encode(
      message: proto.ISyncActionValue,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISyncActionValue,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SyncActionValue;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SyncActionValue;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.SyncActionValue;

    public static toObject(
      message: proto.SyncActionValue,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace SyncActionValue {
    interface IAgentAction {
      name?: string | null;

      deviceID?: number | null;

      isDeleted?: boolean | null;
    }

    class AgentAction implements IAgentAction {
      constructor(properties?: proto.SyncActionValue.IAgentAction);

      public name: string;

      public deviceID: number;

      public isDeleted: boolean;

      public static create(
        properties?: proto.SyncActionValue.IAgentAction,
      ): proto.SyncActionValue.AgentAction;

      public static encode(
        message: proto.SyncActionValue.IAgentAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IAgentAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.AgentAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.AgentAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.AgentAction;

      public static toObject(
        message: proto.SyncActionValue.AgentAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IAndroidUnsupportedActions {
      allowed?: boolean | null;
    }

    class AndroidUnsupportedActions implements IAndroidUnsupportedActions {
      constructor(
        properties?: proto.SyncActionValue.IAndroidUnsupportedActions,
      );

      public allowed: boolean;

      public static create(
        properties?: proto.SyncActionValue.IAndroidUnsupportedActions,
      ): proto.SyncActionValue.AndroidUnsupportedActions;

      public static encode(
        message: proto.SyncActionValue.IAndroidUnsupportedActions,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IAndroidUnsupportedActions,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.AndroidUnsupportedActions;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.AndroidUnsupportedActions;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.AndroidUnsupportedActions;

      public static toObject(
        message: proto.SyncActionValue.AndroidUnsupportedActions,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IArchiveChatAction {
      archived?: boolean | null;

      messageRange?: proto.SyncActionValue.ISyncActionMessageRange | null;
    }

    class ArchiveChatAction implements IArchiveChatAction {
      constructor(properties?: proto.SyncActionValue.IArchiveChatAction);

      public archived: boolean;

      public messageRange?: proto.SyncActionValue.ISyncActionMessageRange | null;

      public static create(
        properties?: proto.SyncActionValue.IArchiveChatAction,
      ): proto.SyncActionValue.ArchiveChatAction;

      public static encode(
        message: proto.SyncActionValue.IArchiveChatAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IArchiveChatAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.ArchiveChatAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.ArchiveChatAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.ArchiveChatAction;

      public static toObject(
        message: proto.SyncActionValue.ArchiveChatAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IBotWelcomeRequestAction {
      isSent?: boolean | null;
    }

    class BotWelcomeRequestAction implements IBotWelcomeRequestAction {
      constructor(properties?: proto.SyncActionValue.IBotWelcomeRequestAction);

      public isSent: boolean;

      public static create(
        properties?: proto.SyncActionValue.IBotWelcomeRequestAction,
      ): proto.SyncActionValue.BotWelcomeRequestAction;

      public static encode(
        message: proto.SyncActionValue.IBotWelcomeRequestAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IBotWelcomeRequestAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.BotWelcomeRequestAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.BotWelcomeRequestAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.BotWelcomeRequestAction;

      public static toObject(
        message: proto.SyncActionValue.BotWelcomeRequestAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ICallLogAction {
      callLogRecord?: proto.ICallLogRecord | null;
    }

    class CallLogAction implements ICallLogAction {
      constructor(properties?: proto.SyncActionValue.ICallLogAction);

      public callLogRecord?: proto.ICallLogRecord | null;

      public static create(
        properties?: proto.SyncActionValue.ICallLogAction,
      ): proto.SyncActionValue.CallLogAction;

      public static encode(
        message: proto.SyncActionValue.ICallLogAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ICallLogAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.CallLogAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.CallLogAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.CallLogAction;

      public static toObject(
        message: proto.SyncActionValue.CallLogAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IChatAssignmentAction {
      deviceAgentID?: string | null;
    }

    class ChatAssignmentAction implements IChatAssignmentAction {
      constructor(properties?: proto.SyncActionValue.IChatAssignmentAction);

      public deviceAgentID: string;

      public static create(
        properties?: proto.SyncActionValue.IChatAssignmentAction,
      ): proto.SyncActionValue.ChatAssignmentAction;

      public static encode(
        message: proto.SyncActionValue.IChatAssignmentAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IChatAssignmentAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.ChatAssignmentAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.ChatAssignmentAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.ChatAssignmentAction;

      public static toObject(
        message: proto.SyncActionValue.ChatAssignmentAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IChatAssignmentOpenedStatusAction {
      chatOpened?: boolean | null;
    }

    class ChatAssignmentOpenedStatusAction
      implements IChatAssignmentOpenedStatusAction
    {
      constructor(
        properties?: proto.SyncActionValue.IChatAssignmentOpenedStatusAction,
      );

      public chatOpened: boolean;

      public static create(
        properties?: proto.SyncActionValue.IChatAssignmentOpenedStatusAction,
      ): proto.SyncActionValue.ChatAssignmentOpenedStatusAction;

      public static encode(
        message: proto.SyncActionValue.IChatAssignmentOpenedStatusAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IChatAssignmentOpenedStatusAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.ChatAssignmentOpenedStatusAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.ChatAssignmentOpenedStatusAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.ChatAssignmentOpenedStatusAction;

      public static toObject(
        message: proto.SyncActionValue.ChatAssignmentOpenedStatusAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IClearChatAction {
      messageRange?: proto.SyncActionValue.ISyncActionMessageRange | null;
    }

    class ClearChatAction implements IClearChatAction {
      constructor(properties?: proto.SyncActionValue.IClearChatAction);

      public messageRange?: proto.SyncActionValue.ISyncActionMessageRange | null;

      public static create(
        properties?: proto.SyncActionValue.IClearChatAction,
      ): proto.SyncActionValue.ClearChatAction;

      public static encode(
        message: proto.SyncActionValue.IClearChatAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IClearChatAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.ClearChatAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.ClearChatAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.ClearChatAction;

      public static toObject(
        message: proto.SyncActionValue.ClearChatAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IContactAction {
      fullName?: string | null;

      firstName?: string | null;

      lidJid?: string | null;

      saveOnPrimaryAddressbook?: boolean | null;
    }

    class ContactAction implements IContactAction {
      constructor(properties?: proto.SyncActionValue.IContactAction);

      public fullName: string;

      public firstName: string;

      public lidJid: string;

      public saveOnPrimaryAddressbook: boolean;

      public static create(
        properties?: proto.SyncActionValue.IContactAction,
      ): proto.SyncActionValue.ContactAction;

      public static encode(
        message: proto.SyncActionValue.IContactAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IContactAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.ContactAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.ContactAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.ContactAction;

      public static toObject(
        message: proto.SyncActionValue.ContactAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ICustomPaymentMethod {
      credentialId: string;

      country: string;

      type: string;

      metadata?: proto.SyncActionValue.ICustomPaymentMethodMetadata[] | null;
    }

    class CustomPaymentMethod implements ICustomPaymentMethod {
      constructor(properties?: proto.SyncActionValue.ICustomPaymentMethod);

      public credentialId: string;

      public country: string;

      public type: string;

      public metadata: proto.SyncActionValue.ICustomPaymentMethodMetadata[];

      public static create(
        properties?: proto.SyncActionValue.ICustomPaymentMethod,
      ): proto.SyncActionValue.CustomPaymentMethod;

      public static encode(
        message: proto.SyncActionValue.ICustomPaymentMethod,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ICustomPaymentMethod,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.CustomPaymentMethod;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.CustomPaymentMethod;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.CustomPaymentMethod;

      public static toObject(
        message: proto.SyncActionValue.CustomPaymentMethod,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ICustomPaymentMethodMetadata {
      key: string;

      value: string;
    }

    class CustomPaymentMethodMetadata implements ICustomPaymentMethodMetadata {
      constructor(
        properties?: proto.SyncActionValue.ICustomPaymentMethodMetadata,
      );

      public key: string;

      public value: string;

      public static create(
        properties?: proto.SyncActionValue.ICustomPaymentMethodMetadata,
      ): proto.SyncActionValue.CustomPaymentMethodMetadata;

      public static encode(
        message: proto.SyncActionValue.ICustomPaymentMethodMetadata,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ICustomPaymentMethodMetadata,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.CustomPaymentMethodMetadata;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.CustomPaymentMethodMetadata;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.CustomPaymentMethodMetadata;

      public static toObject(
        message: proto.SyncActionValue.CustomPaymentMethodMetadata,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ICustomPaymentMethodsAction {
      customPaymentMethods?:
        | proto.SyncActionValue.ICustomPaymentMethod[]
        | null;
    }

    class CustomPaymentMethodsAction implements ICustomPaymentMethodsAction {
      constructor(
        properties?: proto.SyncActionValue.ICustomPaymentMethodsAction,
      );

      public customPaymentMethods: proto.SyncActionValue.ICustomPaymentMethod[];

      public static create(
        properties?: proto.SyncActionValue.ICustomPaymentMethodsAction,
      ): proto.SyncActionValue.CustomPaymentMethodsAction;

      public static encode(
        message: proto.SyncActionValue.ICustomPaymentMethodsAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ICustomPaymentMethodsAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.CustomPaymentMethodsAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.CustomPaymentMethodsAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.CustomPaymentMethodsAction;

      public static toObject(
        message: proto.SyncActionValue.CustomPaymentMethodsAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IDeleteChatAction {
      messageRange?: proto.SyncActionValue.ISyncActionMessageRange | null;
    }

    class DeleteChatAction implements IDeleteChatAction {
      constructor(properties?: proto.SyncActionValue.IDeleteChatAction);

      public messageRange?: proto.SyncActionValue.ISyncActionMessageRange | null;

      public static create(
        properties?: proto.SyncActionValue.IDeleteChatAction,
      ): proto.SyncActionValue.DeleteChatAction;

      public static encode(
        message: proto.SyncActionValue.IDeleteChatAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IDeleteChatAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.DeleteChatAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.DeleteChatAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.DeleteChatAction;

      public static toObject(
        message: proto.SyncActionValue.DeleteChatAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IDeleteIndividualCallLogAction {
      peerJid?: string | null;

      isIncoming?: boolean | null;
    }

    class DeleteIndividualCallLogAction
      implements IDeleteIndividualCallLogAction
    {
      constructor(
        properties?: proto.SyncActionValue.IDeleteIndividualCallLogAction,
      );

      public peerJid: string;

      public isIncoming: boolean;

      public static create(
        properties?: proto.SyncActionValue.IDeleteIndividualCallLogAction,
      ): proto.SyncActionValue.DeleteIndividualCallLogAction;

      public static encode(
        message: proto.SyncActionValue.IDeleteIndividualCallLogAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IDeleteIndividualCallLogAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.DeleteIndividualCallLogAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.DeleteIndividualCallLogAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.DeleteIndividualCallLogAction;

      public static toObject(
        message: proto.SyncActionValue.DeleteIndividualCallLogAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IDeleteMessageForMeAction {
      deleteMedia?: boolean | null;

      messageTimestamp?: number | Long | null;
    }

    class DeleteMessageForMeAction implements IDeleteMessageForMeAction {
      constructor(properties?: proto.SyncActionValue.IDeleteMessageForMeAction);

      public deleteMedia: boolean;

      public messageTimestamp: number | Long;

      public static create(
        properties?: proto.SyncActionValue.IDeleteMessageForMeAction,
      ): proto.SyncActionValue.DeleteMessageForMeAction;

      public static encode(
        message: proto.SyncActionValue.IDeleteMessageForMeAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IDeleteMessageForMeAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.DeleteMessageForMeAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.DeleteMessageForMeAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.DeleteMessageForMeAction;

      public static toObject(
        message: proto.SyncActionValue.DeleteMessageForMeAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IExternalWebBetaAction {
      isOptIn?: boolean | null;
    }

    class ExternalWebBetaAction implements IExternalWebBetaAction {
      constructor(properties?: proto.SyncActionValue.IExternalWebBetaAction);

      public isOptIn: boolean;

      public static create(
        properties?: proto.SyncActionValue.IExternalWebBetaAction,
      ): proto.SyncActionValue.ExternalWebBetaAction;

      public static encode(
        message: proto.SyncActionValue.IExternalWebBetaAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IExternalWebBetaAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.ExternalWebBetaAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.ExternalWebBetaAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.ExternalWebBetaAction;

      public static toObject(
        message: proto.SyncActionValue.ExternalWebBetaAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IKeyExpiration {
      expiredKeyEpoch?: number | null;
    }

    class KeyExpiration implements IKeyExpiration {
      constructor(properties?: proto.SyncActionValue.IKeyExpiration);

      public expiredKeyEpoch: number;

      public static create(
        properties?: proto.SyncActionValue.IKeyExpiration,
      ): proto.SyncActionValue.KeyExpiration;

      public static encode(
        message: proto.SyncActionValue.IKeyExpiration,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IKeyExpiration,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.KeyExpiration;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.KeyExpiration;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.KeyExpiration;

      public static toObject(
        message: proto.SyncActionValue.KeyExpiration,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ILabelAssociationAction {
      labeled?: boolean | null;
    }

    class LabelAssociationAction implements ILabelAssociationAction {
      constructor(properties?: proto.SyncActionValue.ILabelAssociationAction);

      public labeled: boolean;

      public static create(
        properties?: proto.SyncActionValue.ILabelAssociationAction,
      ): proto.SyncActionValue.LabelAssociationAction;

      public static encode(
        message: proto.SyncActionValue.ILabelAssociationAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ILabelAssociationAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.LabelAssociationAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.LabelAssociationAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.LabelAssociationAction;

      public static toObject(
        message: proto.SyncActionValue.LabelAssociationAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ILabelEditAction {
      name?: string | null;

      color?: number | null;

      predefinedId?: number | null;

      deleted?: boolean | null;

      orderIndex?: number | null;
    }

    class LabelEditAction implements ILabelEditAction {
      constructor(properties?: proto.SyncActionValue.ILabelEditAction);

      public name: string;

      public color: number;

      public predefinedId: number;

      public deleted: boolean;

      public orderIndex: number;

      public static create(
        properties?: proto.SyncActionValue.ILabelEditAction,
      ): proto.SyncActionValue.LabelEditAction;

      public static encode(
        message: proto.SyncActionValue.ILabelEditAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ILabelEditAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.LabelEditAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.LabelEditAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.LabelEditAction;

      public static toObject(
        message: proto.SyncActionValue.LabelEditAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ILabelReorderingAction {
      sortedLabelIds?: number[] | null;
    }

    class LabelReorderingAction implements ILabelReorderingAction {
      constructor(properties?: proto.SyncActionValue.ILabelReorderingAction);

      public sortedLabelIds: number[];

      public static create(
        properties?: proto.SyncActionValue.ILabelReorderingAction,
      ): proto.SyncActionValue.LabelReorderingAction;

      public static encode(
        message: proto.SyncActionValue.ILabelReorderingAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ILabelReorderingAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.LabelReorderingAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.LabelReorderingAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.LabelReorderingAction;

      public static toObject(
        message: proto.SyncActionValue.LabelReorderingAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ILocaleSetting {
      locale?: string | null;
    }

    class LocaleSetting implements ILocaleSetting {
      constructor(properties?: proto.SyncActionValue.ILocaleSetting);

      public locale: string;

      public static create(
        properties?: proto.SyncActionValue.ILocaleSetting,
      ): proto.SyncActionValue.LocaleSetting;

      public static encode(
        message: proto.SyncActionValue.ILocaleSetting,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ILocaleSetting,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.LocaleSetting;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.LocaleSetting;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.LocaleSetting;

      public static toObject(
        message: proto.SyncActionValue.LocaleSetting,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IMarkChatAsReadAction {
      read?: boolean | null;

      messageRange?: proto.SyncActionValue.ISyncActionMessageRange | null;
    }

    class MarkChatAsReadAction implements IMarkChatAsReadAction {
      constructor(properties?: proto.SyncActionValue.IMarkChatAsReadAction);

      public read: boolean;

      public messageRange?: proto.SyncActionValue.ISyncActionMessageRange | null;

      public static create(
        properties?: proto.SyncActionValue.IMarkChatAsReadAction,
      ): proto.SyncActionValue.MarkChatAsReadAction;

      public static encode(
        message: proto.SyncActionValue.IMarkChatAsReadAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IMarkChatAsReadAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.MarkChatAsReadAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.MarkChatAsReadAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.MarkChatAsReadAction;

      public static toObject(
        message: proto.SyncActionValue.MarkChatAsReadAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IMarketingMessageAction {
      name?: string | null;

      message?: string | null;

      type?: proto.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType | null;

      createdAt?: number | Long | null;

      lastSentAt?: number | Long | null;

      isDeleted?: boolean | null;

      mediaId?: string | null;
    }

    class MarketingMessageAction implements IMarketingMessageAction {
      constructor(properties?: proto.SyncActionValue.IMarketingMessageAction);

      public name: string;

      public message: string;

      public type: proto.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType;

      public createdAt: number | Long;

      public lastSentAt: number | Long;

      public isDeleted: boolean;

      public mediaId: string;

      public static create(
        properties?: proto.SyncActionValue.IMarketingMessageAction,
      ): proto.SyncActionValue.MarketingMessageAction;

      public static encode(
        message: proto.SyncActionValue.IMarketingMessageAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IMarketingMessageAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.MarketingMessageAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.MarketingMessageAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.MarketingMessageAction;

      public static toObject(
        message: proto.SyncActionValue.MarketingMessageAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace MarketingMessageAction {
      enum MarketingMessagePrototypeType {
        PERSONALIZED = 0,
      }
    }

    interface IMarketingMessageBroadcastAction {
      repliedCount?: number | null;
    }

    class MarketingMessageBroadcastAction
      implements IMarketingMessageBroadcastAction
    {
      constructor(
        properties?: proto.SyncActionValue.IMarketingMessageBroadcastAction,
      );

      public repliedCount: number;

      public static create(
        properties?: proto.SyncActionValue.IMarketingMessageBroadcastAction,
      ): proto.SyncActionValue.MarketingMessageBroadcastAction;

      public static encode(
        message: proto.SyncActionValue.IMarketingMessageBroadcastAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IMarketingMessageBroadcastAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.MarketingMessageBroadcastAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.MarketingMessageBroadcastAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.MarketingMessageBroadcastAction;

      public static toObject(
        message: proto.SyncActionValue.MarketingMessageBroadcastAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IMuteAction {
      muted?: boolean | null;

      muteEndTimestamp?: number | Long | null;

      autoMuted?: boolean | null;
    }

    class MuteAction implements IMuteAction {
      constructor(properties?: proto.SyncActionValue.IMuteAction);

      public muted: boolean;

      public muteEndTimestamp: number | Long;

      public autoMuted: boolean;

      public static create(
        properties?: proto.SyncActionValue.IMuteAction,
      ): proto.SyncActionValue.MuteAction;

      public static encode(
        message: proto.SyncActionValue.IMuteAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IMuteAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.MuteAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.MuteAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.MuteAction;

      public static toObject(
        message: proto.SyncActionValue.MuteAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface INuxAction {
      acknowledged?: boolean | null;
    }

    class NuxAction implements INuxAction {
      constructor(properties?: proto.SyncActionValue.INuxAction);

      public acknowledged: boolean;

      public static create(
        properties?: proto.SyncActionValue.INuxAction,
      ): proto.SyncActionValue.NuxAction;

      public static encode(
        message: proto.SyncActionValue.INuxAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.INuxAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.NuxAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.NuxAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.NuxAction;

      public static toObject(
        message: proto.SyncActionValue.NuxAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPaymentInfoAction {
      cpi?: string | null;
    }

    class PaymentInfoAction implements IPaymentInfoAction {
      constructor(properties?: proto.SyncActionValue.IPaymentInfoAction);

      public cpi: string;

      public static create(
        properties?: proto.SyncActionValue.IPaymentInfoAction,
      ): proto.SyncActionValue.PaymentInfoAction;

      public static encode(
        message: proto.SyncActionValue.IPaymentInfoAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IPaymentInfoAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.PaymentInfoAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.PaymentInfoAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.PaymentInfoAction;

      public static toObject(
        message: proto.SyncActionValue.PaymentInfoAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPinAction {
      pinned?: boolean | null;
    }

    class PinAction implements IPinAction {
      constructor(properties?: proto.SyncActionValue.IPinAction);

      public pinned: boolean;

      public static create(
        properties?: proto.SyncActionValue.IPinAction,
      ): proto.SyncActionValue.PinAction;

      public static encode(
        message: proto.SyncActionValue.IPinAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IPinAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.PinAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.PinAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.PinAction;

      public static toObject(
        message: proto.SyncActionValue.PinAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPnForLidChatAction {
      pnJid?: string | null;
    }

    class PnForLidChatAction implements IPnForLidChatAction {
      constructor(properties?: proto.SyncActionValue.IPnForLidChatAction);

      public pnJid: string;

      public static create(
        properties?: proto.SyncActionValue.IPnForLidChatAction,
      ): proto.SyncActionValue.PnForLidChatAction;

      public static encode(
        message: proto.SyncActionValue.IPnForLidChatAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IPnForLidChatAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.PnForLidChatAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.PnForLidChatAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.PnForLidChatAction;

      public static toObject(
        message: proto.SyncActionValue.PnForLidChatAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPrimaryFeature {
      flags?: string[] | null;
    }

    class PrimaryFeature implements IPrimaryFeature {
      constructor(properties?: proto.SyncActionValue.IPrimaryFeature);

      public flags: string[];

      public static create(
        properties?: proto.SyncActionValue.IPrimaryFeature,
      ): proto.SyncActionValue.PrimaryFeature;

      public static encode(
        message: proto.SyncActionValue.IPrimaryFeature,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IPrimaryFeature,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.PrimaryFeature;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.PrimaryFeature;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.PrimaryFeature;

      public static toObject(
        message: proto.SyncActionValue.PrimaryFeature,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPrimaryVersionAction {
      version?: string | null;
    }

    class PrimaryVersionAction implements IPrimaryVersionAction {
      constructor(properties?: proto.SyncActionValue.IPrimaryVersionAction);

      public version: string;

      public static create(
        properties?: proto.SyncActionValue.IPrimaryVersionAction,
      ): proto.SyncActionValue.PrimaryVersionAction;

      public static encode(
        message: proto.SyncActionValue.IPrimaryVersionAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IPrimaryVersionAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.PrimaryVersionAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.PrimaryVersionAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.PrimaryVersionAction;

      public static toObject(
        message: proto.SyncActionValue.PrimaryVersionAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPrivacySettingRelayAllCalls {
      isEnabled?: boolean | null;
    }

    class PrivacySettingRelayAllCalls implements IPrivacySettingRelayAllCalls {
      constructor(
        properties?: proto.SyncActionValue.IPrivacySettingRelayAllCalls,
      );

      public isEnabled: boolean;

      public static create(
        properties?: proto.SyncActionValue.IPrivacySettingRelayAllCalls,
      ): proto.SyncActionValue.PrivacySettingRelayAllCalls;

      public static encode(
        message: proto.SyncActionValue.IPrivacySettingRelayAllCalls,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IPrivacySettingRelayAllCalls,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.PrivacySettingRelayAllCalls;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.PrivacySettingRelayAllCalls;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.PrivacySettingRelayAllCalls;

      public static toObject(
        message: proto.SyncActionValue.PrivacySettingRelayAllCalls,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IPushNameSetting {
      name?: string | null;
    }

    class PushNameSetting implements IPushNameSetting {
      constructor(properties?: proto.SyncActionValue.IPushNameSetting);

      public name: string;

      public static create(
        properties?: proto.SyncActionValue.IPushNameSetting,
      ): proto.SyncActionValue.PushNameSetting;

      public static encode(
        message: proto.SyncActionValue.IPushNameSetting,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IPushNameSetting,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.PushNameSetting;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.PushNameSetting;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.PushNameSetting;

      public static toObject(
        message: proto.SyncActionValue.PushNameSetting,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IQuickReplyAction {
      shortcut?: string | null;

      message?: string | null;

      keywords?: string[] | null;

      count?: number | null;

      deleted?: boolean | null;
    }

    class QuickReplyAction implements IQuickReplyAction {
      constructor(properties?: proto.SyncActionValue.IQuickReplyAction);

      public shortcut: string;

      public message: string;

      public keywords: string[];

      public count: number;

      public deleted: boolean;

      public static create(
        properties?: proto.SyncActionValue.IQuickReplyAction,
      ): proto.SyncActionValue.QuickReplyAction;

      public static encode(
        message: proto.SyncActionValue.IQuickReplyAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IQuickReplyAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.QuickReplyAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.QuickReplyAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.QuickReplyAction;

      public static toObject(
        message: proto.SyncActionValue.QuickReplyAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IRecentEmojiWeightsAction {
      weights?: proto.IRecentEmojiWeight[] | null;
    }

    class RecentEmojiWeightsAction implements IRecentEmojiWeightsAction {
      constructor(properties?: proto.SyncActionValue.IRecentEmojiWeightsAction);

      public weights: proto.IRecentEmojiWeight[];

      public static create(
        properties?: proto.SyncActionValue.IRecentEmojiWeightsAction,
      ): proto.SyncActionValue.RecentEmojiWeightsAction;

      public static encode(
        message: proto.SyncActionValue.IRecentEmojiWeightsAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IRecentEmojiWeightsAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.RecentEmojiWeightsAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.RecentEmojiWeightsAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.RecentEmojiWeightsAction;

      public static toObject(
        message: proto.SyncActionValue.RecentEmojiWeightsAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IRemoveRecentStickerAction {
      lastStickerSentTs?: number | Long | null;
    }

    class RemoveRecentStickerAction implements IRemoveRecentStickerAction {
      constructor(
        properties?: proto.SyncActionValue.IRemoveRecentStickerAction,
      );

      public lastStickerSentTs: number | Long;

      public static create(
        properties?: proto.SyncActionValue.IRemoveRecentStickerAction,
      ): proto.SyncActionValue.RemoveRecentStickerAction;

      public static encode(
        message: proto.SyncActionValue.IRemoveRecentStickerAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IRemoveRecentStickerAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.RemoveRecentStickerAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.RemoveRecentStickerAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.RemoveRecentStickerAction;

      public static toObject(
        message: proto.SyncActionValue.RemoveRecentStickerAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ISecurityNotificationSetting {
      showNotification?: boolean | null;
    }

    class SecurityNotificationSetting implements ISecurityNotificationSetting {
      constructor(
        properties?: proto.SyncActionValue.ISecurityNotificationSetting,
      );

      public showNotification: boolean;

      public static create(
        properties?: proto.SyncActionValue.ISecurityNotificationSetting,
      ): proto.SyncActionValue.SecurityNotificationSetting;

      public static encode(
        message: proto.SyncActionValue.ISecurityNotificationSetting,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ISecurityNotificationSetting,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.SecurityNotificationSetting;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.SecurityNotificationSetting;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.SecurityNotificationSetting;

      public static toObject(
        message: proto.SyncActionValue.SecurityNotificationSetting,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IStarAction {
      starred?: boolean | null;
    }

    class StarAction implements IStarAction {
      constructor(properties?: proto.SyncActionValue.IStarAction);

      public starred: boolean;

      public static create(
        properties?: proto.SyncActionValue.IStarAction,
      ): proto.SyncActionValue.StarAction;

      public static encode(
        message: proto.SyncActionValue.IStarAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IStarAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.StarAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.StarAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.StarAction;

      public static toObject(
        message: proto.SyncActionValue.StarAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IStatusPrivacyAction {
      mode?: proto.SyncActionValue.StatusPrivacyAction.StatusDistributionMode | null;

      userJid?: string[] | null;
    }

    class StatusPrivacyAction implements IStatusPrivacyAction {
      constructor(properties?: proto.SyncActionValue.IStatusPrivacyAction);

      public mode: proto.SyncActionValue.StatusPrivacyAction.StatusDistributionMode;

      public userJid: string[];

      public static create(
        properties?: proto.SyncActionValue.IStatusPrivacyAction,
      ): proto.SyncActionValue.StatusPrivacyAction;

      public static encode(
        message: proto.SyncActionValue.IStatusPrivacyAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IStatusPrivacyAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.StatusPrivacyAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.StatusPrivacyAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.StatusPrivacyAction;

      public static toObject(
        message: proto.SyncActionValue.StatusPrivacyAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    namespace StatusPrivacyAction {
      enum StatusDistributionMode {
        ALLOW_LIST = 0,
        DENY_LIST = 1,
        CONTACTS = 2,
      }
    }

    interface IStickerAction {
      url?: string | null;

      fileEncSha256?: Uint8Array | null;

      mediaKey?: Uint8Array | null;

      mimetype?: string | null;

      height?: number | null;

      width?: number | null;

      directPath?: string | null;

      fileLength?: number | Long | null;

      isFavorite?: boolean | null;

      deviceIdHint?: number | null;
    }

    class StickerAction implements IStickerAction {
      constructor(properties?: proto.SyncActionValue.IStickerAction);

      public url: string;

      public fileEncSha256: Uint8Array;

      public mediaKey: Uint8Array;

      public mimetype: string;

      public height: number;

      public width: number;

      public directPath: string;

      public fileLength: number | Long;

      public isFavorite: boolean;

      public deviceIdHint: number;

      public static create(
        properties?: proto.SyncActionValue.IStickerAction,
      ): proto.SyncActionValue.StickerAction;

      public static encode(
        message: proto.SyncActionValue.IStickerAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IStickerAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.StickerAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.StickerAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.StickerAction;

      public static toObject(
        message: proto.SyncActionValue.StickerAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ISubscriptionAction {
      isDeactivated?: boolean | null;

      isAutoRenewing?: boolean | null;

      expirationDate?: number | Long | null;
    }

    class SubscriptionAction implements ISubscriptionAction {
      constructor(properties?: proto.SyncActionValue.ISubscriptionAction);

      public isDeactivated: boolean;

      public isAutoRenewing: boolean;

      public expirationDate: number | Long;

      public static create(
        properties?: proto.SyncActionValue.ISubscriptionAction,
      ): proto.SyncActionValue.SubscriptionAction;

      public static encode(
        message: proto.SyncActionValue.ISubscriptionAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ISubscriptionAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.SubscriptionAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.SubscriptionAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.SubscriptionAction;

      public static toObject(
        message: proto.SyncActionValue.SubscriptionAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ISyncActionMessage {
      key?: proto.IMessageKey | null;

      timestamp?: number | Long | null;
    }

    class SyncActionMessage implements ISyncActionMessage {
      constructor(properties?: proto.SyncActionValue.ISyncActionMessage);

      public key?: proto.IMessageKey | null;

      public timestamp: number | Long;

      public static create(
        properties?: proto.SyncActionValue.ISyncActionMessage,
      ): proto.SyncActionValue.SyncActionMessage;

      public static encode(
        message: proto.SyncActionValue.ISyncActionMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ISyncActionMessage,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.SyncActionMessage;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.SyncActionMessage;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.SyncActionMessage;

      public static toObject(
        message: proto.SyncActionValue.SyncActionMessage,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ISyncActionMessageRange {
      lastMessageTimestamp?: number | Long | null;

      lastSystemMessageTimestamp?: number | Long | null;

      messages?: proto.SyncActionValue.ISyncActionMessage[] | null;
    }

    class SyncActionMessageRange implements ISyncActionMessageRange {
      constructor(properties?: proto.SyncActionValue.ISyncActionMessageRange);

      public lastMessageTimestamp: number | Long;

      public lastSystemMessageTimestamp: number | Long;

      public messages: proto.SyncActionValue.ISyncActionMessage[];

      public static create(
        properties?: proto.SyncActionValue.ISyncActionMessageRange,
      ): proto.SyncActionValue.SyncActionMessageRange;

      public static encode(
        message: proto.SyncActionValue.ISyncActionMessageRange,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ISyncActionMessageRange,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.SyncActionMessageRange;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.SyncActionMessageRange;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.SyncActionMessageRange;

      public static toObject(
        message: proto.SyncActionValue.SyncActionMessageRange,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface ITimeFormatAction {
      isTwentyFourHourFormatEnabled?: boolean | null;
    }

    class TimeFormatAction implements ITimeFormatAction {
      constructor(properties?: proto.SyncActionValue.ITimeFormatAction);

      public isTwentyFourHourFormatEnabled: boolean;

      public static create(
        properties?: proto.SyncActionValue.ITimeFormatAction,
      ): proto.SyncActionValue.TimeFormatAction;

      public static encode(
        message: proto.SyncActionValue.ITimeFormatAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.ITimeFormatAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.TimeFormatAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.TimeFormatAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.TimeFormatAction;

      public static toObject(
        message: proto.SyncActionValue.TimeFormatAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IUnarchiveChatsSetting {
      unarchiveChats?: boolean | null;
    }

    class UnarchiveChatsSetting implements IUnarchiveChatsSetting {
      constructor(properties?: proto.SyncActionValue.IUnarchiveChatsSetting);

      public unarchiveChats: boolean;

      public static create(
        properties?: proto.SyncActionValue.IUnarchiveChatsSetting,
      ): proto.SyncActionValue.UnarchiveChatsSetting;

      public static encode(
        message: proto.SyncActionValue.IUnarchiveChatsSetting,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IUnarchiveChatsSetting,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.UnarchiveChatsSetting;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.UnarchiveChatsSetting;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.UnarchiveChatsSetting;

      public static toObject(
        message: proto.SyncActionValue.UnarchiveChatsSetting,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IUserStatusMuteAction {
      muted?: boolean | null;
    }

    class UserStatusMuteAction implements IUserStatusMuteAction {
      constructor(properties?: proto.SyncActionValue.IUserStatusMuteAction);

      public muted: boolean;

      public static create(
        properties?: proto.SyncActionValue.IUserStatusMuteAction,
      ): proto.SyncActionValue.UserStatusMuteAction;

      public static encode(
        message: proto.SyncActionValue.IUserStatusMuteAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.SyncActionValue.IUserStatusMuteAction,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.SyncActionValue.UserStatusMuteAction;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.SyncActionValue.UserStatusMuteAction;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.SyncActionValue.UserStatusMuteAction;

      public static toObject(
        message: proto.SyncActionValue.UserStatusMuteAction,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }
  }

  interface ISyncdIndex {
    blob?: Uint8Array | null;
  }

  class SyncdIndex implements ISyncdIndex {
    constructor(properties?: proto.ISyncdIndex);

    public blob: Uint8Array;

    public static create(properties?: proto.ISyncdIndex): proto.SyncdIndex;

    public static encode(
      message: proto.ISyncdIndex,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISyncdIndex,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SyncdIndex;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SyncdIndex;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.SyncdIndex;

    public static toObject(
      message: proto.SyncdIndex,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISyncdMutation {
    operation?: proto.SyncdMutation.SyncdOperation | null;

    record?: proto.ISyncdRecord | null;
  }

  class SyncdMutation implements ISyncdMutation {
    constructor(properties?: proto.ISyncdMutation);

    public operation: proto.SyncdMutation.SyncdOperation;

    public record?: proto.ISyncdRecord | null;

    public static create(
      properties?: proto.ISyncdMutation,
    ): proto.SyncdMutation;

    public static encode(
      message: proto.ISyncdMutation,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISyncdMutation,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SyncdMutation;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SyncdMutation;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.SyncdMutation;

    public static toObject(
      message: proto.SyncdMutation,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace SyncdMutation {
    enum SyncdOperation {
      SET = 0,
      REMOVE = 1,
    }
  }

  interface ISyncdMutations {
    mutations?: proto.ISyncdMutation[] | null;
  }

  class SyncdMutations implements ISyncdMutations {
    constructor(properties?: proto.ISyncdMutations);

    public mutations: proto.ISyncdMutation[];

    public static create(
      properties?: proto.ISyncdMutations,
    ): proto.SyncdMutations;

    public static encode(
      message: proto.ISyncdMutations,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISyncdMutations,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SyncdMutations;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SyncdMutations;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.SyncdMutations;

    public static toObject(
      message: proto.SyncdMutations,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISyncdPatch {
    version?: proto.ISyncdVersion | null;

    mutations?: proto.ISyncdMutation[] | null;

    externalMutations?: proto.IExternalBlobReference | null;

    snapshotMac?: Uint8Array | null;

    patchMac?: Uint8Array | null;

    keyId?: proto.IKeyId | null;

    exitCode?: proto.IExitCode | null;

    deviceIndex?: number | null;

    clientDebugData?: Uint8Array | null;
  }

  class SyncdPatch implements ISyncdPatch {
    constructor(properties?: proto.ISyncdPatch);

    public version?: proto.ISyncdVersion | null;

    public mutations: proto.ISyncdMutation[];

    public externalMutations?: proto.IExternalBlobReference | null;

    public snapshotMac: Uint8Array;

    public patchMac: Uint8Array;

    public keyId?: proto.IKeyId | null;

    public exitCode?: proto.IExitCode | null;

    public deviceIndex: number;

    public clientDebugData: Uint8Array;

    public static create(properties?: proto.ISyncdPatch): proto.SyncdPatch;

    public static encode(
      message: proto.ISyncdPatch,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISyncdPatch,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SyncdPatch;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SyncdPatch;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.SyncdPatch;

    public static toObject(
      message: proto.SyncdPatch,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISyncdRecord {
    index?: proto.ISyncdIndex | null;

    value?: proto.ISyncdValue | null;

    keyId?: proto.IKeyId | null;
  }

  class SyncdRecord implements ISyncdRecord {
    constructor(properties?: proto.ISyncdRecord);

    public index?: proto.ISyncdIndex | null;

    public value?: proto.ISyncdValue | null;

    public keyId?: proto.IKeyId | null;

    public static create(properties?: proto.ISyncdRecord): proto.SyncdRecord;

    public static encode(
      message: proto.ISyncdRecord,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISyncdRecord,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SyncdRecord;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SyncdRecord;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.SyncdRecord;

    public static toObject(
      message: proto.SyncdRecord,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISyncdSnapshot {
    version?: proto.ISyncdVersion | null;

    records?: proto.ISyncdRecord[] | null;

    mac?: Uint8Array | null;

    keyId?: proto.IKeyId | null;
  }

  class SyncdSnapshot implements ISyncdSnapshot {
    constructor(properties?: proto.ISyncdSnapshot);

    public version?: proto.ISyncdVersion | null;

    public records: proto.ISyncdRecord[];

    public mac: Uint8Array;

    public keyId?: proto.IKeyId | null;

    public static create(
      properties?: proto.ISyncdSnapshot,
    ): proto.SyncdSnapshot;

    public static encode(
      message: proto.ISyncdSnapshot,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISyncdSnapshot,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SyncdSnapshot;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SyncdSnapshot;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.SyncdSnapshot;

    public static toObject(
      message: proto.SyncdSnapshot,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISyncdValue {
    blob?: Uint8Array | null;
  }

  class SyncdValue implements ISyncdValue {
    constructor(properties?: proto.ISyncdValue);

    public blob: Uint8Array;

    public static create(properties?: proto.ISyncdValue): proto.SyncdValue;

    public static encode(
      message: proto.ISyncdValue,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISyncdValue,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SyncdValue;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SyncdValue;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.SyncdValue;

    public static toObject(
      message: proto.SyncdValue,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ISyncdVersion {
    version?: number | Long | null;
  }

  class SyncdVersion implements ISyncdVersion {
    constructor(properties?: proto.ISyncdVersion);

    public version: number | Long;

    public static create(properties?: proto.ISyncdVersion): proto.SyncdVersion;

    public static encode(
      message: proto.ISyncdVersion,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ISyncdVersion,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.SyncdVersion;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.SyncdVersion;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.SyncdVersion;

    public static toObject(
      message: proto.SyncdVersion,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface ITemplateButton {
    index?: number | null;

    quickReplyButton?: proto.TemplateButton.IQuickReplyButton | null;

    urlButton?: proto.TemplateButton.IURLButton | null;

    callButton?: proto.TemplateButton.ICallButton | null;
  }

  class TemplateButton implements ITemplateButton {
    constructor(properties?: proto.ITemplateButton);

    public index: number;

    public quickReplyButton?: proto.TemplateButton.IQuickReplyButton | null;

    public urlButton?: proto.TemplateButton.IURLButton | null;

    public callButton?: proto.TemplateButton.ICallButton | null;

    public button?: "quickReplyButton" | "urlButton" | "callButton";

    public static create(
      properties?: proto.ITemplateButton,
    ): proto.TemplateButton;

    public static encode(
      message: proto.ITemplateButton,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.ITemplateButton,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.TemplateButton;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.TemplateButton;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.TemplateButton;

    public static toObject(
      message: proto.TemplateButton,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace TemplateButton {
    interface ICallButton {
      displayText?: proto.Message.IHighlyStructuredMessage | null;

      phoneNumber?: proto.Message.IHighlyStructuredMessage | null;
    }

    class CallButton implements ICallButton {
      constructor(properties?: proto.TemplateButton.ICallButton);

      public displayText?: proto.Message.IHighlyStructuredMessage | null;

      public phoneNumber?: proto.Message.IHighlyStructuredMessage | null;

      public static create(
        properties?: proto.TemplateButton.ICallButton,
      ): proto.TemplateButton.CallButton;

      public static encode(
        message: proto.TemplateButton.ICallButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.TemplateButton.ICallButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.TemplateButton.CallButton;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.TemplateButton.CallButton;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.TemplateButton.CallButton;

      public static toObject(
        message: proto.TemplateButton.CallButton,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IQuickReplyButton {
      displayText?: proto.Message.IHighlyStructuredMessage | null;

      id?: string | null;
    }

    class QuickReplyButton implements IQuickReplyButton {
      constructor(properties?: proto.TemplateButton.IQuickReplyButton);

      public displayText?: proto.Message.IHighlyStructuredMessage | null;

      public id: string;

      public static create(
        properties?: proto.TemplateButton.IQuickReplyButton,
      ): proto.TemplateButton.QuickReplyButton;

      public static encode(
        message: proto.TemplateButton.IQuickReplyButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.TemplateButton.IQuickReplyButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.TemplateButton.QuickReplyButton;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.TemplateButton.QuickReplyButton;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.TemplateButton.QuickReplyButton;

      public static toObject(
        message: proto.TemplateButton.QuickReplyButton,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }

    interface IURLButton {
      displayText?: proto.Message.IHighlyStructuredMessage | null;

      url?: proto.Message.IHighlyStructuredMessage | null;
    }

    class URLButton implements IURLButton {
      constructor(properties?: proto.TemplateButton.IURLButton);

      public displayText?: proto.Message.IHighlyStructuredMessage | null;

      public url?: proto.Message.IHighlyStructuredMessage | null;

      public static create(
        properties?: proto.TemplateButton.IURLButton,
      ): proto.TemplateButton.URLButton;

      public static encode(
        message: proto.TemplateButton.IURLButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.TemplateButton.IURLButton,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.TemplateButton.URLButton;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.TemplateButton.URLButton;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.TemplateButton.URLButton;

      public static toObject(
        message: proto.TemplateButton.URLButton,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }
  }

  interface IUserReceipt {
    userJid: string;

    receiptTimestamp?: number | Long | null;

    readTimestamp?: number | Long | null;

    playedTimestamp?: number | Long | null;

    pendingDeviceJid?: string[] | null;

    deliveredDeviceJid?: string[] | null;
  }

  class UserReceipt implements IUserReceipt {
    constructor(properties?: proto.IUserReceipt);

    public userJid: string;

    public receiptTimestamp: number | Long;

    public readTimestamp: number | Long;

    public playedTimestamp: number | Long;

    public pendingDeviceJid: string[];

    public deliveredDeviceJid: string[];

    public static create(properties?: proto.IUserReceipt): proto.UserReceipt;

    public static encode(
      message: proto.IUserReceipt,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IUserReceipt,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.UserReceipt;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.UserReceipt;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.UserReceipt;

    public static toObject(
      message: proto.UserReceipt,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IVerifiedNameCertificate {
    details?: Uint8Array | null;

    signature?: Uint8Array | null;

    serverSignature?: Uint8Array | null;
  }

  class VerifiedNameCertificate implements IVerifiedNameCertificate {
    constructor(properties?: proto.IVerifiedNameCertificate);

    public details: Uint8Array;

    public signature: Uint8Array;

    public serverSignature: Uint8Array;

    public static create(
      properties?: proto.IVerifiedNameCertificate,
    ): proto.VerifiedNameCertificate;

    public static encode(
      message: proto.IVerifiedNameCertificate,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IVerifiedNameCertificate,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.VerifiedNameCertificate;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.VerifiedNameCertificate;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.VerifiedNameCertificate;

    public static toObject(
      message: proto.VerifiedNameCertificate,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace VerifiedNameCertificate {
    interface IDetails {
      serial?: number | Long | null;

      issuer?: string | null;

      verifiedName?: string | null;

      localizedNames?: proto.ILocalizedName[] | null;

      issueTime?: number | Long | null;
    }

    class Details implements IDetails {
      constructor(properties?: proto.VerifiedNameCertificate.IDetails);

      public serial: number | Long;

      public issuer: string;

      public verifiedName: string;

      public localizedNames: proto.ILocalizedName[];

      public issueTime: number | Long;

      public static create(
        properties?: proto.VerifiedNameCertificate.IDetails,
      ): proto.VerifiedNameCertificate.Details;

      public static encode(
        message: proto.VerifiedNameCertificate.IDetails,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static encodeDelimited(
        message: proto.VerifiedNameCertificate.IDetails,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): proto.VerifiedNameCertificate.Details;

      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): proto.VerifiedNameCertificate.Details;

      public static verify(message: { [k: string]: any }): string | null;

      public static fromObject(object: {
        [k: string]: any;
      }): proto.VerifiedNameCertificate.Details;

      public static toObject(
        message: proto.VerifiedNameCertificate.Details,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      public toJSON(): { [k: string]: any };
    }
  }

  interface IWallpaperSettings {
    filename?: string | null;

    opacity?: number | null;
  }

  class WallpaperSettings implements IWallpaperSettings {
    constructor(properties?: proto.IWallpaperSettings);

    public filename: string;

    public opacity: number;

    public static create(
      properties?: proto.IWallpaperSettings,
    ): proto.WallpaperSettings;

    public static encode(
      message: proto.IWallpaperSettings,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IWallpaperSettings,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.WallpaperSettings;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.WallpaperSettings;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.WallpaperSettings;

    public static toObject(
      message: proto.WallpaperSettings,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  interface IWebFeatures {
    labelsDisplay?: proto.WebFeatures.Flag | null;

    voipIndividualOutgoing?: proto.WebFeatures.Flag | null;

    groupsV3?: proto.WebFeatures.Flag | null;

    groupsV3Create?: proto.WebFeatures.Flag | null;

    changeNumberV2?: proto.WebFeatures.Flag | null;

    queryStatusV3Thumbnail?: proto.WebFeatures.Flag | null;

    liveLocations?: proto.WebFeatures.Flag | null;

    queryVname?: proto.WebFeatures.Flag | null;

    voipIndividualIncoming?: proto.WebFeatures.Flag | null;

    quickRepliesQuery?: proto.WebFeatures.Flag | null;

    payments?: proto.WebFeatures.Flag | null;

    stickerPackQuery?: proto.WebFeatures.Flag | null;

    liveLocationsFinal?: proto.WebFeatures.Flag | null;

    labelsEdit?: proto.WebFeatures.Flag | null;

    mediaUpload?: proto.WebFeatures.Flag | null;

    mediaUploadRichQuickReplies?: proto.WebFeatures.Flag | null;

    vnameV2?: proto.WebFeatures.Flag | null;

    videoPlaybackUrl?: proto.WebFeatures.Flag | null;

    statusRanking?: proto.WebFeatures.Flag | null;

    voipIndividualVideo?: proto.WebFeatures.Flag | null;

    thirdPartyStickers?: proto.WebFeatures.Flag | null;

    frequentlyForwardedSetting?: proto.WebFeatures.Flag | null;

    groupsV4JoinPermission?: proto.WebFeatures.Flag | null;

    recentStickers?: proto.WebFeatures.Flag | null;

    catalog?: proto.WebFeatures.Flag | null;

    starredStickers?: proto.WebFeatures.Flag | null;

    voipGroupCall?: proto.WebFeatures.Flag | null;

    templateMessage?: proto.WebFeatures.Flag | null;

    templateMessageInteractivity?: proto.WebFeatures.Flag | null;

    ephemeralMessages?: proto.WebFeatures.Flag | null;

    e2ENotificationSync?: proto.WebFeatures.Flag | null;

    recentStickersV2?: proto.WebFeatures.Flag | null;

    recentStickersV3?: proto.WebFeatures.Flag | null;

    userNotice?: proto.WebFeatures.Flag | null;

    support?: proto.WebFeatures.Flag | null;

    groupUiiCleanup?: proto.WebFeatures.Flag | null;

    groupDogfoodingInternalOnly?: proto.WebFeatures.Flag | null;

    settingsSync?: proto.WebFeatures.Flag | null;

    archiveV2?: proto.WebFeatures.Flag | null;

    ephemeralAllowGroupMembers?: proto.WebFeatures.Flag | null;

    ephemeral24HDuration?: proto.WebFeatures.Flag | null;

    mdForceUpgrade?: proto.WebFeatures.Flag | null;

    disappearingMode?: proto.WebFeatures.Flag | null;

    externalMdOptInAvailable?: proto.WebFeatures.Flag | null;

    noDeleteMessageTimeLimit?: proto.WebFeatures.Flag | null;
  }

  class WebFeatures implements IWebFeatures {
    constructor(properties?: proto.IWebFeatures);

    public labelsDisplay: proto.WebFeatures.Flag;

    public voipIndividualOutgoing: proto.WebFeatures.Flag;

    public groupsV3: proto.WebFeatures.Flag;

    public groupsV3Create: proto.WebFeatures.Flag;

    public changeNumberV2: proto.WebFeatures.Flag;

    public queryStatusV3Thumbnail: proto.WebFeatures.Flag;

    public liveLocations: proto.WebFeatures.Flag;

    public queryVname: proto.WebFeatures.Flag;

    public voipIndividualIncoming: proto.WebFeatures.Flag;

    public quickRepliesQuery: proto.WebFeatures.Flag;

    public payments: proto.WebFeatures.Flag;

    public stickerPackQuery: proto.WebFeatures.Flag;

    public liveLocationsFinal: proto.WebFeatures.Flag;

    public labelsEdit: proto.WebFeatures.Flag;

    public mediaUpload: proto.WebFeatures.Flag;

    public mediaUploadRichQuickReplies: proto.WebFeatures.Flag;

    public vnameV2: proto.WebFeatures.Flag;

    public videoPlaybackUrl: proto.WebFeatures.Flag;

    public statusRanking: proto.WebFeatures.Flag;

    public voipIndividualVideo: proto.WebFeatures.Flag;

    public thirdPartyStickers: proto.WebFeatures.Flag;

    public frequentlyForwardedSetting: proto.WebFeatures.Flag;

    public groupsV4JoinPermission: proto.WebFeatures.Flag;

    public recentStickers: proto.WebFeatures.Flag;

    public catalog: proto.WebFeatures.Flag;

    public starredStickers: proto.WebFeatures.Flag;

    public voipGroupCall: proto.WebFeatures.Flag;

    public templateMessage: proto.WebFeatures.Flag;

    public templateMessageInteractivity: proto.WebFeatures.Flag;

    public ephemeralMessages: proto.WebFeatures.Flag;

    public e2ENotificationSync: proto.WebFeatures.Flag;

    public recentStickersV2: proto.WebFeatures.Flag;

    public recentStickersV3: proto.WebFeatures.Flag;

    public userNotice: proto.WebFeatures.Flag;

    public support: proto.WebFeatures.Flag;

    public groupUiiCleanup: proto.WebFeatures.Flag;

    public groupDogfoodingInternalOnly: proto.WebFeatures.Flag;

    public settingsSync: proto.WebFeatures.Flag;

    public archiveV2: proto.WebFeatures.Flag;

    public ephemeralAllowGroupMembers: proto.WebFeatures.Flag;

    public ephemeral24HDuration: proto.WebFeatures.Flag;

    public mdForceUpgrade: proto.WebFeatures.Flag;

    public disappearingMode: proto.WebFeatures.Flag;

    public externalMdOptInAvailable: proto.WebFeatures.Flag;

    public noDeleteMessageTimeLimit: proto.WebFeatures.Flag;

    public static create(properties?: proto.IWebFeatures): proto.WebFeatures;

    public static encode(
      message: proto.IWebFeatures,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IWebFeatures,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.WebFeatures;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.WebFeatures;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: { [k: string]: any }): proto.WebFeatures;

    public static toObject(
      message: proto.WebFeatures,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace WebFeatures {
    enum Flag {
      NOT_STARTED = 0,
      FORCE_UPGRADE = 1,
      DEVELOPMENT = 2,
      PRODUCTION = 3,
    }
  }

  interface IWebMessageInfo {
    key: proto.IMessageKey;

    message?: proto.IMessage | null;

    messageTimestamp?: number | Long | null;

    status?: proto.WebMessageInfo.Status | null;

    participant?: string | null;

    messageC2STimestamp?: number | Long | null;

    ignore?: boolean | null;

    starred?: boolean | null;

    broadcast?: boolean | null;

    pushName?: string | null;

    mediaCiphertextSha256?: Uint8Array | null;

    multicast?: boolean | null;

    urlText?: boolean | null;

    urlNumber?: boolean | null;

    messageStubType?: proto.WebMessageInfo.StubType | null;

    clearMedia?: boolean | null;

    messageStubParameters?: string[] | null;

    duration?: number | null;

    labels?: string[] | null;

    paymentInfo?: proto.IPaymentInfo | null;

    finalLiveLocation?: proto.Message.ILiveLocationMessage | null;

    quotedPaymentInfo?: proto.IPaymentInfo | null;

    ephemeralStartTimestamp?: number | Long | null;

    ephemeralDuration?: number | null;

    ephemeralOffToOn?: boolean | null;

    ephemeralOutOfSync?: boolean | null;

    bizPrivacyStatus?: proto.WebMessageInfo.BizPrivacyStatus | null;

    verifiedBizName?: string | null;

    mediaData?: proto.IMediaData | null;

    photoChange?: proto.IPhotoChange | null;

    userReceipt?: proto.IUserReceipt[] | null;

    reactions?: proto.IReaction[] | null;

    quotedStickerData?: proto.IMediaData | null;

    futureproofData?: Uint8Array | null;

    statusPsa?: proto.IStatusPSA | null;

    pollUpdates?: proto.IPollUpdate[] | null;

    pollAdditionalMetadata?: proto.IPollAdditionalMetadata | null;

    agentId?: string | null;

    statusAlreadyViewed?: boolean | null;

    messageSecret?: Uint8Array | null;

    keepInChat?: proto.IKeepInChat | null;

    originalSelfAuthorUserJidString?: string | null;

    revokeMessageTimestamp?: number | Long | null;

    pinInChat?: proto.IPinInChat | null;

    premiumMessageInfo?: proto.IPremiumMessageInfo | null;

    is1PBizBotMessage?: boolean | null;

    isGroupHistoryMessage?: boolean | null;

    botMessageInvokerJid?: string | null;

    commentMetadata?: proto.ICommentMetadata | null;

    eventResponses?: proto.IEventResponse[] | null;

    reportingTokenInfo?: proto.IReportingTokenInfo | null;

    newsletterServerId?: number | Long | null;
  }

  class WebMessageInfo implements IWebMessageInfo {
    constructor(properties?: proto.IWebMessageInfo);

    public key: proto.IMessageKey;

    public message?: proto.IMessage | null;

    public messageTimestamp: number | Long;

    public status: proto.WebMessageInfo.Status;

    public participant: string;

    public messageC2STimestamp: number | Long;

    public ignore: boolean;

    public starred: boolean;

    public broadcast: boolean;

    public pushName: string;

    public mediaCiphertextSha256: Uint8Array;

    public multicast: boolean;

    public urlText: boolean;

    public urlNumber: boolean;

    public messageStubType: proto.WebMessageInfo.StubType;

    public clearMedia: boolean;

    public messageStubParameters: string[];

    public duration: number;

    public labels: string[];

    public paymentInfo?: proto.IPaymentInfo | null;

    public finalLiveLocation?: proto.Message.ILiveLocationMessage | null;

    public quotedPaymentInfo?: proto.IPaymentInfo | null;

    public ephemeralStartTimestamp: number | Long;

    public ephemeralDuration: number;

    public ephemeralOffToOn: boolean;

    public ephemeralOutOfSync: boolean;

    public bizPrivacyStatus: proto.WebMessageInfo.BizPrivacyStatus;

    public verifiedBizName: string;

    public mediaData?: proto.IMediaData | null;

    public photoChange?: proto.IPhotoChange | null;

    public userReceipt: proto.IUserReceipt[];

    public reactions: proto.IReaction[];

    public quotedStickerData?: proto.IMediaData | null;

    public futureproofData: Uint8Array;

    public statusPsa?: proto.IStatusPSA | null;

    public pollUpdates: proto.IPollUpdate[];

    public pollAdditionalMetadata?: proto.IPollAdditionalMetadata | null;

    public agentId: string;

    public statusAlreadyViewed: boolean;

    public messageSecret: Uint8Array;

    public keepInChat?: proto.IKeepInChat | null;

    public originalSelfAuthorUserJidString: string;

    public revokeMessageTimestamp: number | Long;

    public pinInChat?: proto.IPinInChat | null;

    public premiumMessageInfo?: proto.IPremiumMessageInfo | null;

    public is1PBizBotMessage: boolean;

    public isGroupHistoryMessage: boolean;

    public botMessageInvokerJid: string;

    public commentMetadata?: proto.ICommentMetadata | null;

    public eventResponses: proto.IEventResponse[];

    public reportingTokenInfo?: proto.IReportingTokenInfo | null;

    public newsletterServerId: number | Long;

    public static create(
      properties?: proto.IWebMessageInfo,
    ): proto.WebMessageInfo;

    public static encode(
      message: proto.IWebMessageInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IWebMessageInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.WebMessageInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.WebMessageInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.WebMessageInfo;

    public static toObject(
      message: proto.WebMessageInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }

  namespace WebMessageInfo {
    enum BizPrivacyStatus {
      E2EE = 0,
      FB = 2,
      BSP = 1,
      BSP_AND_FB = 3,
    }

    enum Status {
      ERROR = 0,
      PENDING = 1,
      SERVER_ACK = 2,
      DELIVERY_ACK = 3,
      READ = 4,
      PLAYED = 5,
    }

    enum StubType {
      UNKNOWN = 0,
      REVOKE = 1,
      CIPHERTEXT = 2,
      FUTUREPROOF = 3,
      NON_VERIFIED_TRANSITION = 4,
      UNVERIFIED_TRANSITION = 5,
      VERIFIED_TRANSITION = 6,
      VERIFIED_LOW_UNKNOWN = 7,
      VERIFIED_HIGH = 8,
      VERIFIED_INITIAL_UNKNOWN = 9,
      VERIFIED_INITIAL_LOW = 10,
      VERIFIED_INITIAL_HIGH = 11,
      VERIFIED_TRANSITION_ANY_TO_NONE = 12,
      VERIFIED_TRANSITION_ANY_TO_HIGH = 13,
      VERIFIED_TRANSITION_HIGH_TO_LOW = 14,
      VERIFIED_TRANSITION_HIGH_TO_UNKNOWN = 15,
      VERIFIED_TRANSITION_UNKNOWN_TO_LOW = 16,
      VERIFIED_TRANSITION_LOW_TO_UNKNOWN = 17,
      VERIFIED_TRANSITION_NONE_TO_LOW = 18,
      VERIFIED_TRANSITION_NONE_TO_UNKNOWN = 19,
      GROUP_CREATE = 20,
      GROUP_CHANGE_SUBJECT = 21,
      GROUP_CHANGE_ICON = 22,
      GROUP_CHANGE_INVITE_LINK = 23,
      GROUP_CHANGE_DESCRIPTION = 24,
      GROUP_CHANGE_RESTRICT = 25,
      GROUP_CHANGE_ANNOUNCE = 26,
      GROUP_PARTICIPANT_ADD = 27,
      GROUP_PARTICIPANT_REMOVE = 28,
      GROUP_PARTICIPANT_PROMOTE = 29,
      GROUP_PARTICIPANT_DEMOTE = 30,
      GROUP_PARTICIPANT_INVITE = 31,
      GROUP_PARTICIPANT_LEAVE = 32,
      GROUP_PARTICIPANT_CHANGE_NUMBER = 33,
      BROADCAST_CREATE = 34,
      BROADCAST_ADD = 35,
      BROADCAST_REMOVE = 36,
      GENERIC_NOTIFICATION = 37,
      E2E_IDENTITY_CHANGED = 38,
      E2E_ENCRYPTED = 39,
      CALL_MISSED_VOICE = 40,
      CALL_MISSED_VIDEO = 41,
      INDIVIDUAL_CHANGE_NUMBER = 42,
      GROUP_DELETE = 43,
      GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE = 44,
      CALL_MISSED_GROUP_VOICE = 45,
      CALL_MISSED_GROUP_VIDEO = 46,
      PAYMENT_CIPHERTEXT = 47,
      PAYMENT_FUTUREPROOF = 48,
      PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED = 49,
      PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED = 50,
      PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED = 51,
      PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP = 52,
      PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP = 53,
      PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER = 54,
      PAYMENT_ACTION_SEND_PAYMENT_REMINDER = 55,
      PAYMENT_ACTION_SEND_PAYMENT_INVITATION = 56,
      PAYMENT_ACTION_REQUEST_DECLINED = 57,
      PAYMENT_ACTION_REQUEST_EXPIRED = 58,
      PAYMENT_ACTION_REQUEST_CANCELLED = 59,
      BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM = 60,
      BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP = 61,
      BIZ_INTRO_TOP = 62,
      BIZ_INTRO_BOTTOM = 63,
      BIZ_NAME_CHANGE = 64,
      BIZ_MOVE_TO_CONSUMER_APP = 65,
      BIZ_TWO_TIER_MIGRATION_TOP = 66,
      BIZ_TWO_TIER_MIGRATION_BOTTOM = 67,
      OVERSIZED = 68,
      GROUP_CHANGE_NO_FREQUENTLY_FORWARDED = 69,
      GROUP_V4_ADD_INVITE_SENT = 70,
      GROUP_PARTICIPANT_ADD_REQUEST_JOIN = 71,
      CHANGE_EPHEMERAL_SETTING = 72,
      E2E_DEVICE_CHANGED = 73,
      VIEWED_ONCE = 74,
      E2E_ENCRYPTED_NOW = 75,
      BLUE_MSG_BSP_FB_TO_BSP_PREMISE = 76,
      BLUE_MSG_BSP_FB_TO_SELF_FB = 77,
      BLUE_MSG_BSP_FB_TO_SELF_PREMISE = 78,
      BLUE_MSG_BSP_FB_UNVERIFIED = 79,
      BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 80,
      BLUE_MSG_BSP_FB_VERIFIED = 81,
      BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 82,
      BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE = 83,
      BLUE_MSG_BSP_PREMISE_UNVERIFIED = 84,
      BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 85,
      BLUE_MSG_BSP_PREMISE_VERIFIED = 86,
      BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 87,
      BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED = 88,
      BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED = 89,
      BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED = 90,
      BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED = 91,
      BLUE_MSG_SELF_FB_TO_BSP_PREMISE = 92,
      BLUE_MSG_SELF_FB_TO_SELF_PREMISE = 93,
      BLUE_MSG_SELF_FB_UNVERIFIED = 94,
      BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 95,
      BLUE_MSG_SELF_FB_VERIFIED = 96,
      BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 97,
      BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE = 98,
      BLUE_MSG_SELF_PREMISE_UNVERIFIED = 99,
      BLUE_MSG_SELF_PREMISE_VERIFIED = 100,
      BLUE_MSG_TO_BSP_FB = 101,
      BLUE_MSG_TO_CONSUMER = 102,
      BLUE_MSG_TO_SELF_FB = 103,
      BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED = 104,
      BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 105,
      BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED = 106,
      BLUE_MSG_UNVERIFIED_TO_VERIFIED = 107,
      BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED = 108,
      BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 109,
      BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED = 110,
      BLUE_MSG_VERIFIED_TO_UNVERIFIED = 111,
      BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 112,
      BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED = 113,
      BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 114,
      BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED = 115,
      BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 116,
      BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 117,
      E2E_IDENTITY_UNAVAILABLE = 118,
      GROUP_CREATING = 119,
      GROUP_CREATE_FAILED = 120,
      GROUP_BOUNCED = 121,
      BLOCK_CONTACT = 122,
      EPHEMERAL_SETTING_NOT_APPLIED = 123,
      SYNC_FAILED = 124,
      SYNCING = 125,
      BIZ_PRIVACY_MODE_INIT_FB = 126,
      BIZ_PRIVACY_MODE_INIT_BSP = 127,
      BIZ_PRIVACY_MODE_TO_FB = 128,
      BIZ_PRIVACY_MODE_TO_BSP = 129,
      DISAPPEARING_MODE = 130,
      E2E_DEVICE_FETCH_FAILED = 131,
      ADMIN_REVOKE = 132,
      GROUP_INVITE_LINK_GROWTH_LOCKED = 133,
      COMMUNITY_LINK_PARENT_GROUP = 134,
      COMMUNITY_LINK_SIBLING_GROUP = 135,
      COMMUNITY_LINK_SUB_GROUP = 136,
      COMMUNITY_UNLINK_PARENT_GROUP = 137,
      COMMUNITY_UNLINK_SIBLING_GROUP = 138,
      COMMUNITY_UNLINK_SUB_GROUP = 139,
      GROUP_PARTICIPANT_ACCEPT = 140,
      GROUP_PARTICIPANT_LINKED_GROUP_JOIN = 141,
      COMMUNITY_CREATE = 142,
      EPHEMERAL_KEEP_IN_CHAT = 143,
      GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST = 144,
      GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE = 145,
      INTEGRITY_UNLINK_PARENT_GROUP = 146,
      COMMUNITY_PARTICIPANT_PROMOTE = 147,
      COMMUNITY_PARTICIPANT_DEMOTE = 148,
      COMMUNITY_PARENT_GROUP_DELETED = 149,
      COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL = 150,
      GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP = 151,
      MASKED_THREAD_CREATED = 152,
      MASKED_THREAD_UNMASKED = 153,
      BIZ_CHAT_ASSIGNMENT = 154,
      CHAT_PSA = 155,
      CHAT_POLL_CREATION_MESSAGE = 156,
      CAG_MASKED_THREAD_CREATED = 157,
      COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED = 158,
      CAG_INVITE_AUTO_ADD = 159,
      BIZ_CHAT_ASSIGNMENT_UNASSIGN = 160,
      CAG_INVITE_AUTO_JOINED = 161,
      SCHEDULED_CALL_START_MESSAGE = 162,
      COMMUNITY_INVITE_RICH = 163,
      COMMUNITY_INVITE_AUTO_ADD_RICH = 164,
      SUB_GROUP_INVITE_RICH = 165,
      SUB_GROUP_PARTICIPANT_ADD_RICH = 166,
      COMMUNITY_LINK_PARENT_GROUP_RICH = 167,
      COMMUNITY_PARTICIPANT_ADD_RICH = 168,
      SILENCED_UNKNOWN_CALLER_AUDIO = 169,
      SILENCED_UNKNOWN_CALLER_VIDEO = 170,
      GROUP_MEMBER_ADD_MODE = 171,
      GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD = 172,
      COMMUNITY_CHANGE_DESCRIPTION = 173,
      SENDER_INVITE = 174,
      RECEIVER_INVITE = 175,
      COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS = 176,
      PINNED_MESSAGE_IN_CHAT = 177,
      PAYMENT_INVITE_SETUP_INVITER = 178,
      PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY = 179,
      PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE = 180,
      LINKED_GROUP_CALL_START = 181,
      REPORT_TO_ADMIN_ENABLED_STATUS = 182,
      EMPTY_SUBGROUP_CREATE = 183,
      SCHEDULED_CALL_CANCEL = 184,
      SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH = 185,
      GROUP_CHANGE_RECENT_HISTORY_SHARING = 186,
      PAID_MESSAGE_SERVER_CAMPAIGN_ID = 187,
      GENERAL_CHAT_CREATE = 188,
      GENERAL_CHAT_ADD = 189,
      GENERAL_CHAT_AUTO_ADD_DISABLED = 190,
      SUGGESTED_SUBGROUP_ANNOUNCE = 191,
      BIZ_BOT_1P_MESSAGING_ENABLED = 192,
      CHANGE_USERNAME = 193,
      BIZ_COEX_PRIVACY_INIT_SELF = 194,
      BIZ_COEX_PRIVACY_TRANSITION_SELF = 195,
      SUPPORT_AI_EDUCATION = 196,
      BIZ_BOT_3P_MESSAGING_ENABLED = 197,
      REMINDER_SETUP_MESSAGE = 198,
      REMINDER_SENT_MESSAGE = 199,
      REMINDER_CANCEL_MESSAGE = 200,
    }
  }

  interface IWebNotificationsInfo {
    timestamp?: number | Long | null;

    unreadChats?: number | null;

    notifyMessageCount?: number | null;

    notifyMessages?: proto.IWebMessageInfo[] | null;
  }

  class WebNotificationsInfo implements IWebNotificationsInfo {
    constructor(properties?: proto.IWebNotificationsInfo);

    public timestamp: number | Long;

    public unreadChats: number;

    public notifyMessageCount: number;

    public notifyMessages: proto.IWebMessageInfo[];

    public static create(
      properties?: proto.IWebNotificationsInfo,
    ): proto.WebNotificationsInfo;

    public static encode(
      message: proto.IWebNotificationsInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static encodeDelimited(
      message: proto.IWebNotificationsInfo,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): proto.WebNotificationsInfo;

    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): proto.WebNotificationsInfo;

    public static verify(message: { [k: string]: any }): string | null;

    public static fromObject(object: {
      [k: string]: any;
    }): proto.WebNotificationsInfo;

    public static toObject(
      message: proto.WebNotificationsInfo,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    public toJSON(): { [k: string]: any };
  }
}
