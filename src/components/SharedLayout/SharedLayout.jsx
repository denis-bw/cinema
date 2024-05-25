import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { FooterWrapper, FooterText } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      
    <FooterWrapper>
      <FooterText>© 2024 | All Rights Reserved | Developed with by Students</FooterText>
    </FooterWrapper>  
    </>
  );
};

export default SharedLayout;
