/** @jsxImportSource @emotion/react */
import { Button } from '@mui/material';
import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';

const styles = {
  playGameButtonContainer: css({
    position: 'absolute',
    top: 25,
    right: 150,
  }),
};

function openInNewTab(url: string) {
  window.open(url, '_blank');
}

function PlayGameButton() {
  const location = useLocation();
  const onPlayClick = () => {
    const route = location.pathname;
    console.log('route', route);
    openInNewTab(`${route}/control-panel`);
  };

  return (
    <div css={styles.playGameButtonContainer}>
      <Button variant="contained" onClick={onPlayClick}>
        Play the game
      </Button>
    </div>
  );
}

export default PlayGameButton;
