import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import React from 'react';
const Footer = React.lazy(() => import('../Footer/Footer'));
const Header = React.lazy(() => import('../Header/Header'));

const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>{' '}
      <Footer />
    </>
  );
};

export default SharedLayout;
