import { AxiosRequestConfig } from "axios";
import { Logger } from "pino";
import { WAMediaUploadFunction, WAUrlInfo } from "../Types";
export type URLGenerationOptions = {
  thumbnailWidth: number;
  fetchOpts: {
    timeout: number;
    proxyUrl?: string;
    headers?: AxiosRequestConfig<{}>["headers"];
  };
  uploadImage?: WAMediaUploadFunction;
  logger?: Logger;
};
export declare const getUrlInfo: (
  text: string,
  opts?: URLGenerationOptions,
) => Promise<WAUrlInfo | undefined>;
