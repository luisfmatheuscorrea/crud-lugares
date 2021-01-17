import { createGlobalStyle } from "styled-components";
import pxtovw from '../../utils/pxtovw';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FFFFFF;
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px Roboto;
    color: var(--color-text-base);
  }

  .container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  :root {
      font-size: ${pxtovw(16)};
      overflow-x: hidden;
    }
`;

export default Global;