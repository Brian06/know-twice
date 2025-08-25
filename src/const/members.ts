import type { TMember } from "../types/members";

export const MEMBERS: TMember[] = [
  {
    id: "nayeon",
    name: "Nayeon",
    fullName: "Im Nayeon",
    emoji: "🐰",
    instagram: {
      username: "nayeonyny",
      url: "https://www.instagram.com/nayeonyny/",
    },
    nationality: "South Korean",
    birthday: new Date("1995-09-22"),
    positions: ["Lead Vocalist", "Center", "GroupFace"],
    songs: [
      {
        title: "POP!",
        youtube: "https://youtu.be/f6YDKF0LVWw?si=lVo3cXGAHFhGdDMF",
        spotify:
          "https://open.spotify.com/track/3lOMJTQTd6J34faYwASc33?si=7d2fc6f03dee4e03",
        appleMusic: "https://music.apple.com/us/song/pop/1624932774",
      },
    ],
    funFacts: [
      "Her height is 163cm",
      "Her weight is 47kg",
      "She has a younger sister, Seoyeon, born 1998.",
      "She chose 9 as her favorite number, because TWICE has 9 members",
      "Her left leg is weak due to her being in a car accident in her childhood.",
    ],
    memberCardClasses: "hover:bg-nayeon",
  },
  {
    id: "jeongyeon",
    name: "Jeongyeon",
    memberCardClasses: "hover:bg-jeongyeon",
  },
  {
    id: "momo",
    name: "Momo",
    memberCardClasses: "hover:bg-momo",
  },
  {
    id: "sana",
    name: "Sana",
    memberCardClasses: "hover:bg-sana",
  },
  {
    id: "jihyo",
    name: "Jihyo",
    memberCardClasses: "hover:bg-jihyo",
  },
  {
    id: "mina",
    name: "Mina",
    memberCardClasses: "hover:bg-mina",
  },
  {
    id: "dahyun",
    name: "Dahyun",
    memberCardClasses: "hover:bg-dahyun",
  },
  {
    id: "chaeyoung",
    name: "Chaeyoung",
    memberCardClasses: "hover:bg-chaeyoung",
  },
  {
    id: "tzuyu",
    name: "Tzuyu",
    memberCardClasses: "hover:bg-tzuyu",
  },
];
