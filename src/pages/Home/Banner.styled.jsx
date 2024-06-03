// Banner.styled.jsx
import styled from 'styled-components';
import BannerImg from 'assets/banner.jpg'

export const BannerWrapper = styled.div`
  background: url(${BannerImg}) no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: left;
  color: white;
  text-align: center;
  padding: 20px;
`;
export const BannerContent = styled.div`
  max-width: 600px;
  text-align: left; /* Align text to the left */
  /* padding-left: 60px; */
`;

export const BannerDescription = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

export const BannerStarring = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

export const BannerShowtimes = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

export const TicketButton = styled.button`
  background-color: #EFF40B;
  color: #121212;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9f9f5;
  }
`;