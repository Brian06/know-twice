import { link } from "fs";

export const DISCOGRAPHY = [
  {
    id: "the-story-begins",
    name: "The Story Begins",
    subName: "1st Mini Album",
    releaseDate: new Date("2015-10-03"),
    types: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "Like OOH-AHH",
        links: "https://youtu.be/0rtV5esQT6I?si=XDDHfSUtX8-HyuiB",
      },
      {
        title: "Do It Again",
      },
      {
        title: "Going Crazy",
      },
      {
        title: "Truth",
      },
      {
        title: "Candy Boy",
      },
      {
        title: "Like a Fool",
      },
    ],
  },
  {
    id: "page-two",
    name: "Page Two",
    subName: "2nd Mini Album",
    releaseDate: new Date("2016-04-25"),
    types: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "CHEER UP",
        links: "https://youtu.be/c7rCyll5AeY?si=ynE2G4Pbk6wUMkiG",
      },
      {
        title: "Precious Love",
      },
      {
        title: "Touchdown",
      },
      {
        title: "Tuk Tok",
      },
      {
        title: "Woohoo",
      },
      {
        title: "My Headphones On",
      },
      {
        title: "I'm Going To Be a Star",
      },
    ],
  },
  {
    id: "twicecoaster-lane-1",
    name: "TWICEcoaster: Lane 1",
    subName: "3rd Mini Album",
    releaseDate: new Date("2016-10-24"),
    types: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "TT",
        link: "https://youtu.be/ePpPVE-GGJw?si=rKbIn6YxCFZi8Pwr"
      },
      {
        title: "1 to 10",
      },
      {
        title: "Ponytail",
      },
      {
        title: "Jelly Jelly",
      },
      {
        title: "Pit-A-Pat",
      },
      {
        title: "Next Page",
      },
      {
        title: "One in a Million",
      },
    ],
  },
  {
    id: "twicecoaster-lane-2",
    name: "TWICEcoaster: Lane 2",
    subName: "Repackaged Mini Album",
    releaseDate: new Date("2017-02-20"),
    types: ["repackage", "mini-album"],
    market: "Korean",
    songs: [
      {
        title: "Knock Knock",
        link: "https://youtu.be/8A2t_tAjMz8?si=0FU4jnOL6hZLVYr9"
      },
      {
        title: "Ice Cream",
      },
      {
        title: "TT",
      },
      {
        title: "1 to 10",
      },
      {
        title: "Ponytail",
      },
      {
        title: "Jelly Jelly",
      },
      {
        title: "Pit-A-Pat",
      },
      {
        title: "Next Page",
      },
      {
        title: "One in a Million",
      },
      {
        title: "TT (Tak Remix)",
      },
      {
        title: "Like Ooh-Ahh (Instrumental)",
      },
      {
        title: "TT (Instrumental)",
      },
      {
        title: "Cheer Up (Instrumental)",
      },
      {
        title: "TT (Instrumental)",
      },
    ],
  },
  {
    id: "whats-this",
    name: "Whats's This?",
    subName: "Digital Mini Album",
    releaseDate: new Date("2017-02-24"),
    types: ["mini-album", "digital"],
    market: "Korean",
    songs: [
      {
          title: "Like Ooh-Ahh",
      },
      {
        title: "Cheer Up",
      },
      {
        title: "Touchdown",
      },
    ],
  },
  {
    id: "signal",
    name: "Signal",
    subName: "4th Mini Album",
    releaseDate: new Date("2017-05-15"),
    types: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "Signal",
        link: "https://youtu.be/VQtonf1fv_s?si=8c9ZkxxgJNs8w-MF"
      },
      {
        title: "Three Times a Day",
      },
      {
        title: "Only You",
      },
      {
        title: "Hold Me Tight",
      },
      {
        title: "Eye Eye Eyes",
      },
      {
        title: "Someone Like Me",
      },
    ],
  },
  {
    id: "#twice",
    name: "#TWICE",
    subName: "Japanese Mini Album",
    releaseDate: new Date("2017-06-28"),
    types: ["mini-album"],
    market: "Japanese",
    songs: [
      {
        title: "Like Ooh-Ahh (Japanese Ver.)",
        link: "https://youtu.be/1iLF3zr5mUM?si=hKy28HCNWi6eWTKo"
      },
      {
        title: "Cheer Up (Japanese Ver.)",
      },
      {
        title: "TT (Japanese Ver.)",
        link: "https://youtu.be/t35H2BVq490?si=WZMGBdoeRk1BlOSN"
      },
      {
        title: "Knock Knock (Japanese Ver.)",
      },
      {
        title: "Signal (Japanese Ver.)",
        link: "https://youtu.be/nrNWpxFflr4?si=n4hIefOxgb40ZZNg"
      },
      {
        title: "Like Ooh-Ahh",
      },
      {
        title: "Cheer Up",
      },
      {
        title: "TT",
      },
      {
        title: "Knock Knock",
      },
      {
        title: "Signal",
      },
    ],
  },
  {
    id: "one-more-time",
    name: "One More Time",
    subName: "Japanese Single",
    releaseDate: new Date("2017-10-18"),
    types: ["single"],
    market: "Japanese",
    songs: [
      {
        title: "One More Time",
        link: "https://youtu.be/HuoOEry-Yc4?si=bw4DgoEq7dBJdtQ4"
      },
      {
        title: "Luv Me",
      },
      {
        title: "One More Time (Instrumental)",
      },
      {
        title: "Luv Me (Instrumental)",
      },
    ],
  },
  {
    id: "twicetagram",
    name: "Twicetagram",
    subName: "Full Album",
    releaseDate: new Date("2017-10-30"),
    types: ["full-album"],
    market: "Korean",
    songs: [
      {
        title: "Likey",
        link: "https://youtu.be/V2hlQkVJZhE?si=I0yxXN-kiY95c1Qm"
      },
      {
        title: "Turtle",
      },
      {
        title: "Missing U",
      },
      {
        title: "Wow",
      },
      {
        title: "FFW",
      },
      {
        title: "Ding Dong",
      },
      {
        title: "24/7",
      },
      {
        title: "Look At Me",
      },
      {
        title: "Rollin",
      },
      {
        title: "Love Line",
      },
      {
        title: "Don't Give Up",
      },
      {
        title: "You In My Heart",
      },
      {
        title: "Jaljayo Good Night",
      },
    ],
  },
  {
    id: "merry-happy",
    name: "Merry & Happy",
    subName: "Repackaged Full Album",
    releaseDate: new Date("2017-12-11"),
    types: ["repackage", "full-album"],
    market: "Korean",
    songs: [
      {
        title: "Heart Shaker",
        link: "https://youtu.be/rRzxEiBLQCA?si=TC6Z6HoAXJndc2TO"
      },
      {
        title: "Merry & Happy",
        link: "https://youtu.be/zi_6oaQyckM?si=9Ai4GdGz6GmITJ2I"
      },
      {
        title: "Likey",
      },
      {
        title: "Turtle",
      },
      {
        title: "Missing U",
      },
      {
        title: "Wow",
      },
      {
        title: "FFW",
      },
      {
        title: "Ding Dong",
      },
      {
        title: "24/7",
      },
      {
        title: "Look At Me",
      },
      {
        title: "Rollin",
      },
      {
        title: "Love Line",
      },
      {
        title: "Don't Give Up",
      },
      {
        title: "You In My Heart",
      },
      {
        title: "Jaljayo Good Night",
      },
    ],
  },
  {
    id: "candy-pop",
    name: "Candy Pop",
    subName: "Japanese Single",
    releaseDate: new Date("2018-02-07"),
    types: ["single"],
    market: "Japanese",
    songs: [
      {
        title: "Candy Pop",
        link: "https://youtu.be/wQ_POfToaVY?si=LiBbD9ZlpktmQlTM"
      },
      {
        title: "Brand New Girl",
        link: "https://youtu.be/r1CMjQ0QJ1E?si=PhTGMPkXcelnh7AK"
      },
      {
        title: "Candy Pop (Instrumental)",
      },
      {
        title: "Brand New Girl (Instrumental)",
      },
    ],
  },
  {
    id: "what-is-love",
    name: "What is Love?",
    subName: "5th Mini Album",
    releaseDate: new Date("2018-04-09"),
    types: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "What is Love?",
        link: "https://youtu.be/i0p1bmr0EmE?si=fwBY53P6-0kWkzNA"
      },
      {
        title: "Sweet Talker",
      },
      {
        title: "Ho!",
      },
      {
        title: "Dejavu",
      },
      {
        title: "Say Yes",
      },
      {
        title: "Stuck",
      },
    ],
  },
  {
    id: "wake-me-up",
    name: "Wake Me Up",
    subName: "Japanese Single",
    releaseDate: new Date("2018-05-16"),
    types: ["single"],
    market: "Japanese",
    songs: [
      {
        title: "Wake Me Up",
        link: "https://youtu.be/DdLYSziSXII?si=d9dunDZ07Hw6C17C"
      },
      {
        title: "Pink Lemonade",
      },
      {
        title: "Wake Me Up (Instrumental)",
      },
      {
        title: "Pink Lemonade (Instrumental)",
      },
    ],
  },
];
