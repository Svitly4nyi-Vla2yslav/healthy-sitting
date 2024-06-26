import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import Home from './pages/HomePage/HomePage';
import RewardsPage from './pages/RewardsPage/RewardsPage';
import ContactPage from './pages/ContactPage/ContactPage';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="project" element={<ProjectPage />}/>
          <Route path="rewards" element={<RewardsPage />}/>
          <Route path="contact" element={<ContactPage />}/>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        
      </Routes>
    </AppWrapper>
  );
};
export default App;
