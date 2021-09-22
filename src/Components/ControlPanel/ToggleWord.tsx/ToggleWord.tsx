import { Paper } from '@material-ui/core';
import { Word } from '../../types';
import { toggleWordStyle } from './ToggleWord.style';

interface ToggleWordProps extends Word {
  handleWordClick: () => void;
  idx: number;
}

const ToggleWord = ({
  idx,
  visible,
  stopWord,
  handleWordClick,
}: ToggleWordProps) => {
  const classes = toggleWordStyle({ visible, stopWord });

  return (
    <Paper
      elevation={2}
      onClick={handleWordClick}
      className={classes.toggleWord}
    >
      <div>{idx + 1}</div>
    </Paper>
  );
};
export default ToggleWord;
