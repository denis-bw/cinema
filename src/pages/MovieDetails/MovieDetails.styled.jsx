// src/pages/MovieDetails.styled.jsx
import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0px;
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    gap: 60px
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 300px;
    height: auto;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const MovieDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const MovieTitle = styled.h1`
  margin-bottom: 20px;
`;

export const MovieDescription = styled.p`
  margin-bottom: 20px;
`;

export const MovieInfo = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const StyledDatepickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`