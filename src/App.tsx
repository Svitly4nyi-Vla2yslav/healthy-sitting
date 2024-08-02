import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

import { AppWrapper } from './App.styled';

import React, { Suspense } from 'react';
import { Spiner } from './components/Spiner/Spiner';

const AboutUs = React.lazy(() => import('./pages/AboutUs/AboutUs'));
const Home = React.lazy(() => import('./pages/HomePage/HomePage'));
const RewardsPage = React.lazy(() => import('./pages/RewardsPage/RewardsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage/ContactPage'));
const ProjectPage = React.lazy(() => import('./pages/ProjectPage/ProjectPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage/ErrorPage'));

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route path="/" element={<Navigate to="*" />} />
          <Route path="/" element={<SharedLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="project" element={<ProjectPage />} />
            <Route path="rewards" element={<RewardsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </AppWrapper>
  );
};

export default App;
