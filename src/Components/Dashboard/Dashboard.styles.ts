import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
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
});

export default styles;
