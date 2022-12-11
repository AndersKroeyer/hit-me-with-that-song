import { css } from '@emotion/react';
import { songDarkBlue, songRed } from '../Colors';

export interface wordStyleProps {
  visible: boolean;
  stopWord: boolean;
  textLength: number;
}

export const wordContainerStyle = (props: wordStyleProps) =>
  css({
    backgroundColor: props.stopWord ? songRed : songDarkBlue,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '250px',
    fontSize: props.visible ? '100px' : '150px',
  });

export const wordStyle = (visible: boolean) =>
  css({
    marginBottom: visible ? '0' : '25px',
  });
