// Home.styled.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;


export const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0 5px;
    display: flex;
    justify-content: center;

    a {
      display: block;
      width: 140px;
      height: 100%;
      border-radius: 8%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        border-radius: 8%;
        object-fit: cover;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }

      h3 {
        margin-top: 10px;
        font-size: 1.2rem;
        text-align: center;
        color: white;
      }
    }
  }
`;

export const CustomButton = styled.button`
  font-size: 1.5rem;
  line-height: 1;
  color: #fff;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  ${({ direction }) => (direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
