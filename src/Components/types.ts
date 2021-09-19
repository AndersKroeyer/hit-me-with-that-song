export interface Word {
  text: string;
  visible: boolean;
  stopWord?: boolean;
}

export interface Music {
  url: string;
  playtime: number;
}

export interface Song extends Music {
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

export interface TeamPoints {
  team1Points: number;
  team2Points: number;
}
