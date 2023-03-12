import { useState, useEffect } from 'react';

import { getData } from '../API';
import '../assets/scss/style.scss';
import { Logo } from '../components/Logo';
import { Cards } from '../components/Cards';
import { SearchBar } from '../components/SearchBar';

function Home() {
  const page = 2;
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData(page);
        setReceivedData(result);
      } catch (e) {
        console.log(e.response);
      }
    }
    fetchData();
  }, [page]);

  return (
    <div className='container'>
      <Logo />
      <SearchBar />
      <section className='container-cards'>
        <Cards results={receivedData} />
      </section>
    </div>
  );
}

export { Home };
