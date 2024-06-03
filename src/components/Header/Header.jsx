import React, { useState, useEffect } from 'react';
import { HeaderContainer, Navigation, StyledLink, Logo, ProfileButton, BurgerButton, ModalMenu, ModalLink } from './Header.styled';
import { ReactComponent as LogoSVG } from 'assets/logo.svg';
import { useAuth } from 'components/Auth/Auth';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { isLoggedIn, isAdmin } = useAuth();


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Navigation>
          <StyledLink to="/">
            Головна
          </StyledLink>
          <StyledLink to="/about">
            Про нас
          </StyledLink>
        </Navigation>
        <Logo>
          <LogoSVG />
        </Logo>
          {isAdmin && (
            <Navigation>
              <StyledLink to="/admin">
                Адмін панель
              </StyledLink>
            </Navigation>
          )} 
        <ProfileButton to="/profile">
          Профіль
        </ProfileButton>
        <BurgerButton onClick={toggleModal}>
          <span />
          <span />
          <span />
          {isAdmin && (<span />)}
        </BurgerButton>
      </HeaderContainer>
      {isModalOpen && (
        <ModalMenu onClick={closeModal}>
          <ModalLink to="/" onClick={closeModal}>Головна</ModalLink>
          <ModalLink to="/about" onClick={closeModal}>Про нас</ModalLink>
          {isAdmin && (<ModalLink to="/admin" onClick={closeModal}>Адмін панель</ModalLink>)}
          <ModalLink to="/profile" onClick={closeModal}>Профіль</ModalLink>
        </ModalMenu>
      )}
    </>
  );
};
