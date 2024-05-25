// Location.styled.jsx

import styled from 'styled-components';

export const LocationWrapper = styled.div`
  padding-left:64px ;
  padding-bottom: 64px;
  padding-right: 64px;
  text-align: center;
`;

export const LocationTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const LocationIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  svg {
    width: 100%;
    height: auto;
  }
`;

export const Address = styled.p`
  font-size: 1.2em;
  color: #000;
`;

export const Map = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  
  
  iframe {
    width: 100%;
    height: 450px;
    border: none;
  }
`;
