import { Word } from '../types';
import { wordStyles } from './Word.styles';

const WordComponent = ({ text, visible, stopWord }: Word) => {
  const classes = wordStyles({ stopWord: stopWord || false, visible });

  return (
    <div className={classes.wordContainer} key={text}>
      <span className={classes.wordStyle}>{visible ? text : '𝄞'}</span>
    </div>
  );
};
export default WordComponent;
