import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
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

export const IconWrapper = styled.div`
  display: inline-block;
  margin-right: 8px;

  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
`;
