import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-left: 35px;
  margin-right: 35px;
`;

export const Button = styled(Link)`
  display: inline-block;
  border-radius: 50px;
  background-color: #ffffff;
  color: #690026;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 8px 15px 8px 10px;
  margin-bottom: 50px;

  &:hover {
    background-color: #1a1a1a;
    color: #ffffff;
    box-shadow: 0px 0px 20px rgba(176, 4, 67, 1),
      2px 2px 10px rgba(176, 4, 67, 0.8), -2px -2px 10px rgba(176, 4, 67, 0.8);
  }

  &:focus {
    background-color: #1a1a1a;
    color: #ffffff;
    box-shadow: 0px 0px 20px rgba(176, 4, 67, 1),
      2px 2px 10px rgba(176, 4, 67, 0.8), -2px -2px 10px rgba(176, 4, 67, 0.8);
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieError = styled.p`
  color: #ffffff;
  font-size: 18px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 70px;

  padding-bottom: 50px;
`;

export const MovieImg = styled.img`
  object-fit: cover;
  box-shadow: 200px 0 150px -20px rgba(176, 4, 67, 0.4),
    100px 0 50px -10px rgba(176, 4, 67, 0.3),
    50px 0 25px -5px rgba(176, 4, 67, 0.3),
    10px 0 10px -1px rgba(176, 4, 67, 0.3);
`;

export const Title = styled.h1`
  color: #ffffff;

  margin-bottom: 20px;
`;

export const Text = styled.p`
  max-width: 550px;
  color: #ffffff;
  font-size: 16px;

  margin-bottom: 20px;
`;

export const SecondTitle = styled.h2`
  color: #ffffff;
  font-size: 20px;
  border-bottom: 2px solid #690026;

  margin-bottom: 12px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Info = styled(Link)`
  display: flex;
  justify-content: center;
  width: 80px;
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid #690026;
  background-color: #ffffff;
  font-weight: bold;
  color: #690026;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding-top: 6px;
  padding-bottom: 8px;

  &:hover {
    background-color: #1a1a1a;
    color: #ffffff;
    box-shadow: 0px 0px 20px rgba(176, 4, 67, 1),
      2px 2px 10px rgba(176, 4, 67, 0.8), -2px -2px 10px rgba(176, 4, 67, 0.8);
  }

  &:focus {
    background-color: #1a1a1a;
    color: #ffffff;
    box-shadow: 0px 0px 20px rgba(176, 4, 67, 1),
      2px 2px 10px rgba(176, 4, 67, 0.8), -2px -2px 10px rgba(176, 4, 67, 0.8);
  }
`;
