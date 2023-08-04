import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  padding-bottom: 100px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 120px;
  height: 250px;
`;

export const CastImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
`;

export const CastName = styled.h3`
  color: #ffffff;
  font-size: 14px;

  padding-left: 5px;
`;

export const CastCharaster = styled.p`
  color: #ffffff;
  font-size: 12px;

  padding-left: 5px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CastError = styled.p`
  color: #ffffff;
  font-size: 18px;

  padding-left: 5px;
  padding-bottom: 100px;
`;
