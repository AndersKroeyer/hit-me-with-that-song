import { Word } from '../types';

const WordComponent = ({ text, visible }: Word) => (
  <div key={text}>{visible ? text : '___________'}</div>
);

export default WordComponent;
