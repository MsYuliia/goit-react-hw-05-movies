import styled from 'styled-components';

export const SearchMoviesForm = styled.form`
  display: flex;
  gap: 20px;
  justify-content: center;

  padding-top: 30px;
  padding-bottom: 20px;

  input {
    width: 250px;
    background-color: #1a1a1a;
    border: none;
    outline: none;
    border-bottom: 2px solid #690026;
    padding-left: 15px;
    cursor: pointer;

    font-size: 16px;
    color: #ffffff;
  }

  button {
    border-radius: 50px;
    border: 2px solid #690026;
    background-color: #690026;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      border 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    padding: 8px 10px;
  }

  button:hover,
  button:focus {
    background-color: #1a1a1a;
    border: 2px solid #690026;
    box-shadow: 0px 0px 20px rgba(176, 4, 67, 1),
      2px 2px 10px rgba(176, 4, 67, 0.8), -2px -2px 10px rgba(176, 4, 67, 0.8);
  }
`;
