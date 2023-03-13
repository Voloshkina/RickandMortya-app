import { Outlet } from 'react-router-dom';

import './main.scss';

export const App = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
