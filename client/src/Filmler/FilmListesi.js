import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <FilmDetayları key={movie.id} movie={movie} />
        </Link>
        
      ))}
    </div>
  );
  }

function FilmDetayları(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
