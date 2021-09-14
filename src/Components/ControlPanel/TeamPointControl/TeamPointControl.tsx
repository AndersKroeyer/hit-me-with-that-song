import { IconButton, Card } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import styles from './TeamPointControl.style';

interface TeamPointControlProps {
  handlePointChange: (amount: number) => void;
  points: number;
  name: string;
}

const TeamPointControl = ({
  points,
  name,
  handlePointChange,
}: TeamPointControlProps) => {
  const classes = styles();
  return (
    <Card className={classes.container}>
      <span className={classes.teamName}> {name} </span>

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
};
export default TeamPointControl;
