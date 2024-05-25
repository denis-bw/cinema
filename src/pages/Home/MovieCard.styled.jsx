// MovieCard.styled.jsx
import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 100%;
  max-width: 300px;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 8px 0;
`;

export const Genre = styled.p`
  font-size: 1rem;
  color: #666;
`;
