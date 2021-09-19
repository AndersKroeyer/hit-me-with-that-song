import { Song, Word } from '../Components/types';

const rand = (arrayLength: number) => Math.floor(Math.random() * arrayLength);

export const buildWords = (words: string[]): Word[] => {
  console.log('building random stopwords');
  const randomIndices: number[] = [];
  while (randomIndices.length < 2) {
    const index = rand(words.length);
    if (!randomIndices.includes(index)) {
      randomIndices.push(index);
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
    words: buildWords(['Der', 'står', 'et', 'billede', 'af', 'dig']),
    trivia: 'Hvad var Rollo & Kings job før de lavede musik',
    triviaAnswer: 'Skolelærer',
    showTrivia: false,
    url: 'https://www.youtube.com/watch?v=EnG6OpagWEc&t=40',
    playtime: 12,
  },
  {
    author: 'Shu-bi-dua',
    title: 'Danmark',
    words: buildWords(['Den', 'der', 'siger', 'andet', 'lyver']),
    trivia:
      'Hvor mange medlemmer har der været med i shubidua over årene: 3, 5, 9, 11 eller 16?',
    triviaAnswer: '16',
    showTrivia: false,
    url: 'https://www.youtube.com/watch?v=xvq1__JFtrI&t=2m37s',
    playtime: 14,
  },
];
