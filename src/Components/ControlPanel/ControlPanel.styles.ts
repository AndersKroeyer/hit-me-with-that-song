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
    overflow: 'hidden',
    overflowX: 'hidden',
    ...columnMargin,
  },
  columnScrollContainer: {
    overflowY: 'scroll',
    height: '100%',
    width: '100%',
    paddingRight: '17px',
    boxSizing: 'content-box',
    overflowX: 'hidden',
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
    padding: '15px',
    borderLeft: '5px solid white',
    marginLeft: '1px',
    marginTop: '5px',
  },
  songTitle: {
    fontWeight: 'bolder',
    fontSize: '18px',
  },
});
