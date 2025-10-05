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
        link: "https://youtu.be/ePpPVE-GGJw?si=rKbIn6YxCFZi8Pwr",
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
        link: "https://youtu.be/8A2t_tAjMz8?si=0FU4jnOL6hZLVYr9",
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
        link: "https://youtu.be/VQtonf1fv_s?si=8c9ZkxxgJNs8w-MF",
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
        link: "https://youtu.be/1iLF3zr5mUM?si=hKy28HCNWi6eWTKo",
      },
      {
        title: "Cheer Up (Japanese Ver.)",
      },
      {
        title: "TT (Japanese Ver.)",
        link: "https://youtu.be/t35H2BVq490?si=WZMGBdoeRk1BlOSN",
      },
      {
        title: "Knock Knock (Japanese Ver.)",
      },
      {
        title: "Signal (Japanese Ver.)",
        link: "https://youtu.be/nrNWpxFflr4?si=n4hIefOxgb40ZZNg",
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
        link: "https://youtu.be/HuoOEry-Yc4?si=bw4DgoEq7dBJdtQ4",
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
        link: "https://youtu.be/V2hlQkVJZhE?si=I0yxXN-kiY95c1Qm",
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
        link: "https://youtu.be/rRzxEiBLQCA?si=TC6Z6HoAXJndc2TO",
      },
      {
        title: "Merry & Happy",
        link: "https://youtu.be/zi_6oaQyckM?si=9Ai4GdGz6GmITJ2I",
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
        link: "https://youtu.be/wQ_POfToaVY?si=LiBbD9ZlpktmQlTM",
      },
      {
        title: "Brand New Girl",
        link: "https://youtu.be/r1CMjQ0QJ1E?si=PhTGMPkXcelnh7AK",
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
        link: "https://youtu.be/i0p1bmr0EmE?si=fwBY53P6-0kWkzNA",
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
        link: "https://youtu.be/DdLYSziSXII?si=d9dunDZ07Hw6C17C",
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
  {
    id: "i-want-you-back",
    name: "I Want You Back",
    subName: "Japanese Single",
    releaseDate: new Date("2018-06-15"),
    types: ["single"],
    market: "Japanese",
    songs: [
      {
        title: "I Want You Back",
        link: "https://youtu.be/4OjLyOyMcNg?si=GEAoRk6t9ZzovHhO",
      },
    ],
  },
  {
    id: "summer-nights",
    name: "Summer Nights",
    subName: "Repackaged Mini Album",
    releaseDate: new Date("2018-07-09"),
    types: ["mini-album", "repackage"],
    market: "Korean",
    songs: [
      {
        title: "Dance The Night Away",
        link: "https://youtu.be/Fm5iP0S1z9w?si=5a0mXhJwlx4Up64O",
      },
      {
        title: "Chillax",
      },
      {
        title: "Shot Thru the Heart",
      },
      {
        title: "What is Love?",
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
    id: "bdz",
    name: "BDZ",
    subName: "1st Japanese Full Album",
    releaseDate: new Date("2018-09-12"),
    types: ["full-album"],
    market: "Japanese",
    songs: [
      {
        title: "BDZ",
        link: "https://youtu.be/CMNahhgR_ss?si=TxQ3r6j0cU8g3AqS",
      },
      {
        title: "One More Time",
        link: "https://youtu.be/HuoOEry-Yc4?si=bYc5JxHj5w2Dbe3Z",
      },
      {
        title: "Candy Pop",
        link: "https://youtu.be/wQ_POfToaVY?si=J9TtO0Urx54vmyUg",
      },
      {
        title: "L.O.V.E.",
      },
      {
        title: "Wishing",
      },
      {
        title: "Say It Again",
      },
      {
        title: "Wake Me Up",
      },
      {
        title: "Brand New Girl",
      },
      {
        title: "Be as ONE",
        link: "https://youtu.be/fnb1q3l4yLM?si=bRHRgI_B9tW2H7Rb",
      },
      {
        title: "I Want You Back",
      },
    ],
  },
  {
    id: "stay-by-my-side",
    name: "Stay By My Side",
    subName: "Japanese Single",
    releaseDate: new Date("2018-10-22"),
    types: ["single"],
    market: "Japanese",
    songs: [
      {
        title: "Stay By My Side",
        link: "https://youtu.be/diIoA6UquMw?si=09HzNK_g0YNO8ZZu",
      },
    ],
  },
  {
    id: "yes-or-yes",
    name: "YES or YES",
    subName: "6th Mini Album",
    releaseDate: new Date("2018-11-05"),
    types: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "YES or YES",
        link: "https://youtu.be/mAKsZ26SabQ?si=kFVSi8cB8mUqQm2i",
      },
      { title: "Say You Love Me" },
      { title: "Lalala" },
      { title: "Young & Wild" },
      { title: "Sunset" },
      { title: "After Moon" },
      { title: "BDZ (Korean Ver.)" },
    ],
  },
  {
    id: "the-year-of-yes",
    name: "The Year of “YES”",
    subName: "Repackaged Mini Album",
    releaseDate: new Date("2018-12-12"),
    types: ["mini-album", "repackage"],
    market: "Korean",
    songs: [
      {
        title: "The Best Thing I Ever Did",
        link: "https://youtu.be/xmJ3Lu7Vs9w?si=3U6uZr24UEfj7uBd",
      },
      { title: "Be as ONE (Korean Ver.)" },
      { title: "YES or YES" },
      { title: "Say You Love Me" },
      { title: "Lalala" },
      { title: "Young & Wild" },
      { title: "Sunset" },
      { title: "After Moon" },
      { title: "BDZ (Korean Ver.)" },
    ],
  },
  {
    id: "bdz-repackage",
    name: "BDZ -Repackage-",
    subName: "Japanese Repackaged Full Album",
    releaseDate: new Date("2018-12-26"),
    types: ["full-album", "repackage"],
    market: "Japanese",
    songs: [
      {
        title: "Stay By My Side",
        link: "https://youtu.be/96K5RxgTfW4?si=0wKUDSoa2yYuXKA2",
      },
      { title: "BDZ" },
      { title: "One More Time" },
      { title: "Candy Pop" },
      { title: "L.O.V.E." },
      { title: "Wishing" },
      { title: "Say It Again" },
      { title: "Wake Me Up" },
      { title: "Brand New Girl" },
      { title: "Be as ONE" },
      { title: "I Want You Back" },
    ],
  },
  {
    id: "#twice2",
    name: "#TWICE2",
    subName: "Repackaged Japanese Mini Album",
    releaseDate: new Date("2019-03-06"),
    types: ["mini-album", "repackage"],
    market: "Japanese",
    songs: [
      {
        title: "Likey (Japanese Ver.)",
        link: "https://youtu.be/N7MKlhS2ysU?si=kqxtKdOwtkIfjkAi",
      },
      { title: "Heart Shaker (Japanese Ver.)" },
      {
        title: "What Is Love? (Japanese Ver.)",
        link: "https://youtu.be/3zQXMPbK5jU?si=vGFCzwdzrNfBqpPk",
      },
      { title: "Dance the Night Away (Japanese Ver.)" },
      { title: "Yes or Yes (Japanese Ver.)" },
      { title: "Likey" },
      { title: "Heart Shaker" },
      { title: "What Is Love?" },
      { title: "Yes or Yes" },
    ],
  },
  {
    id: "fancy-you",
    name: "Fancy You",
    subName: "7th Mini Album",
    releaseDate: new Date("2019-04-22"),
    types: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "Fancy",
        link: "https://youtu.be/kOHB85vDuow?si=VCPsEmIo1zV0lM7s",
      },
      { title: "Stuck in My Head" },
      { title: "Girls Like Us" },
      { title: "Hot" },
      { title: "Turn it Up" },
      { title: "Strawberry" },
    ],
  },
  {
    id: "happy-happy",
    name: "Happy Happy",
    subName: "Japanese Single",
    releaseDate: new Date("2019-07-17"),
    types: ["single"],
    market: "Japanese",
    songs: [
      {
        title: "Happy Happy",
        link: "https://youtu.be/3n9rDwpa6QA?si=3pL6mGkeu4QIdg6E",
      },
      { title: "The Best Thing I Ever Did (Japanese Ver.)" },
      { title: "Happy Happy (Collapsedone Remix)" },
      { title: "Happy Happy (Instrumental)" },
    ],
  },
  {
    id: "breakthrough",
    name: "Breakthrough",
    subName: "Japanese Single",
    releaseDate: new Date("2019-07-24"),
    types: ["single"],
    market: "Japanese",
    songs: [
      {
        title: "Breakthrough",
        link: "https://youtu.be/1j6YA03hm4k?si=31jBdN9TifhhyY6K",
      },
      { title: "Fancy (Japanese Ver.)" },
      { title: "Breakthrough (Taalthechoi Remix)" },
      { title: "Breakthrough (Instrumental)" },
    ],
  },
  {
    id: "feel-special",
    name: "Feel Special",
    subName: "8th Mini Album",
    releaseDate: new Date("2019-09-23"),
    types: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "Feel Special",
        link: "https://youtu.be/3ymwOvzhwHs?si=F3yObIMy2T4BPrdM",
      },
      { title: "Rainbow" },
      { title: "Get Loud" },
      { title: "Trick It" },
      { title: "Love Foolish" },
      { title: "21:29" },
      { title: "Breakthrough (Korean Ver.)" },
    ],
  },
  {
    id: "&twice",
    name: "&TWICE",
    subName: "Japanese Full Album",
    releaseDate: new Date("2019-11-19"),
    types: ["full-album"],
    market: "Japanese",
    songs: [
      {
        title: "Fake & True",
        link: "https://youtu.be/zQELp93xxfo?si=b3i0dd8I28fjs4Pt",
      },
      { title: "Stronger" },
      { title: "Breakthrough" },
      { title: "Changing!" },
      { title: "Happy Happy" },
      { title: "What You Waiting For" },
      { title: "Be OK" },
      { title: "POLISH" },
      { title: "How u doin" },
      { title: "The Reason Why" },
    ],
  },
  {
    id: "&twice-repackage",
    name: "&TWICE -Repackage",
    subName: "Japanese Repackaged Full Album",
    releaseDate: new Date("2020-02-05"),
    types: ["full-album", "repackage"],
    market: "Japanese",
    songs: [
      { title: "Swing" },
      { title: "Fake & True" },
      { title: "Stronger" },
      { title: "Breakthrough" },
      { title: "Changing!" },
      { title: "Happy Happy" },
      { title: "What You Waiting For" },
      { title: "Be OK" },
      { title: "POLISH" },
      { title: "How u doin" },
      { title: "The Reason Why" },
    ],
  },
  {
    id: "more-and-more",
    name: "More & More",
    subName: "9th Mini Album",
    releaseDate: new Date("2020-06-01"),
    types: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "More & More",
        link: "https://youtu.be/mH0_XpSHkZo?si=nl1WIVJKwKn4Kf_e",
      },
      { title: "Oxygen" },
      { title: "Firework" },
      { title: "Make Me Go" },
      { title: "Shadow" },
      { title: "Don't Call Me Again" },
      { title: "Sweet Summer Day" },
    ],
  },
  {
    id: "fanfare",
    name: "Fanfare",
    subName: "Japanese Single",
    releaseDate: new Date("2020-07-08"),
    types: ["single"],
    market: "Japanese",
    songs: [
      { title: "Fanfare" },
      { title: "More & More (Japanese Ver.)" },
      { title: "Fanfare (Lee Hae Sol Remix)" },
      { title: "Fanfare (Instrumental)" },
    ],
  },
  {
    id: "more-and-more-english",
    name: "More & More (English Ver.)",
    subName: "English Single",
    releaseDate: new Date("2020-08-21"),
    types: ["single"],
    market: "English",
    songs: [{ title: "More & More (English Ver.)" }],
  },
  {
    id: "#twice3",
    name: "#TWICE3",
    subName: "Japanese Mini Album",
    releaseDate: new Date("2020-09-16"),
    types: ["mini-album"],
    market: "Japanese",
    songs: [
      { title: "The Best Thing I Ever Did (Japanese Ver.)" },
      { title: "Fancy (Japanese Ver.)" },
      { title: "Feel Special (Japanese Ver.)" },
      { title: "More & More (Japanese Ver.)" },
      { title: "Stuck In My Head (Japanese Ver.)" },
      { title: "21:29 (Japanese Ver.)" },
      { title: "The Best Thing I Ever Did" },
      { title: "Fancy" },
      { title: "Feel Special" },
      { title: "More & More" },
      { title: "Stuck In My Head" },
      { title: "21:29" },
    ],
  },
  {
    id: "eyes-wide-open",
    name: "Eyes Wide Open",
    subName: "2nd Full Album",
    releaseDate: new Date("2020-10-26"),
    types: ["full-album"],
    market: "Korean",
    songs: [
      {
        title: "I Can't Stop Me",
        link: "https://youtu.be/CM4CkVFmTds?si=E4MnHiQ2VRAxt0c8",
      },
      { title: "Hell in Heaven" },
      { title: "Up No More" },
      { title: "Do What We Like" },
      { title: "Bring It Back" },
      { title: "Believer" },
      { title: "Queen" },
      { title: "Go Hard" },
      { title: "Shot Clock" },
      { title: "Handle It" },
      { title: "Depend On You" },
      { title: "Say Something" },
      { title: "Behind The Mask" },
    ],
  },
  {
    id: "better",
    name: "BETTER",
    subName: "Japanese Single",
    releaseDate: new Date("2020-11-18"),
    types: ["single"],
    market: "Japanese",
    songs: [
      { title: "BETTER" },
      { title: "Scorpion" },
      { title: "BETTER (Instrumental)" },
      { title: "Scorpion (Instrumental)" },
    ],
  },
  {
    id: "i-cant-stop-me-english",
    name: "I Can't Stop Me (English Ver.)",
    subName: "Second English Digital Single",
    releaseDate: new Date("2020-11-30"),
    types: ["single", "digital"],
    market: "English",
    songs: [{ title: "I Can't Stop Me (English Ver.)" }],
  },
  {
    id: "cry-for-me",
    name: "Cry For Me",
    subName: "Single",
    releaseDate: new Date("2020-12-18"),
    types: ["single"],
    market: "Korean",
    songs: [
      {
        title: "Cry For Me",
        link: "https://youtu.be/bkQw-F1QTq4?si=2E5gkC0oq5LOnHyK",
      },
    ],
  },
  {
    id: "kura-kura",
    name: "Kura Kura",
    subName: "Japanese Single",
    releaseDate: new Date("2021-05-12"),
    types: ["single"],
    market: "Japanese",
    songs: [
      {
        title: "Kura Kura",
        link: "https://youtu.be/BSS8Y-0hOlY?si=CbwKOkJK3_EFr1ho",
      },
      { title: "Strawberry Moon" },
      { title: "Kura Kura (Instrumental)" },
      { title: "Strawberry Moon (Instrumental)" },
    ],
  },
  {
    id: "taste-of-love",
    name: "Taste Of Love",
    subName: "10th Mini Album",
    releaseDate: new Date("2021-06-11"),
    types: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "Alcohol-Free",
        link: "https://youtu.be/X-uJtV8ScYk?si=PCV4H2zC3N2uq5Dw",
      },
      { title: "First Time" },
      { title: "Scandal" },
      { title: "Conversation" },
      { title: "Baby Blue Love" },
      { title: "SOS" },
      { title: "Cry For Me (English ver.)" },
    ],
  },
  {
    id: "hospital-playlist-ost",
    name: "HOSPITAL PLAYLIST Season2, Pt. 4",
    subName: "OST Single",
    releaseDate: new Date("2021-07-09"),
    types: ["single", "ost"],
    market: "Korean",
    songs: [
      { title: "I love you more than anyone" },
      { title: "I love you more than anyone - Instrumental" },
    ],
  },
  {
    id: "#perfect-world",
    title: "Perfect World",
    releaseDate: "2021-07-28",
    type: ["full-album"],
    market: "Japanese",
    songs: [
      {
        title: "Perfect World",
        link: "https://youtu.be/fmOEKOjyDxU?si=IOp-WqxWKoVhZ29E",
      },
      { title: "BETTER" },
      { title: "Good at Love" },
      { title: "Fanfare" },
      { title: "Kura Kura" },
      { title: "Four-leaf Clover" },
      { title: "In the summer" },
      { title: "PIECES OF LOVE" },
      { title: "Thank you, Family" },
      { title: "PROMISE" },
    ],
  },
  {
    id: "#the-feels",
    title: "The Feels",
    releaseDate: "2021-10-01",
    type: ["single"],
    market: "English",
    songs: [
      {
        title: "The Feels",
        link: "https://youtu.be/f5_wn8mexmM?si=m22mkuFgJPO07PsZ",
      },
      { title: "The Feels (Stereotypes Remix)" },
      { title: "The Feels (YVES V Remix)" },
      { title: "The Feels (Instrumental)" },
      { title: "The Feels (The Stereotypes Remix [Instrumental])" },
      { title: "The Feels (YVES V Remix [Instrumental])" },
    ],
  },
  {
    id: "#formula-of-love",
    title: "Formula of Love: O+T=<3",
    releaseDate: "2021-11-12",
    type: ["full-album"],
    market: "Korean",
    songs: [
      {
        title: "Scientist",
        link: "https://youtu.be/vPwaXytZcgI?si=zOWqgL_FdJX_37jZ",
      },
      { title: "Moonlight" },
      { title: "Icon" },
      { title: "Cruel" },
      { title: "Real You" },
      { title: "F.I.L.A (Fall In Love Again)" },
      { title: "Last Waltz" },
      { title: "Espresso" },
      { title: "Rewind" },
      { title: "Cactus" },
      { title: "Push & Pull" },
      { title: "Hello" },
      { title: "1, 3, 2" },
      { title: "Candy" },
      { title: "The Feels" },
      { title: "Scientist (R3HAB Remix)" },
      { title: "The Feels (Korean Ver)" },
    ],
  },
  {
    id: "#doughnut",
    title: "Doughnut",
    releaseDate: "2021-12-15",
    type: ["single"],
    market: "Japanese",
    songs: [
      {
        title: "Doughnut",
        link: "https://youtu.be/VcOSUOpACq0?si=1ijWUF1QRp51rnWu",
      },
      { title: "Wonderful Day" },
      { title: "Doughnut (Instrumental)" },
      { title: "Wonderful Day (Instrumental)" },
    ],
  },
  {
    id: "#twice4",
    title: "#TWICE4 (Japanese ver.)",
    releaseDate: "2022-03-16",
    type: ["mini-album"],
    market: "Japanese",
    songs: [
      { title: "I Can't Stop Me - Japanese ver." },
      { title: "Cry For Me - Japanese ver." },
      { title: "Alcohol-Free - Japanese ver." },
      { title: "Scientist - Japanese ver." },
    ],
  },
  {
    id: "#just-be-yourself",
    title: "Just Be Yourself",
    releaseDate: "2022-03-21",
    type: ["single"],
    market: "Japanese",
    songs: [{ title: "Just Be Yourself" }],
  },
  {
    id: "#celebrate",
    title: "Celebrate",
    releaseDate: "2022-07-27",
    type: ["full-album"],
    market: "Japanese",
    songs: [
      {
        title: "Celebrate",
        link: "https://youtu.be/fMIn43MiwG8?si=UwqnJmtpk6r1kX2f",
      },
      { title: "Voices of Delight" },
      { title: "TICK TOCK" },
      { title: "Flow like waves" },
      { title: "That's all I'm saying" },
      { title: "Bitter Sweet" },
      { title: "Sandcastle" },
      { title: "Just Be Yourself" },
      { title: "Doughnut" },
    ],
  },
  {
    id: "#between-1&2",
    title: "Between 1&2",
    releaseDate: "2022-08-26",
    type: ["mini-album"],
    market: "Korean",
    songs: [
      {
        title: "Talk That Talk",
        link: "https://youtu.be/k6jqx9kZgPM?si=LLCGQkDlhOsuAcGv",
      },
      { title: "Queen Of Hearts" },
      { title: "Basics" },
      { title: "Trouble" },
      { title: "Brave" },
      { title: "Gone" },
      { title: "When We Were Kids" },
    ],
  },
  {
    id: "#moonlight-sunrise",
    title: "Moonlight Sunrise",
    releaseDate: "2023-01-20",
    type: ["single", "digital"],
    market: "English",
    songs: [{ title: "Moonlight Sunrise", link: "https://youtu.be/cKlEE_EYuNM?si=Bjib_kTGEoq2r_5Z" }],
  },
  {
    id: "ready-to-be",
    title: "READY TO BE",
    releaseDate: "2023-03-10",
    type: ["mini-album"],
    market: "Korean",
    songs: [
      { title: "SET ME FREE", link: "https://youtu.be/w4cTYnOPdNk?si=E-O2l-zXYMUWXA2q" },
      { title: "MOONLIGHT SUNRISE" },
      { title: "GOT THE THRILLS" },
      { title: "BLAME IT ON ME" },
      { title: "WALLFLOWER" },
      { title: "CRAZY STUPID LOVE" },
      { title: "SET ME FREE (Eng. Ver.)" },
    ],
  },
  {
    id: "hare-hare-pre",
    title: "Hare Hare",
    releaseDate: "2023-05-12",
    type: ["single"],
    market: "Japanese",
    songs: [{ title: "Hare Hare", link: "https://youtu.be/-uqWaGzQyxA?si=tZKruWEMeWQ1F5fL" }],
  },
  {
    id: "#hare-hare",
    title: "Hare Hare",
    releaseDate: "2023-05-31",
    type: ["mini-album"],
    market: "Japanese",
    songs: [
      { title: "Hare Hare", link: "https://youtu.be/-uqWaGzQyxA?si=tZKruWEMeWQ1F5fL" },
      { title: "Catch a Wave" },
      { title: "Hare Hare (Instrumental)" },
      { title: "Catch a Wave (Instrumental)" },
    ],
  },
  {
    id: "#heart-shaker-remix",
    title: "Heart Shaker (GALACTIKA * Holiday Remix)",
    releaseDate: "2023-11-07",
    type: ["single", "remix"],
    market: "Korean",
    songs: [{ title: "Heart Shaker (GALACTIKA * Holiday Remix)" }],
  },
  {
    id: "the-remixes",
    title: "THE REMIXES",
    releaseDate: "2023-11-17",
    type: ["single", "remix"],
    market: "Korean",
    songs: [
      { title: "MOONLIGHT SUNRISE (Jonas Blue Remix)" },
      { title: "The Feels (Ian Asher Remix)" },
      { title: "SET ME FREE (Carneyval Remix)" },
      { title: "Alcohol-Free (English ver.)" },
      { title: "CRY FOR ME (English ver.)" },
      { title: "I CAN'T STOP ME (ft.BOYS LIKE GIRLS)" },
      { title: "MORE & MORE (LEE HAE SOL Sped Up Remix)" },
    ],
  },
  {
    id: "dance-again",
    title: "Dance Again",
    releaseDate: "2023-12-12",
    type: ["single"],
    market: "Japanese",
    songs: [{ title: "Dance Again", link: "https://youtu.be/OzmnjIca8LU?si=jIFDjlayXWi2doij" }],
  },
  {
    id: "#i-got-you-pre",
    title: "I GOT YOU",
    releaseDate: "2024-02-02",
    type: ["pre-release-single"],
    market: "Korean",
    songs: [{ title: "I GOT YOU" }, { title: "I GOT YOU (Voyage ver.)" }],
  },
];
