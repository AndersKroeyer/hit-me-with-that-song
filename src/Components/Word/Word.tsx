import { Word } from '../types';
import { wordStyles } from './Word.styles';

const WordComponent = ({ text, visible, stopWord }: Word) => {
  const classes = wordStyles({ stopWord, visible, textLength: text.length });

  return (
    <div className={classes.wordContainer} key={text}>
      <span className={classes.wordStyle}>{visible ? text : '𝄞'}</span>
    </div>
  );
};
export default WordComponent;
