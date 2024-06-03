
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Admin.styled'
import { Movies } from 'components/DataBase/DataBase'
import DefaultMovieImage from 'assets/werewolf.jpg';

const Admin = () => {
  const kek = () => {
    Movies.push(
      { id: Movies.length + 1, title: 'Фільм ' + Movies.length, imageUrl: DefaultMovieImage, genre: 'Drama', year: '2019' },
    )  
  };
  return (
    <Container>
      <button onClick={kek}>Додати фільм</button>
    </Container>
  );
};

export default Admin;
