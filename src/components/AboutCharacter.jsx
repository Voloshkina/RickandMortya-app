import '../assets/scss/style.scss';
import BackButton from './BackButton';

const AboutCharacter = ({
  id = '1',
  name,
  image,
  type = 'fmmcm',
  origin = 'nffnvc',
  species = 'dog',
  status = 'alive',
  gender = 'male',
}) => {
  const img =
    'https://cdn.pixabay.com/photo/2021/10/13/09/01/corgi-6705821__340.jpg';
  return (
    <div className='wrapper-about'>
      <BackButton />
      <div className='info'>
        <img className='info__img' src={img} alt='korgi' />
        <h1 className='info__title'>Corgi</h1>
        <p className='info__content'>Information</p>
        <ul className='description'>
          <li>
            <p className='description__subtitle'>Gender</p>
            <span className='description__text'>{gender}</span>
          </li>
          <li>
            <p className='description__subtitle'>Status</p>
            <span className='description__text'>{status}</span>
          </li>
          <li>
            <p className='description__subtitle'>Specie</p>
            <span className='description__text'>{species}</span>
          </li>
          <li>
            <p className='description__subtitle'> Origin</p>
            <span className='description__text'>{origin}</span>
          </li>
          <li>
            <p className='description__subtitle'>Type</p>
            <span className='description__text'>{type}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCharacter;
