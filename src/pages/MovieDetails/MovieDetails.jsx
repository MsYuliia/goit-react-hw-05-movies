import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'Api';
import { BsChevronLeft } from 'react-icons/bs';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  Button,
  ErrorContainer,
  MovieError,
  InfoContainer,
  MovieImg,
  Title,
  Text,
  SecondTitle,
  List,
  Info,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [data, setData] = useState({});
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const movieDetailsAPI = async id => {
      setIsLoader(true);
      try {
        const data = await getMovieDetails(id);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    };
    movieDetailsAPI(movieId);
  }, [movieId]);

  const getPhotoUrl = path => {
    return path
      ? `https://image.tmdb.org/t/p/original/${path}`
      : `https://w7.pngwing.com/pngs/786/1016/png-transparent-logo-brand-violet-coming-soon-purple-text-computer.png`;
  };

  const userScore = data.vote_average * 10;

  return (
    <>
      {isLoader && <Loader />}
      {error && (
        <Container>
          <Button to={backLinkLocation.current}>
            <BsChevronLeft size={14} /> Go back
          </Button>
          <ErrorContainer>
            <MovieError>Oops...Sorry, something went wrong :(</MovieError>
          </ErrorContainer>
        </Container>
      )}
      {!error && data && (
        <Container>
          <Button to={backLinkLocation.current}>
            <BsChevronLeft size={14} /> Go back
          </Button>

          <InfoContainer>
            <MovieImg
              src={getPhotoUrl(data.backdrop_path)}
              alt={data.title}
              width={800}
              height={450}
            />

            <div>
              <Title>{data.title}</Title>
              <Text>User score: {userScore}%</Text>
              <SecondTitle>Overview:</SecondTitle>
              <Text>{data.overview}</Text>
              <SecondTitle>Genres:</SecondTitle>
              {data.genres ? (
                <Text>{data.genres.map(genre => genre.name).join(' ')}</Text>
              ) : (
                <Text>No genres available</Text>
              )}
              <SecondTitle>Additional information:</SecondTitle>
              <List>
                <li>
                  <Info to="cast">Cast</Info>
                </li>
                <li>
                  <Info to="reviews">Reviews</Info>
                </li>
              </List>
            </div>
          </InfoContainer>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
