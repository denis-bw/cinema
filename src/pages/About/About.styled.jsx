import styled from 'styled-components';

export const AdvantagesWrapper = styled.div`
  padding-left:64px ;
  padding-bottom: 64px;
  padding-right: 64px;
`;

export const AdvantagesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr); /* 3 картки в ряд за замовчуванням */

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr); /* 2 картки в ряд на планшетах */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 карта в ряд на мобільних */
  }
`;

export const AdvantagesTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  margin-top: 40px;
  color: #ffffff;
  text-align: center;
`;

export const CardWrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: calc(33.33% - 20px);
  margin-bottom: 30px;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  min-width: 250px;

  @media (max-width: 992px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;

export const Logo = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px;
  min-height: 80px;

  svg {
    width: auto;
    height: 80px;
  }
`;

export const CardDescription = styled.p`
  font-size: 1em;
  margin-top: 10px;
  color: #ffffff;
`;