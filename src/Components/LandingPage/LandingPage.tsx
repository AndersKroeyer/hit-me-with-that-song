/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro';
import { Link } from 'react-router-dom';
import styles from './Landingpage.styles';

const test = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
});

function Landingpage() {
  return (
    <div css={test}>
      <Link to="/control-panel">Control panel</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Landingpage;
