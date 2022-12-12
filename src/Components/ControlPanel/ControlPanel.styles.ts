import { css } from '@emotion/react';

// eslint-disable-next-line import/prefer-default-export
export const styles = {
  outerMostContainer: css({
    height: '100vh',
    width: '100%',
  }),
  topLeftControls: css({
    position: "absolute",
    display: "flex",
    top: 0,
    left: 15
  }),
  controlPanelContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '100px',
    marginRight: '100px',
    height: '100%',
  }),
  columnContainer: css({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowX: 'hidden',
    marginBottom: '100px',
    marginTop: '100px',
  }),
  columnScrollContainer: css({
    overflowY: 'scroll',
    height: '100%',
    width: '100%',
    boxSizing: 'content-box',
    overflowX: 'hidden',
    paddingRight: '17px',
  }),
  wordColumnContainer: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: '100px',
    marginTop: '100px',
  }),
  pickSong: css({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    padding: '15px',
    borderLeft: '5px solid white',
    marginLeft: '1px',
    marginTop: '5px',
  }),
  songTitle: css({
    fontWeight: 'bolder',
    fontSize: '18px',
  }),
};
