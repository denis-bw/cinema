import React from 'react';
import { HeaderContainer, Navigation, StyledLink, Logo, ProfileButton } from './Header.styled';
import { ReactComponent as LogoSVG } from 'assets/logo.svg';

export const Header = () => {
  return (
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
    </HeaderContainer>
  );
};
