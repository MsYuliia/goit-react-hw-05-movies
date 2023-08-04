import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Api';
import { Loader } from '../Loader/Loader';
import {
  ReviewList,
  ReviewName,
  ReviewText,
  ErrorContainer,
  ReviewError,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    const getReviewsAPI = async id => {
      setIsLoader(true);
      try {
        const { results } = await getReviews(id);
        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    };
    getReviewsAPI(movieId);
  }, [movieId]);

  return (
    <>
      {isLoader && <Loader />}
      {error && <p>Oops...Sorry, something went wrong</p>}
      {reviews.length > 0 && (
        <ReviewList>
          {reviews.map(review => (
            <li key={review.id}>
              <ReviewName>Author: {review.author}</ReviewName>
              <ReviewText>{review.content}</ReviewText>
            </li>
          ))}
        </ReviewList>
      )}
      {reviews.length === 0 && (
        <ErrorContainer>
          <ReviewError>
            Sorry, we don't have any reviews for this movie.
          </ReviewError>
        </ErrorContainer>
      )}
    </>
  );
};

export default Reviews;
