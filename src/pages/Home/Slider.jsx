// Home.jsx
import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, StyledSlider, MovieLink } from './Slider.styled';
import image_1 from '../../assets/avatar.jpg';
import image_2 from '../../assets/avatar-the-last-airbender.jpg';
import image_3 from '../../assets/avengers.jpg';
import image_4 from '../../assets/blade-runner.jpg';
import image_5 from '../../assets/spider-man.jpg';
import image_6 from '../../assets/werewolf.jpg';

const movies = [
  { id: 1, title: 'Фільм 1', imageUrl: image_1 },
  { id: 2, title: 'Фільм 2', imageUrl: image_2 },
  { id: 3, title: 'Фільм 3', imageUrl: image_3 },
  { id: 4, title: 'Фільм 4', imageUrl: image_4 },
  { id: 5, title: 'Фільм 5', imageUrl: image_5 },
  { id: 6, title: 'Фільм 6', imageUrl: image_6 },
  { id: 7, title: 'Фільм 6', imageUrl: image_6 },
  { id: 8, title: 'Фільм 6', imageUrl: image_6 },
];

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
          {movies.map(movie => (
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
