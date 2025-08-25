export type TMember = {
  id: string;
  name: string;
  fullName: string;
  emoji: string;
  instagram: {
    username: string;
    url: string;
  };
  nationality: string;
  birthday: Date;
  positions: string[];
  songs: {
    title: string;
    youtube: string;
    spotify: string;
    appleMusic: string;
  }[];
  funFacts: string[];
  memberCardClasses: string;
};
