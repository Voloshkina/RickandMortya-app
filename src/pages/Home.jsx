import { useState, useEffect } from 'react';

import { getData } from '../API';
import '../assets/scss/style.scss';
import { Cards } from '../components/Cards';
import { SearchBar, Logo } from '../components';

function Home() {
  const [receivedData, setReceivedData] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => setQuery(event.target.value);

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

  const filtered = receivedData?.filter((elem) =>
    elem.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='container'>
      <Logo />
      <SearchBar handleChange={handleChange} query={query} />

      <section className='container-cards'>
        <Cards isLoading={isLoading} results={filtered} />
      </section>
    </div>
  );
}

export { Home };
