import type { TMember, TMemberId } from '../types/members'
import { MEMBERS_DATA, Unit } from './members-data'
import nayeon from '../assets/members/cards/nayeon.webp'
import jeongyeon from '../assets/members/cards/jeongyeon.webp'
import momo from '../assets/members/cards/momo.webp'
import sana from '../assets/members/cards/sana.webp'
import jihyo from '../assets/members/cards/jihyo.webp'
import mina from '../assets/members/cards/mina.webp'
import dahyun from '../assets/members/cards/dahyun.webp'
import chaeyoung from '../assets/members/cards/chaeyoung.webp'
import tzuyu from '../assets/members/cards/tzuyu.webp'
import nayeonFull from '../assets/members/full/nayeon-full.webp'
import jeongyeonFull from '../assets/members/full/jeongyeon-full.webp'
import momoFull from '../assets/members/full/momo-full.webp'
import sanaFull from '../assets/members/full/sana-full.webp'
import jihyoFull from '../assets/members/full/jihyo-full.webp'
import minaFull from '../assets/members/full/mina-full.webp'
import dahyunFull from '../assets/members/full/dahyun-full.webp'
import chaeyoungFull from '../assets/members/full/chaeyoung-full.webp'
import tzuyuFull from '../assets/members/full/tzuyu-full.webp'

export { Unit }

const MEMBER_IMAGES: Record<TMemberId, { image: ImageMetadata; fullImage: ImageMetadata }> = {
  nayeon: { image: nayeon, fullImage: nayeonFull },
  jeongyeon: { image: jeongyeon, fullImage: jeongyeonFull },
  momo: { image: momo, fullImage: momoFull },
  sana: { image: sana, fullImage: sanaFull },
  jihyo: { image: jihyo, fullImage: jihyoFull },
  mina: { image: mina, fullImage: minaFull },
  dahyun: { image: dahyun, fullImage: dahyunFull },
  chaeyoung: { image: chaeyoung, fullImage: chaeyoungFull },
  tzuyu: { image: tzuyu, fullImage: tzuyuFull },
}

export const MEMBERS: readonly TMember[] = MEMBERS_DATA.map((data) => ({
  ...data,
  ...MEMBER_IMAGES[data.id],
}))
