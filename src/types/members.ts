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

export type Tname =
  | "Nayeon"
  | "Jeongyeon"
  | "Momo"
  | "Sana"
  | "Jihyo"
  | "Mina"
  | "Dahyun"
  | "Chaeyoung"
  | "Tzuyu";

export type TfullName =
  | "Im Nayeon"
  | "Yoo Jeong-yeon"
  | "Hirai Momo"
  | "Minatozaki Sana"
  | "Park Ji-hyo"
  | "Myoui Mina"
  | "Kim Da-hyun"
  | "Son Chae-young"
  | "Chou Tzuyu";

export type Temoji =
  | "🐰"
  | "🐶"
  | "🍑"
  | "🐭"
  | "🦄"
  | "🐧"
  | "💛"
  | "🐼"
  | "🍓"
  | "🦌";

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

export type TMember = {
  id: string;
  name: Tname;
  fullName: TfullName;
  emoji: Temoji;
  color: string;
  social: TSocial[];
  nationality: Tnationality;
  birthday: Date;
  positions: Tposition[];
  songs: TSong[];
  funFacts: string[];
  memberCardClasses: string;
};
