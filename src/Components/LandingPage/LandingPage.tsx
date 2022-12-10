/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import styles from './Landingpage.styles';

function Landingpage() {
  return (
    <div css={styles}>
      <Link to="/control-panel">Control panel</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Landingpage;
