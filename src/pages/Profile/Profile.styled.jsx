// ProfilePage.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled.div`
  background: #2d2d2d;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  color: #EFF40B;
`;

export const CardDetail = styled.p`
  margin: 10px 0;
  font-size: 18px;
  color: #fff;
`;

export const TextTitle = styled.h1`
    color: white;
`

export const LinkText = styled.p`
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