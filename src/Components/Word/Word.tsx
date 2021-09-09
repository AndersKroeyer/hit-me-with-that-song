import { Word } from '../types';

const WordComponent = ({ text, visible }: Word) => {
  if (!visible) {
    return <div>________</div>;
  }

  return <div>{text}</div>;
};

export default WordComponent;
