import { useNavigate } from 'react-router-dom';

import '../assets/scss/style.scss';

export const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} className='btn'>
      <span className='btn__icon'></span>
      <span className='btn__text'>go back</span>
    </button>
  );
};
