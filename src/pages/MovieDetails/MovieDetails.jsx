import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Детальна інформація про фільм {id}</h1>
      {/* Інформація про фільм */}
    </div>
  );
};

export default MovieDetails;
