import { makeStyles } from '@material-ui/core';
import { songDarkBlue, songRed } from '../Colors';

export interface wordStyleProps {
  visible: boolean;
  stopWord: boolean;
}
export const wordStyles = makeStyles({
  wordContainer: (props: wordStyleProps) => ({
    backgroundColor: props.stopWord ? songRed : songDarkBlue,
    color: 'white',
    'flex-grow': '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeft: 'solid 1px white',
    borderRight: 'solid 1px white',
    borderTop: 'solid 5px white',
    borderBottom: 'solid 5px white',
    height: '250px',
    fontSize: props.visible ? '100px' : '150px',
  }),
  wordStyle: (props: wordStyleProps) => ({
    marginBottom: props.visible ? '0' : '25px',
  }),
});
