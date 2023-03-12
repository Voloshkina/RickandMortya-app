import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getData = (query) => {
  return axios
    .get(`${url}/?name=${query}`)
    .then(({ data }) =>
      data.results.sort((a, b) => (a.name > b.name ? 1 : -1))
    );
};

export const getDataById = (id) => {
  return axios.get(`${url}/${id}`).then(({ data }) => data);
};
