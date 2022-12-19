import { createGlobalStyle } from 'styled-components';
import colors from './theme/colors';
import font from './theme/font';

export const theme = {
  colors,
  font,
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F4F8FA;
    font-family: ${theme.font.workSans};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
