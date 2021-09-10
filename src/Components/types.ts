export interface Word {
  text: string;
  visible: boolean;
}

export interface Song {
  words: Word[];
  author: string;
  title: string;
}

export interface DashboardState {
  words: Word[];
}
