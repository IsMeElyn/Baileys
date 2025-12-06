import { AuthenticationState } from "../Types";
export declare const useMultiFileAuthState: (folder: string) => Promise<{
  state: AuthenticationState;
  saveCreds: () => Promise<void>;
}>;
