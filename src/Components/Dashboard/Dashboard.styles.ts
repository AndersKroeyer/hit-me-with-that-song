import { css } from '@emotion/react';

const styles = {
  cardFlipContainer: css({
    borderLeft: 'solid 1px white',
    borderRight: 'solid 1px white',
    borderTop: 'solid 5px white',
    borderBottom: 'solid 5px white',
  }),
  wordsContainer: css({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100vh',
    // backgroundColor: '#373737',
    background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, rgba(0,212,255,1) 100%)"
  }),
  triviaContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, rgba(0,212,255,1) 100%)",
    color: 'white',
    fontSize: '60px',
  }),
  triviaText: css({
    marginLeft: '10%',
    marginRight: '10%',
  }),
  pointsContainer: css({
    position: 'absolute',
    alignItems: "center",
    gap: "15px",
    marginTop: "15px",
    color: 'white',
    fontSize: '26px',
    left: '10px',
    width: "100%"
  }),
  nameText: css({
    fontSize: "40px"
  }),
  avatar: css({
    width: "200px",
    height: "200px",
  })
};

export default styles;
