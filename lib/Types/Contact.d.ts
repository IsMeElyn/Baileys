export interface Contact {
  id: string;
  lid?: string;
  name?: string;
  notify?: string;
  verifiedName?: string;
  imgUrl?: string | null | "changed";
  status?: string;
}
