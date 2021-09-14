import { makeStyles } from '@material-ui/core';

export interface wordStyleProps {
  visible: boolean;
  stopWord: boolean;
}

export const toggleWordStyle = makeStyles({
  toggleWord: (props: wordStyleProps) => ({
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bolder',
    marginBottom: '10px',
    backgroundColor: props.visible ? 'lightgreen' : 'pink',
    color: props.stopWord ? 'red' : 'black',
  }),
});
