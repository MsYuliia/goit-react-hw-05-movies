import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  MovieList,
  MovieCard,
  MovieItem,
  MovieImg,
  MovieTitle,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const getPhotoUrl = path => {
    return path
      ? `https://image.tmdb.org/t/p/w500${path}`
      : `https://img.freepik.com/free-vector/coming-soon-black-backgroun-design_1017-37033.jpg`;
  };

  return (
    <MovieList>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <MovieCard to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieImg
              src={getPhotoUrl(movie.poster_path)}
              alt={movie.title || movie.name}
              width={170}
              height={240}
            />
            <MovieTitle>{movie.title || movie.name}</MovieTitle>
          </MovieCard>
        </MovieItem>
      ))}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
