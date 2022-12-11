import { Quiz, Song, TriviaState } from '../Components/types';
import { buildWords } from '../Data/SongBuildingUtil';

/* from internal to firebase */

const mapSong = (song: Song): FirebaseSong => ({
  id: song.id,
  words: song.words.map((x) => x.text).join(' '),
  author: song.author,
  title: song.title,
  trivia: song.trivia,
  playtime: song.playtime,
  triviaAnswer: song.triviaAnswer,
  url: song.url,
});

const mapQuiz = (quiz: Quiz): FirebaseQuiz => ({
  songs: quiz.songs.map((x) => mapSong(x)),
  key: quiz.key,
});

export const CreateFirebaseDto = (
  quizList: Quiz[],
  userId: string,
): FirebaseDto => ({
  userId,
  quizList: quizList.map((x) => mapQuiz(x)),
});

/* from firebase to internal */
const mapFirebaseSong = (song: FirebaseSong): Song => ({
    id: song.id,
    words: buildWords(song.words.split(' ')),
    author: song.author,
    title: song.title,
    trivia: song.trivia,
    playtime: song.playtime,
    triviaAnswer: song.triviaAnswer,
    url: song.url,
    showTrivia: TriviaState.Hidden
});

const mapFirebaseQuiz = (firebaseQuiz: FirebaseQuiz): Quiz => ({
    songs: firebaseQuiz.songs.map(x => mapFirebaseSong(x)),
    key: firebaseQuiz.key
});

export const ParseFirebaseDto = (dto: FirebaseDto): Quiz[] => 
    dto.quizList.map(x => mapFirebaseQuiz(x))

/* types */

export interface FirebaseDto {
  userId: string;
  quizList: FirebaseQuiz[];
}

interface FirebaseQuiz {
  key: string;
  songs: FirebaseSong[];
}

interface FirebaseSong {
  id: string;
  words: string;
  author: string;
  title: string;
  trivia: string;
  triviaAnswer: string;
  url: string;
  playtime: number;
}
