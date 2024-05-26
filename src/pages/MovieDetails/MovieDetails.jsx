import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
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
import SessionTimePicker from './SessionTimePicker';
import SeatChart from './SeatChart'
import OrderButtonSection from './OrderButtonSection'


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

  const movie = StaticMovieData; // імітація отриманих даних з API

  const [date, setDate] = useState(format(Date.now(), 'dd-MM-yyyy'));
  const [dateTime, setDateTime] = useState(null);
  const [seat, setSeat] = useState(null);
  
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  
  const handleDateTimeChange = (newDate) => {
    setDateTime(newDate);
  };
  
   const handleSeatChange = (newSeat) => {
    setSeat(newSeat);
   };
  const dataM = {date,seat, dateTime}
  console.log(dataM)



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
        <StyledDatepicker onDateChange={handleDateChange} />
      </StyledDatepickerWrapper>
      <SessionTimePicker onDateTimeChange={handleDateTimeChange}/>
      <SeatChart onDataChange={handleSeatChange} />
      <OrderButtonSection/>
    </>
  )
};

export default MovieDetails;
