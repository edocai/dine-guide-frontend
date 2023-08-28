import axios from 'axios';

export default axios.create({
  baseURL: 'https://damp-dawn-18138-5dda42a53dde.herokuapp.com/api/v1/restaurants',
});
