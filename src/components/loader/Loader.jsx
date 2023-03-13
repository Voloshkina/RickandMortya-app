import './style.scss';
import loader from '../../assets/img/loader.svg';

export const Loader = () => {
  return (
    <div className='loader'>
      <img className='loader__img' src={loader} alt='Loader' />
    </div>
  );
};
