import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import ProjectPage from './pages/ProjectPage/ProjectPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import React from 'react';
// import Home from './pages/HomePage/HomePage';
// import RewardsPage from './pages/RewardsPage/RewardsPage';
// import ContactPage from './pages/ContactPage/ContactPage';
// import AboutUs from './pages/AboutUs/AboutUs';
// import Background from './components/Background/Background';
const Home = React.lazy(() => import('./pages/HomePage/HomePage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage/ContactPage'));
const ProjectPage = React.lazy(() => import('./pages/ProjectPage/ProjectPage'));
// const RewardsPage = React.lazy(() => import('./pages/RewardsPage/RewardsPage'));
// const AboutUs = React.lazy(() => import('./pages/AboutUs/AboutUs'));

const App: React.FC = () => {
  return (
    <AppWrapper>
        <Routes>
          {/* Основний редирект на /home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* SharedLayout обгортає всі підшляхи */}
          <Route path="/" element={<SharedLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Можна додати інші маршрути тут */}
          </Route>

          {/* Обробка невизначених маршрутів */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </AppWrapper>
  );
};

export default App;