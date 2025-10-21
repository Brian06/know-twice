import type { TmemberName } from "./members";

type TUnit = TmemberName | "twice" | "misamo";

type TType =
  | "mini-album"
  | "full-album"
  | "single"
  | "repackage"
  | "digital"
  | "ost";

type TMarket = "korean" | "japanese" | "english";

export type TSong = {
  title: string;
  link?: string;
};

export type TDiscography = {
  name: string;
  image: ImageMetadata;
  unit: TUnit[];
  releaseDate: Date;
  types: TType[];
  market: TMarket;
  songs: TSong[];
};
