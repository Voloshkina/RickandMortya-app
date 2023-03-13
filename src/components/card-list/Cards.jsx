import { Link } from 'react-router-dom';

import './style.scss';
import { Loader } from '../index';

export const Cards = ({ results, isLoading }) => {
  return (
    <>
      {isLoading && <Loader />}
      <section className='container-cards'>
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
      </section>
    </>
  );
};
