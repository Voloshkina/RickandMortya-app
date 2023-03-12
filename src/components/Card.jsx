import '../assets/scss/style.scss';

const Card = ({ name, image, species }) => {
  return (
    <div className='wrapper-card'>
      <img src={image} alt={name} />
      <div className='content'>
        <p>{name}</p>
        <span>{species}</span>
      </div>
    </div>
  );
};

export default Card;
