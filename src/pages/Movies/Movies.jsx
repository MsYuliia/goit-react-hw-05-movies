import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovies } from 'Api';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovie = async value => {
      setIsLoader(true);
      try {
        const { results, total_results } = await getSearchMovies(value);
        if (total_results === 0) {
          toast.error('Sorry, there is no movies with this title.');
          return;
        }
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    };
    if (query) {
      searchMovie(query);
    }
  }, [query, setSearchParams]);

  const handleFormSubmit = value => {
    setSearchParams({ query: value.trim() });
  };

  return (
    <div>
      <SearchMovies onSubmit={handleFormSubmit} />
      {isLoader && <Loader />}
      {error && <p>Oops...Sorry, something went wrong</p>}
      {movies.length !== 0 && <MoviesList movies={movies} />}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};

export default Movies;
