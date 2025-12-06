import type { Logger } from "pino";
import type {
  AuthenticationCreds,
  CacheStore,
  SignalKeyStore,
  SignalKeyStoreWithTransaction,
  TransactionCapabilityOptions,
} from "../Types";
export declare function makeCacheableSignalKeyStore(
  store: SignalKeyStore,
  logger: Logger,
  _cache?: CacheStore,
): SignalKeyStore;
export declare const addTransactionCapability: (
  state: SignalKeyStore,
  logger: Logger,
  { maxCommitRetries, delayBetweenTriesMs }: TransactionCapabilityOptions,
) => SignalKeyStoreWithTransaction;
export declare const initAuthCreds: () => AuthenticationCreds;
