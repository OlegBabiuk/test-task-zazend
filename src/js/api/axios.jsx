import axios from 'axios';
import BASE_URL from './api';

const getDate = (path, id = '') => (
  axios.get(`${BASE_URL}${path}${id}`)
    .then(result => (result.data))
);

export default getDate;
