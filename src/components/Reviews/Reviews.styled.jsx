import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding-bottom: 100px;
`;

export const ReviewName = styled.h3`
  color: #ffffff;
  font-size: 20px;
  border-bottom: 2px solid #690026;

  margin-bottom: 8px;
`;

export const ReviewText = styled.p`
  max-width: 900px;
  color: #ffffff;
  font-size: 16px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReviewError = styled.p`
  color: #ffffff;
  font-size: 18px;

  padding-left: 5px;
  padding-bottom: 100px;
`;
