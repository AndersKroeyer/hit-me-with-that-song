import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  cardFlipContainer: {
    borderLeft: 'solid 1px white',
    borderRight: 'solid 1px white',
    borderTop: 'solid 5px white',
    borderBottom: 'solid 5px white',
  },
  wordsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#373737',
  },
  triviaContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#373737',
    color: 'white',
    fontSize: '60px',
  },
  triviaText: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  pointsContainer: {
    position: 'absolute',
    color: 'white',
    fontSize: '26px',
    left: '10px',
  },
});

export default styles;
