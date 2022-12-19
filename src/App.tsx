import React from 'react';
import Header from './components/molecules/Header';
import SavingGoals from './components/templates/SavingGoals';
import GlobalStyle from './globalStyles';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SavingGoals />
    </>
  );
}
