import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { Header, Navigation, NavList } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <NavList>
          <Navigation to="/">Home</Navigation>
          <Navigation to="/movies">Movies</Navigation>
        </NavList>
      </Header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
