export interface Word {
  text: string;
  visible: boolean;
  stopWord?: boolean;
}

export interface Song {
  words: Word[];
  author: string;
  title: string;
  trivia: string;
  triviaAnswer: string;
  showTrivia: boolean;
}

export interface DashboardState {
  words: Word[];
  trivia: string;
  showTrivia: boolean;
}
