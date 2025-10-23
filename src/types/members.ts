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

export type TNationality = "South Korean" | "Japanese" | "Taiwanese";

export type TPosition =
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

export type TMemberId =
  | "nayeon"
  | "jeongyeon"
  | "momo"
  | "sana"
  | "jihyo"
  | "mina"
  | "dahyun"
  | "chaeyoung"
  | "tzuyu";

export type TFullName =
  | "Im Nayeon"
  | "Yoo Jeong-yeon"
  | "Hirai Momo"
  | "Minatozaki Sana"
  | "Park Ji-hyo"
  | "Myoui Mina"
  | "Kim Da-hyun"
  | "Son Chae-young"
  | "Chou Tzuyu";
export type TEmoji =
  | "🐰"
  | "🐶"
  | "🍑"
  | "🐭"
  | "🦄"
  | "🐧"
  | "💛"
  | "🍓"
  | "🦌";
export type TMemberName = Capitalize<TMemberId>;

export type TMember = {
  id: TMemberId;
  name: TMemberName;
  fullName: TFullName;
  emoji: TEmoji;
  color: string;
  social: TSocial[];
  nationality: TNationality;
  birthday: Date;
  positions: TPosition[];
  songs: TSong[];
  funFacts: string[];
  image: ImageMetadata;
  fullImage: ImageMetadata;
};
