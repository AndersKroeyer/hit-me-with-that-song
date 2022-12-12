/** @jsxImportSource @emotion/react */
import { Button } from '@mui/material';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
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

interface Props {
  quizKey: string;
  disabled: boolean;
}

function PlayGameButton({ quizKey, disabled }: Props) {
  const navigate = useNavigate();

  const onPlayClick = () => {
    if (disabled) return;

    const route = window.location.href;
    const slash = route.slice(-1) === '/' ? '' : '/';

    navigate(`/control-panel?quiz=${quizKey}`);
    openInNewTab(`${route}${slash}dashboard`);
  };

  return (
    <div css={styles.playGameButtonContainer}>
      <span css={styles.helpIconContainer}>
        <HelpTooltip hintText="The button will try to open the game screen and control panel in two new tabs, the browser popup blocker might need to be disabled" />
      </span>
      <Button variant="contained" onClick={onPlayClick} disabled={disabled}>
        Hit the song
      </Button>
    </div>
  );
}

export default PlayGameButton;
