import React from 'react';
import { Paper } from '@material-ui/core';
import styles from './PaperButton.style';

interface PaperButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  // eslint-disable-next-line react/require-default-props
  customStyles?: any;
}
const PaperButton = ({ children, onClick, customStyles }: PaperButtonProps) => {
  const classes = styles();

  return (
    <Paper
      elevation={2}
      className={classes.toggleButton}
      onClick={onClick}
      style={customStyles}
    >
      {children}
    </Paper>
  );
};
export default PaperButton;
