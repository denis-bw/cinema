
// MovieList.jsx
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import ReactPaginate from 'react-paginate';
import { MoviesWrapper, PaginationWrapper } from './MovieList.styled';
import { Movies } from 'components/DataBase/DataBase'

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Встановлюємо кількість фільмів на сторінці

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentMovies = Movies.slice(offset, offset + itemsPerPage);

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
          pageCount={Math.ceil(Movies.length / itemsPerPage)}
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
