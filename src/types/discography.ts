import type { TMemberId } from './members';

export type TUnit = TMemberId | 'twice' | 'misamo';

export type TType =
  | 'mini-album'
  | 'full-album'
  | 'single'
  | 'repackage'
  | 'digital'
  | 'ost';

export type TMarket = 'korean' | 'japanese' | 'english';

export type TSong = {
  title: string;
  link?: string;
};

export type TDiscography = {
  id: string;
  name: string;
  image: ImageMetadata;
  unit: TUnit[];
  releaseDate: Date;
  types: TType[];
  market: TMarket;
  songs: TSong[];
};
