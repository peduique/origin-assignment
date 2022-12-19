import React from 'react';
import Header from './components/molecules/Header';
import Content from './components/templates/Content';
import GlobalStyle from './globalStyles';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
    </>
  );
}
