import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Api';
import { Loader } from '../Loader/Loader';
import {
  CastList,
  CastItem,
  CastImg,
  CastName,
  CastCharaster,
  ErrorContainer,
  CastError,
} from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    const getCastAPI = async id => {
      setIsLoader(true);
      try {
        const { cast } = await getCast(id);
        setActors(cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    };
    getCastAPI(movieId);
  }, [movieId]);

  const getPhotoUrl = path => {
    return path
      ? `https://image.tmdb.org/t/p/w200/${path}`
      : `https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png`;
  };

  return (
    <>
      {isLoader && <Loader />}
      {error && <p>Oops...Sorry, something went wrong</p>}
      {actors.length > 0 && (
        <CastList>
          {actors.map(actor => (
            <CastItem key={actor.id}>
              <CastImg
                src={getPhotoUrl(actor.profile_path)}
                alt={actor.original_name}
                width={120}
                height={170}
              />
              <CastName>{actor.original_name}</CastName>
              {actor.character.length !== 0 ? (
                <CastCharaster>Character: {actor.character}</CastCharaster>
              ) : (
                <CastCharaster>Character: Unknown</CastCharaster>
              )}
            </CastItem>
          ))}
        </CastList>
      )}
      {actors.length === 0 && (
        <ErrorContainer>
          <CastError>Sorry, we don't have any cast for this movie.</CastError>
        </ErrorContainer>
      )}
    </>
  );
};

export default Cast;
