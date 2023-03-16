import { useState, useEffect } from 'react';

import './style.scss';
import { getData } from '../../API';
import { useLocalStorage } from '../../utils/storage';
import { Cards, SearchBar, Logo } from '../../components';

export const Home = () => {
  const [receivedData, setReceivedData] = useState([]);
  const [query, setQuery] = useLocalStorage('query', '');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await getData(query);
        setReceivedData(result);
      } catch (e) {
        console.log(e.response);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  const handleChange = (event) => setQuery(event.target.value);

  const filtered = receivedData?.filter((elem) =>
    elem.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='container'>
      <Logo />
      <SearchBar handleChange={handleChange} query={query} />
      <Cards isLoading={isLoading} results={filtered} />
    </div>
  );
};
