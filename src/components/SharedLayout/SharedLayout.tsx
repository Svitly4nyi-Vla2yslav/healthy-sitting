import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import { Background } from '../Background/Background';

const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
