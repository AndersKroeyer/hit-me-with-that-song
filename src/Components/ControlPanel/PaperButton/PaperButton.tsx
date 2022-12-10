import { Paper } from '@mui/material';
import React from 'react';
import styles from './PaperButton.style';

interface PaperButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  // eslint-disable-next-line react/require-default-props
  customStyles?: any;
}
function PaperButton({ children, onClick, customStyles }: PaperButtonProps) {
  return (
    <Paper elevation={2} css={styles} onClick={onClick} style={customStyles}>
      {children}
    </Paper>
  );
}
export default PaperButton;
