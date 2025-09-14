export type TSocial = {
  platform: string;
  username: string;
  url: string;
};

export type TMusicLink = {
  platform: string;
  url: string;
};

export type TSong = {
  title: string;
  links: TMusicLink[];
};

export type Tnationality = "South Korean" | "Japanese" | "Taiwanese";

export type Tposition =
  | "Main Vocalist"
  | "Main Dancer"
  | "Visual"
  | "Center"
  | "Group Face"
  | "Sub-Vocalist"
  | "Sub-Rapper"
  | "Leader"
  | "Main-Rapper"
  | "Maknae";

export type TMemberBase = {
  id: string;
  name: string;
  fullName: string;
  emoji: string;
  color: string;
  social: TSocial[];
  nationality: Tnationality;
  birthday: Date;
  positions: Tposition[];
  songs: TSong[];
  funFacts: string[];
};

export type TMember = TMemberBase;
export type { TmemberId, Tname, TfullName, Temoji, TMemberById, TMemberMap, TMemberLookup } from "./member-derived";
