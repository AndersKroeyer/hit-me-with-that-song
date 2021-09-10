import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  controlPanelContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '100px',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  pickSong: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    padding: '20px',
    width: '100%',
  },
  songTitle: {
    fontWeight: 'bolder',
    fontSize: '18px',
  },
});

export default styles;
