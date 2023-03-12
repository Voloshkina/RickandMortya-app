import { useState, useEffect } from 'react';

import { getData } from '../API';
import '../assets/scss/style.scss';
import { Logo } from '../components/Logo';
import { Cards } from '../components/Cards';
import { NavPage } from '../components/NavPage';
import { SearchBar } from '../components/SearchBar';

function Home() {
  const [receivedData, setReceivedData] = useState([]);
  // const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  // const handleClickNext = () => setPage(page + 1);
  // const handleClickPrev = () => {
  //   if (page <= 1) {
  //     setPage(1);
  //   } else {
  //     setPage(page - 1);
  //   }
  // };
  const handleChange = (event) => setQuery(event.target.value);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData(query);
        setReceivedData(result);
      } catch (e) {
        console.log(e.response);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className='container'>
      <Logo />

      <SearchBar handleChange={handleChange} query={query} />

      <section className='container-cards'>
        <Cards results={receivedData} />
      </section>
      {/* 
      <NavPage
        page={page}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
      /> */}
    </div>
  );
}

export { Home };
