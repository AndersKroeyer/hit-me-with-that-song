import { Link } from 'react-router-dom';
import styles from './Landingpage.styles';

function Landingpage() {
  const classes = styles();
  return (
    <div className={classes.landingPageContainer}>
      <Link to="/control-panel">Control panel</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Landingpage;
