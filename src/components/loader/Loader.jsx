import loader from '../../assets/img/loader.svg';

import './style.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <img className='loader__img' src={loader} alt='Loader' />
    </div>
  );
};

export { Loader };
