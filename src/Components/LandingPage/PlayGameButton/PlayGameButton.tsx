/** @jsxImportSource @emotion/react */
import { Button } from '@mui/material';
import { css } from '@emotion/react';
import HelpTooltip from '../../../Common/HelpTooltip/HelpTooltip';

const styles = {
  playGameButtonContainer: css({
    position: 'absolute',
    top: 22,
    right: 80,
  }),
  helpIconContainer: css({
    position: 'relative',
    top: '0px',
    right: '3px',
  }),
};

function openInNewTab(url: string) {
  window.open(url, '_blank');
}

function PlayGameButton() {
  const onPlayClick = () => {
    const route = window.location.href;
    openInNewTab(`${route}/control-panel`);
    openInNewTab(`${route}/dashboard`);
  };

  return (
    <div css={styles.playGameButtonContainer}>
      <span css={styles.helpIconContainer}>
        <HelpTooltip hintText="The button will try to open the game screen and control panel in two new tabs, the browser popup blocker might need to be disabled" />
      </span>
      <Button variant="contained" onClick={onPlayClick}>
        Hit the song
      </Button>
    </div>
  );
}

export default PlayGameButton;
