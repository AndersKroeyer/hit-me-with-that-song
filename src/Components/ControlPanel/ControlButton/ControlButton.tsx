/** @jsxImportSource @emotion/react */
import { Button } from '@mui/material';
import React from 'react';
import { css } from '@emotion/react';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}
export default function ControlButton({ onClick, children }: Props) {
  return (
    <Button onClick={onClick} style={{ height: '70px' }} variant="outlined">
      {children}
    </Button>
  );
}
