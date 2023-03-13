import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './style.scss';
import { getDataById } from '../../API';
import { BackButton, Loader } from '../../components';

export const CardDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await getDataById(id);
        setData(response);
      } catch (e) {
        console.log(e.response);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <div className='wrapper-about'>
          <BackButton />
          <div className='info'>
            <img className='info__img' src={data.image} alt={data.name} />
            <h1 className='info__title'>{data.name}</h1>
            <p className='info__content'>Information</p>
            <ul className='description'>
              <li>
                <p className='description__subtitle'>Gender</p>
                <span className='description__text'>{data.gender}</span>
              </li>
              <li>
                <p className='description__subtitle'>Status</p>
                <span className='description__text'>{data.status}</span>
              </li>
              <li>
                <p className='description__subtitle'>Specie</p>
                <span className='description__text'>{data.species}</span>
              </li>
              <li>
                <p className='description__subtitle'> Origin</p>
                <span className='description__text'>{data.origin?.name}</span>
              </li>
              <li>
                <p className='description__subtitle'>Type</p>
                <span className='description__text'>{data.type}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
