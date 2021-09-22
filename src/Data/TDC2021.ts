import { Song, TriviaState, Word } from '../Components/types';

const rand = (arrayLength: number) => Math.floor(Math.random() * arrayLength);

export const buildWords = (words: string[]): Word[] => {
  console.log('building random stopwords');
  const randomIndices: number[] = [];
  let attempts = 0;
  while (randomIndices.length < 2) {
    const index = rand(words.length);
    if (!randomIndices.includes(index)) {
      randomIndices.push(index);
    }
    attempts += 1;
    if (attempts > 100) {
      break;
    }
  }
  return words.map((w, index) => ({
    text: w,
    visible: false,
    stopWord: randomIndices.includes(index),
  }));
};

export const SongData: Song[] = [
  {
    author: 'Rollo & King',
    title: 'Der står et billede af dig på mit bord',
    words: buildWords(['der', 'står', 'et', 'billede', 'af', 'dig']),
    trivia: 'Hvad var Rollo & Kings job før de lavede musik?',
    triviaAnswer: 'Skolelærer',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=EnG6OpagWEc&t=40',
    playtime: 12,
  },
  {
    author: 'Shu-bi-dua',
    title: 'Danmark',
    words: buildWords(['den', 'der', 'siger', 'andet', 'lyver']),
    trivia:
      'Hvor mange medlemmer har der været med i shubidua over årene: 3, 5, 9, 11 eller 16?',
    triviaAnswer: '16',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=xvq1__JFtrI&t=2m37s',
    playtime: 14,
  },
  {
    author: 'Nick & Jay',
    title: 'Lækker',
    words: buildWords(['har', 'jeg', 'set', 'dig', 'før']),
    trivia:
      'Hvor stor en procentdel af 15-30 årige danskere kendte i 2011 Nick & Jay?',
    triviaAnswer: '94%',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=GZL4oZI2Ro0&&t=59',
    playtime: 14,
  },
  {
    author: 'Benny Jamz, Gilli, Kesi',
    title: 'Ibiza',
    words: buildWords(['bare', 'spis', 'for', 'ingen', 'skal', 'mangle']),
    trivia: 'Hvad står B.O.C for?',
    triviaAnswer: 'Bombs over copenhagen, Bomber over centrum, bars of crack',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=cmzh8BanYdg&t=21',
    playtime: 12,
  },
  {
    author: 'Burhan G + Medina',
    title: 'Mest ondt',
    words: buildWords(['er', 'alt', 'det', 'jeg', 'savner', 'nu']),
    trivia:
      ' Inden en retssag omhandlende spiritus og narko i 2018 skiftede Medina navn. Efter retssagen skiftede hun tilbage til Medina. Hvad var hendes midlertidige navn under initialerne F.H?',
    triviaAnswer: 'Frederikke Hansen',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=A1pXfcR2k9k&t=50',
    playtime: 15,
  },
  {
    author: 'Drengene fra Angora',
    title: 'Rejsesangen',
    words: buildWords(['og', 'aben', 'er', 'deres', 'bedste', 'ven']),
    trivia: 'I hvilket år udkom drengene fra Angora?',
    triviaAnswer: '2004',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=-hhi2ACrlb0&t=24',
    playtime: 16,
  },
  {
    author: 'Shakira',
    title: 'Whenever, Wherever',
    words: buildWords(['my', 'breasts', 'are', 'small', 'and', 'humble']),
    trivia: 'Hvem er Shakiras mand?',
    triviaAnswer: 'Gerard Pique',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=weRHyjj34ZE&t=1m12sec',
    playtime: 10,
  },
  {
    author: 'Joel Corry',
    title: 'Head and Heart',
    words: buildWords(['and', 'my', 'head', 'tells', 'me', 'to', 'stop']),
    trivia: 'Hvem er feature på denne sang?',
    triviaAnswer: 'MNEK',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=CRuOOxF-ENQ&t=1m18sec',
    playtime: 12,
  },
  {
    author: 'Based Boys & Fissefred',
    title: 'Giz præsidenter',
    words: buildWords([
      'regner',
      'med',
      'damer',
      'så',
      'går',
      'med',
      'paraply',
    ]),
    trivia: 'Hvem er med i Based Boys som laver denne sang med Fissefred?',
    triviaAnswer: 'G-lyfe & DJ Shuf',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=BjkLPlD_1mU&t=1m54sec',
    playtime: 11,
  },
  {
    author: 'Pitpull',
    title: 'Fireball',
    words: buildWords(['I', 'saw', 'I', 'conquered', 'I', 'came']),
    trivia: 'Hvad var Pitbulls gennembrudssang?',
    triviaAnswer: 'I Know You Want Me',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=HMqgVXSvwGo&t=45',
    playtime: 9,
  },
  {
    author: 'Owl City',
    title: 'Fireflies',
    words: buildWords([
      'cause ',
      'everything',
      'is',
      'never',
      'as',
      'it',
      'seems',
    ]),
    trivia: 'Hvad for et socialt medie blev Owl City stort på?',
    triviaAnswer: 'Myspace',
    showTrivia: TriviaState.Hidden,
    url: 'https://www.youtube.com/watch?v=psuRGfAaju4&t=56',
    playtime: 12,
  },
];
