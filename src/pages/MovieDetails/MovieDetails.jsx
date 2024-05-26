import React from 'react';
import { useParams } from 'react-router-dom';
import {
  MovieDetailsWrapper,
  MovieImage,
  MovieDetailsContent,
  MovieTitle,
  MovieDescription,
  MovieInfo,
  StyledDatepickerWrapper,
} from './MovieDetails.styled';
import MovieDetailsBanner from '../../assets/MovieDetailsBanner.jpg'
import StyledDatepicker from './StyledDatepicker'; 


const StaticMovieData = {
  id: '1',
  title: 'Avatar',
  description: 'A young boy known as the Avatar must master the four elemental powers to save a world at war — and fight a ruthless enemy bent on stopping him.',
  stars: ['Gordon Cormier', 'Kiawentiio', 'Ian Ousley'],
  voteAverage: 7.3,
  voteCount: 1260,
  popularity: 100.2,
  originalTitle: 'Avatar the Last Airbender',
  genre: 'Fantasy',
  image: MovieDetailsBanner, 
};



const MovieDetails = () => {
 const { id } = useParams();
  
  // Можна використовувати static data для імітації отриманих даних
  const movie = StaticMovieData; // імітація отриманих даних з API

  return (
    <>
    <MovieDetailsWrapper>
      <MovieImage src={movie.image} alt={movie.title} />
      <MovieDetailsContent>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDescription>{movie.description}</MovieDescription>
        <MovieInfo>Starring: {movie.stars.join(', ')}</MovieInfo>
        <MovieInfo>Vote / Votes: {movie.voteAverage} / {movie.voteCount}</MovieInfo>
        <MovieInfo>Popularity: {movie.popularity}</MovieInfo>
        <MovieInfo>Original Title: {movie.originalTitle}</MovieInfo>
        <MovieInfo>Genre: {movie.genre}</MovieInfo>
      </MovieDetailsContent>
      
      </MovieDetailsWrapper>
      <StyledDatepickerWrapper>
        <StyledDatepicker />
      </StyledDatepickerWrapper>
    </>
  )
};

export default MovieDetails;
