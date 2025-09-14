import type { TmemberId } from "./member-derived";

export type Tbackground = 'bg-nayeon' | 'bg-jeongyeon' | 'bg-momo' | 'bg-sana' | 'bg-jihyo' | 'bg-mina' | 'bg-dahyun' | 'bg-chaeyoung' | 'bg-tzuyu';
export type Toutline = 'outline-nayeon' | 'outline-jeongyeon' | 'outline-momo' | 'outline-sana' | 'outline-jihyo' | 'outline-mina' | 'outline-dahyun' | 'outline-chaeyoung' | 'outline-tzuyu';
export type Thover = 'hover:bg-nayeon' | 'hover:bg-jeongyeon' | 'hover:bg-momo' | 'hover:bg-sana' | 'hover:bg-jihyo' | 'hover:bg-mina' | 'hover:bg-dahyun' | 'hover:bg-chaeyoung' | 'hover:bg-tzuyu';
export type TmemberColors = Record<TmemberId, { bg: Tbackground; outline: Toutline; hover: Thover }>
