import { css } from "@emotion/react";

export const columnMargin = css({
  marginBottom: '100px',
  marginTop: '100px',
});

export const styles = {
  outerMostContainer: css({
    height: '100vh',
    width: '100%',
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
    ...columnMargin,
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
    ...columnMargin,
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
