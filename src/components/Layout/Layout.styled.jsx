import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0px 30px 40px rgba(176, 4, 67, 0.7),
    0px 2px 5px rgba(176, 4, 67, 0.8);

  padding-top: 25px;
  padding-bottom: 15px;
  padding-left: 50px;
  margin-bottom: 30px;
`;

export const NavList = styled.nav`
  display: flex;
  gap: 15px;
`;

export const Navigation = styled(NavLink)`
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;

  padding: 8px 15px;

  &.active {
    color: #690026;
    background-color: #ffffff;
    border: 2px solid #690026;
    box-shadow: 0px 0px 20px rgba(176, 4, 67, 1),
      2px 2px 10px rgba(176, 4, 67, 0.8), -2px -2px 10px rgba(176, 4, 67, 0.8);
  }
`;
