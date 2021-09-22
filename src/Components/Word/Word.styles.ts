import { makeStyles } from '@material-ui/core';
import { songDarkBlue, songRed } from '../Colors';

export interface wordStyleProps {
  visible: boolean;
  stopWord: boolean;
  textLength: number;
}

export const wordStyles = makeStyles({
  wordContainer: (props: wordStyleProps) => ({
    backgroundColor: props.stopWord ? songRed : songDarkBlue,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '250px',
    fontSize: props.visible ? '100px' : '150px',
  }),
  wordStyle: (props: wordStyleProps) => ({
    marginBottom: props.visible ? '0' : '25px',
  }),
});
