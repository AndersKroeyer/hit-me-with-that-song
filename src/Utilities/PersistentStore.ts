import { Quiz } from '../Components/types';

const KVdb = require('kvdb.io');

const bucket = KVdb.bucket('CEPpDPxh2Wz1exQCRM4UKe');

export const saveQuiz = async (quiz: Quiz) => {
  await bucket.set(`songs:${quiz.key}`, JSON.stringify(quiz));
};

export const getQuizzes = async () => {
  const res = await bucket.list({ prefix: 'songs:', values: true });
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of res) {
    console.log(`key: ${key} => ${value}`);
  }
};

export const getQuiz = async (key: string): Promise<Quiz> => {
  const res = await bucket.get(`songs:${key}`);
  return JSON.parse(res);
};
