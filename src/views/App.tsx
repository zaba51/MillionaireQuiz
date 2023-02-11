import React, { FC } from 'react';
import logo from './logo.svg';
import { Wrapper } from 'views/App.styles'
import GlobalStyle from 'assets/styles/GlobalStyle';
import ProgressBar from 'containers/ProgressBar/ProgressBar'
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme'
import QuizSection from 'containers/QuizSection/QuizSection'
import { Provider } from 'react-redux';
import { store } from 'store/store';
import AppProviders from 'containers/AppProviders/AppProviders';
import { Routes, Route, Navigate } from 'react-router-dom'
import MenuSection from 'views/MenuSection'
import GameSection from './GameSection';

const App: FC = () => {
  return (
    <AppProviders>
      <Wrapper>
        <Routes>
          <Route path="/menu" element={<MenuSection />} />
          <Route path="/game" element={<GameSection />} />
          <Route path="/" element={<Navigate replace to="/menu" />} />
        </Routes>
      </Wrapper>
    </AppProviders>
  );
}

export default App;
