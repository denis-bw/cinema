import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin-right: 15px;
  border: 1px solid #989898;
  padding: 10px 20px;
  border-radius: 20px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  
  &.active {
    border-color: #EFF40B;
    color: #EFF40B;
  }

  &:hover {
    border-color: #EFF40B;
    color: #EFF40B;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  svg {
    width: 180px;
    height: 48px;
    fill: white;
  }
`;

export const ProfileButton = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  border: 1px solid #989898;
  padding: 10px 20px;
  border-radius: 20px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;

  &.active {
    border-color: #EFF40B;
    color: #EFF40B;
  }

  &:hover {
    border-color: #EFF40B;
    color: #EFF40B;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  display: none;
  margin-right: 10px;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 100%;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const ModalMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  z-index: 100;
`;

export const ModalLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: 10px 0;
  border: 1px solid #989898;
  padding: 10px 20px;
  border-radius: 20px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  
  &.active {
    border-color: #EFF40B;
    color: #EFF40B;
  }

  &:hover {
    border-color: #EFF40B;
    color: #EFF40B;
  }
`;
