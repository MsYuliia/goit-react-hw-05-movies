import axios from 'axios';

const KEY = 'b2c93d478abf3d42fc12e3208c9f4463';
const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getTrendMovies = async () => {
  const { data } = await moviesApi.get('trending/all/day', {
    params: { api_key: KEY },
  });
  return data;
};

export const getSearchMovies = async value => {
  const { data } = await moviesApi.get(
    `search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
    {
      params: { api_key: KEY },
    }
  );
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await moviesApi.get(`/movie/${id}?language=en-US`, {
    params: { api_key: KEY },
  });
  return data;
};

export const getCast = async id => {
  const { data } = await moviesApi.get(`movie/${id}/credits`, {
    params: { api_key: KEY },
  });
  return data;
};

export const getReviews = async id => {
  const { data } = await moviesApi.get(`movie/${id}/reviews`, {
    params: { api_key: KEY },
  });
  return data;
};
