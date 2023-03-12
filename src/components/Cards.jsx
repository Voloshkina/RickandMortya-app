import { Link } from 'react-router-dom';

import '../assets/scss/style.scss';

export const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((elem) => {
      return (
        <Link
          className='wrapper-card'
          key={elem.id}
          to={'/card-details/' + elem.id}
        >
          <img src={elem.image} alt={elem.name} />
          <div className='content'>
            <p>{elem.name}</p>
            <span>{elem.species}</span>
          </div>
        </Link>
      );
    });
  } else {
    display = 'No Characters Found :/';
  }

  return <>{display}</>;
};
