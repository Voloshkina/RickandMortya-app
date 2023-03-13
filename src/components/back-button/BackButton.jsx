import { useNavigate } from 'react-router-dom';

import './style.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className='btn'>
      <span className='btn__icon'></span>
      <span className='btn__text'>go back</span>
    </button>
  );
};
