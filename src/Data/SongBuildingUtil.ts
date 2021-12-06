import { Word } from '../Components/types';

export const rand = (arrayLength: number) =>
  Math.floor(Math.random() * arrayLength);

export const buildWords = (words: string[]): Word[] => {
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
