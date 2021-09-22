import React from 'react';
import { Paper } from '@material-ui/core';
import styles from './PaperButton.style';

interface PaperButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const PaperButton = ({ children, onClick }: PaperButtonProps) => {
  const classes = styles();

  return (
    <Paper
      elevation={2}
      className={classes.toggleButton}
      onClick={onClick}
      style={{ marginBottom: '25px' }}
    >
      {children}
    </Paper>
  );
};
export default PaperButton;
