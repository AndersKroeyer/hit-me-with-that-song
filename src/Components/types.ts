export interface Quiz {
  songs: Song[];
  key: string;
}

export interface Word {
  text: string;
  visible: boolean;
  stopWord: boolean;
}

export interface Music {
  url: string;
  playtime: number;
}

// eslint-disable-next-line no-shadow
export enum TriviaState {
  Hidden = 'Hide trivia',
  Question = 'Show question',
  Answer = 'Show Answer',
}

export interface Song extends Music {
  words: Word[];
  author: string;
  title: string;
  trivia: string;
  triviaAnswer: string;
  showTrivia: TriviaState;
}

export interface DashboardState {
  words: Word[];
  trivia: string;
  triviaAnswer: string;
  showTrivia: TriviaState;
}

export interface TeamPoints {
  team1Points: number;
  team2Points: number;
}
