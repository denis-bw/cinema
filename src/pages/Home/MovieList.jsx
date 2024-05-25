
// MovieList.jsx
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import ReactPaginate from 'react-paginate';
import { MoviesWrapper, PaginationWrapper } from './MovieList.styled';
import image from '../../assets/Rectangle.jpg'

const movies = [
  { id: 1, image: image, title: 'Little Women', genre: 'Drama', year: '2019' },
  { id: 2, image: image, title: 'Little Women', genre: 'Drama', year: '2019' },
  { id: 3, image: image, title: 'Little Women', genre: 'Drama', year: '2019' },
  { id: 4, image: image, title: 'Little Women', genre: 'Drama', year: '2019' },
  { id: 5, image: image, title: 'Little Women', genre: 'Drama', year: '2019' },
  { id: 6, image: image, title: 'Little Women', genre: 'Drama', year: '2019' },
  { id: 7, image: image, title: 'Little Women', genre: 'Drama', year: '2019' },
  { id: 8, image: image, title: 'Little Women', genre: 'Drama', year: '2019' },
  { id: 9, image: image, title: 'Little Women', genre: 'Drama', year: '2019' },
  // ...додайте більше фільмів за потреби
];

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Встановлюємо кількість фільмів на сторінці

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentMovies = movies.slice(offset, offset + itemsPerPage);

  return (
    <>
      <MoviesWrapper>
        {currentMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </MoviesWrapper>
      <PaginationWrapper>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={Math.ceil(movies.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </PaginationWrapper>
    </>
  );
};

export default MovieList;
