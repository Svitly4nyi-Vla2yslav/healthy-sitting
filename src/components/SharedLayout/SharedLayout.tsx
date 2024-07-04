import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import React from 'react';
// import { Background } from '../Background/Background';

const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      {/* <Background/> */}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
