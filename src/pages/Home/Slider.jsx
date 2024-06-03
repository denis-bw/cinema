// Home.jsx
import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, StyledSlider, MovieLink } from './Slider.styled';

import { Movies } from 'components/DataBase/DataBase'

const Slider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
    
  };

  return (
    <Container>
      
        <StyledSlider ref={sliderRef} {...settings}>
          {Movies.map(movie => (
            <div key={movie.id}>
              <MovieLink to={`/movie/${movie.id}`}>
                <img src={movie.imageUrl} alt={movie.title} />
                <h3>{movie.title}</h3>
              </MovieLink>
            </div>
          ))}
        </StyledSlider>
       
    </Container>
  );
};

export default Slider;
