import {React, useState } from 'react';
import { Container, Grid, Button, Card, CardTitle, HR } from './Admin.styled'
import { Movies } from 'components/DataBase/DataBase'
import { EditMovieForm } from './EditMovieForm'

const Admin = () => {
  const [movies, setMovies] = useState(Movies);
  const onSubmit = (v)=>{
    const index = Movies.findIndex(movie => movie.id == v.id);
    if (index != -1) {
      Movies[index] = v;
    }
  }
  const onDelete = (v)=>{
    const index = Movies.findIndex(movie => movie.id == v.id);
    if (index != -1) {
      Movies.splice(index, 1);
    }
    setMovies([...Movies]);
  };
  const handleAddMovie = ()=>{
    const newMovie = { id: Movies.length + 1, title: 'Новий фільм', imageUrl: '', genre: 'Drama', year: '2019'};
    Movies.push(newMovie);
    setMovies([...Movies]);
  };
  const handleClearMovies = ()=>{
    Movies.length = 0;
    setMovies([]);
  };
  return (
    <Container>
      <Grid>
        <Card key={-1}>
          <CardTitle>Режим редагування</CardTitle>
          <div style={{display:'flex', flexDirection:'row'}}>
            <Button className='active'>Редагування фільмів</Button>
            <Button>Редагування розкладу</Button>
          </div>
          <HR />
          <CardTitle>Керування контентом</CardTitle>
          <Button onClick={handleAddMovie}>Додати новий фільм</Button>
          <Button onClick={handleClearMovies}>Очистити список фільмів</Button>
        </Card>

        {movies.map((movie, index) => (
          <Card key={index}>
            <EditMovieForm data={movie} onSubmit={onSubmit} onDelete={onDelete}></EditMovieForm>
          </Card>
        ))}

      </Grid>
    </Container>
  );
};

export default Admin;


