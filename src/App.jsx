import { Outlet } from 'react-router-dom';

import './assets/scss/style.scss';

export const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
