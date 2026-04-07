import type { TMemberId } from './members'

export type TUnit = TMemberId | 'twice' | 'misamo'

export type TType = 'mini-album' | 'full-album' | 'single' | 'repackage' | 'digital' | 'ost'

export type TMarket = 'korean' | 'japanese' | 'english'

export type TSong = {
  title: string
  link?: string
}

export type TDiscographyData = {
  id: string
  name: string
  unit: TUnit[]
  releaseDate: Date
  types: TType[]
  market: TMarket
  songs: TSong[]
}

export type TDiscography = TDiscographyData & {
  image: ImageMetadata
}
