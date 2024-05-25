// MovieList.styled.jsx
import styled from 'styled-components';

export const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  justify-items: center;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  margin-top: 40px;
`;
