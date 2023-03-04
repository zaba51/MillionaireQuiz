import { FC } from 'react';
import { Wrapper } from 'views/App.styles'
import AppProviders from 'containers/AppProviders/AppProviders';
import { Routes, Route, Navigate } from 'react-router-dom'
import MenuSection from 'views/MenuSection'
import GameSection from './GameSection';
import InfoSection from './InfoSection';

const App: FC = () => {
  return (
    <AppProviders>
      <Wrapper>
        <Routes>
          <Route path="/menu" element={<MenuSection />} />
          <Route path="/game" element={<GameSection />} />
          <Route path="/info" element={<InfoSection />} />
          <Route path="/" element={<Navigate replace to="/menu" />} />
        </Routes>
      </Wrapper>
    </AppProviders>
  );
}

export default App;
