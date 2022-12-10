/** @jsxImportSource @emotion/react */
import { Word } from '../types';
import { wordContainerStyle, wordStyle } from './Word.styles';

function WordComponent({ text, visible, stopWord }: Word) {
  const containerStyle = wordContainerStyle({
    stopWord,
    visible,
    textLength: text.length,
  });
  const style = wordStyle(visible);

  return (
    <div css={containerStyle} key={text}>
      <span css={style}>{visible ? text : '𝄞'}</span>
    </div>
  );
}
export default WordComponent;
