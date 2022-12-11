/** @jsxImportSource @emotion/react */
import { css, IconButton, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface Props {
  hintText: string;
  // eslint-disable-next-line react/require-default-props
  fontSize?: number;
}

export default function HelpTooltip({ hintText, fontSize }: Props) {
  const fsize = fontSize ?? 14;

  const styling = css({
    fontSize: `${fsize}px`,
  });
  return (
    <Tooltip arrow title={<div css={styling}>{hintText}</div>}>
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
    </Tooltip>
  );
}
