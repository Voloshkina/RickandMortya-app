import React, { useState, useEffect } from 'react';

import './assets/scss/style.scss';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import CardsList from './components/CardsList';
import AboutCharacter from './components/AboutCharacter';

function App() {
  const page = 1;
  const [fetchedData, setFetchedData] = useState([]);
  const { results } = fetchedData;
  let url = ` https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(url).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [url]);

  return (
    <AboutCharacter />
    // <div className='container'>
    //   <Logo />
    //   <SearchBar />
    //   <CardsList results={results} />

    // </div>
  );
}

export default App;
