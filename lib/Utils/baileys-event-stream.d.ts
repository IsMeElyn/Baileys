import type { BaileysEventEmitter } from "../Types";
export declare const captureEventStream: (
  ev: BaileysEventEmitter,
  filename: string,
) => void;
export declare const readAndEmitEventStream: (
  filename: string,
  delayIntervalMs?: number,
) => {
  ev: BaileysEventEmitter;
  task: Promise<void>;
};
