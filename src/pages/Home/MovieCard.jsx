
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Title, Genre } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Card onClick={handleClick}>
      <Image src={movie.imageUrl} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Genre>{movie.genre} | {movie.year}</Genre>
    </Card>
  );
};

export default MovieCard;
