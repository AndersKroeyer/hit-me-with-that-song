import { makeStyles } from '@material-ui/core/styles';

export const columnMargin = {
  marginBottom: '100px',
  marginTop: '100px',
};

export const styles = makeStyles({
  outerMostContainer: {
    height: '100vh',
    width: '100%',
  },
  controlPanelContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '100px',
    marginRight: '100px',
    height: '100%',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    ...columnMargin,
  },
  wordColumnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    ...columnMargin,
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
  triviaToggle: {
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
  },
});
