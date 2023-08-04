import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  padding-top: 15px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const MovieItem = styled.li`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 20px 5px;
  margin-bottom: 15px;

  &:hover {
    background-color: #1a1a1a;
    box-shadow: 0px 0px 20px rgba(176, 4, 67, 1),
      2px 2px 10px rgba(176, 4, 67, 0.8), -2px -2px 10px rgba(176, 4, 67, 0.8);
    transform: scale(1.03);
  }

  &:focus {
    background-color: #1a1a1a;
    box-shadow: 0px 0px 20px rgba(176, 4, 67, 1),
      2px 2px 10px rgba(176, 4, 67, 0.8), -2px -2px 10px rgba(176, 4, 67, 0.8);
    transform: scale(1.03);
  }
`;

export const MovieCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  text-decoration: none;
  text-align: center;
`;

export const MovieImg = styled.img`
  object-fit: cover;
`;

export const MovieTitle = styled.h3`
  color: #ffffff;
`;
