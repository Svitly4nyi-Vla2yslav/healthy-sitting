import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import React from 'react';
import Home from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';


const App: React.FC = () => {
  return (
    <AppWrapper>
          <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<Home />} />
          {/* <Route path="about" element={<AboutUs />} /> */}
          <Route path="project" element={<ProjectPage />} />
          {/* <Route path="rewards" element={<RewardsPage />} /> */}
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;