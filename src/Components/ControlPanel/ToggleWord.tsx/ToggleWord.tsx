/** @jsxImportSource @emotion/react */
import { Paper } from '@mui/material';
import { Word } from '../../types';
import { toggleWordStyle } from './ToggleWord.style';

interface ToggleWordProps extends Word {
  handleWordClick: () => void;
  idx: number;
}

function ToggleWord({
  idx,
  visible,
  stopWord,
  handleWordClick,
}: ToggleWordProps) {
  const style = toggleWordStyle({ visible, stopWord });

  return (
    <Paper elevation={2} onClick={handleWordClick} css={style}>
      <div>{idx + 1}</div>
    </Paper>
  );
}
export default ToggleWord;
