import { css } from "@emotion/react";

export interface wordStyleProps {
  visible: boolean;
  stopWord: boolean;
}

export const toggleWordStyle = (props: wordStyleProps) => css({
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bolder',
    marginBottom: '10px',
    backgroundColor: props.visible ? 'lightgreen' : 'pink',
    color: props.stopWord ? 'red' : 'black',
  })
