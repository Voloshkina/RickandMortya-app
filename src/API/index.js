import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getData = (page) => {
  return axios.get(`${url}/?page=${page}`).then(({ data }) => data.results);
};

export const getDataById = (id) => {
  return axios.get(`${url}/${id}`).then(({ data }) => data);
};
