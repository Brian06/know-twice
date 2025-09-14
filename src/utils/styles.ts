import type { TmemberId } from "../types/member-derived";
import type { Tbackground, TmemberColors, Toutline, Thover } from "../types/styles";

const MEMBER_COLORS: TmemberColors = {
  nayeon: { bg: 'bg-nayeon', outline: 'outline-nayeon', hover: 'hover:bg-nayeon' },
  jeongyeon: { bg: 'bg-jeongyeon', outline: 'outline-jeongyeon', hover: 'hover:bg-jeongyeon' },
  momo: { bg: 'bg-momo', outline: 'outline-momo', hover: 'hover:bg-momo' },
  sana: { bg: 'bg-sana', outline: 'outline-sana', hover: 'hover:bg-sana' },
  jihyo: { bg: 'bg-jihyo', outline: 'outline-jihyo', hover: 'hover:bg-jihyo' },
  mina: { bg: 'bg-mina', outline: 'outline-mina', hover: 'hover:bg-mina' },
  dahyun: { bg: 'bg-dahyun', outline: 'outline-dahyun', hover: 'hover:bg-dahyun' },
  chaeyoung: { bg: 'bg-chaeyoung', outline: 'outline-chaeyoung', hover: 'hover:bg-chaeyoung' },
  tzuyu: { bg: 'bg-tzuyu', outline: 'outline-tzuyu', hover: 'hover:bg-tzuyu' },
};

export const getMemberColors = (memberId: TmemberId): TmemberColors[TmemberId] => {
  const colors = MEMBER_COLORS[memberId];
  if (!colors) {
    return { bg: '', outline: '', hover: '' } as unknown as TmemberColors[TmemberId];
  }
  return colors;
};

export const getBackgroundClass = (memberId: TmemberId): Tbackground => {
  return getMemberColors(memberId).bg as Tbackground;
};

export const getOutlineClass = (memberId: TmemberId): Toutline => {
  return getMemberColors(memberId).outline as Toutline;
};

export const getHoverClass = (memberId: TmemberId): Thover => {
  return getMemberColors(memberId).hover as Thover;
};

export const generateMemberClass = (memberId: TmemberId, type: 'bg' | 'outline' | 'hover') => {
  if (!MEMBER_COLORS[memberId]) {
    return '' as Tbackground | Toutline | Thover;
  }
  
  return getMemberColors(memberId)[type] || '' as Tbackground | Toutline | Thover;
};
