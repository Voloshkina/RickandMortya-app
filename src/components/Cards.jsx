import { Link } from 'react-router-dom';

import { Loader } from './index';
import '../assets/scss/style.scss';

export const Cards = ({ results, isLoading = true }) => {
  return (
    <>
      {isLoading && <Loader />}

      {results &&
        results.length > 0 &&
        results.map((elem) => {
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
        })}
    </>
  );
};
