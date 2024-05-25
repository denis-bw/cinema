import React, { useState } from 'react';
import { HeaderContainer, Navigation, StyledLink, Logo, ProfileButton, BurgerButton, ModalMenu, ModalLink } from './Header.styled';
import { ReactComponent as LogoSVG } from 'assets/logo.svg';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <ProfileButton to="/profile">
          Профіль
        </ProfileButton>
        <BurgerButton onClick={toggleModal}>
          <span />
          <span />
          <span />
        </BurgerButton>
      </HeaderContainer>
      {isModalOpen && (
        <ModalMenu onClick={closeModal}>
          <ModalLink to="/" onClick={closeModal}>Головна</ModalLink>
          <ModalLink to="/about" onClick={closeModal}>Про нас</ModalLink>
          <ModalLink to="/profile" onClick={closeModal}>Профіль</ModalLink>
        </ModalMenu>
      )}
    </>
  );
};
