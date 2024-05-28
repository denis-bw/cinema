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
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const CardDetail = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #555;
`;

export const TextTitle = styled.h1`
    color: white;
`