/** @jsxImportSource @emotion/react */
import { Card, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styles from './TeamPointControl.style';

interface TeamPointControlProps {
  handlePointChange: (amount: number) => void;
  points: number;
  name: string;
}

function TeamPointControl({
  points,
  name,
  handlePointChange,
}: TeamPointControlProps) {
  return (
    <Card css={styles.container}>
      <span css={styles.teamName}> {name} </span>
      <div>
        <IconButton aria-label="delete" onClick={() => handlePointChange(-1)}>
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>
        {points}
        <IconButton aria-label="delete" onClick={() => handlePointChange(1)}>
          <ArrowUpwardIcon fontSize="inherit" />
        </IconButton>
      </div>
    </Card>
  );
}
export default TeamPointControl;
