import { Logger } from "pino";
import { BaileysEventEmitter, BaileysEventMap } from "../Types";
type BaileysEventData = Partial<BaileysEventMap>;
type BaileysBufferableEventEmitter = BaileysEventEmitter & {
  process(
    handler: (events: BaileysEventData) => void | Promise<void>,
  ): () => void;
  buffer(): void;
  createBufferedFunction<A extends any[], T>(
    work: (...args: A) => Promise<T>,
  ): (...args: A) => Promise<T>;
  flush(force?: boolean): boolean;
  isBuffering(): boolean;
};
export declare const makeEventBuffer: (
  logger: Logger,
) => BaileysBufferableEventEmitter;
export {};
