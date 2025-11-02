import simpleRestProvider from 'ra-data-simple-rest';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const dataProvider = simpleRestProvider(API_URL, (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  // Add authentication headers if needed
  // const token = localStorage.getItem('token');
  // options.headers.set('Authorization', `Bearer ${token}`);
  return axios({ url, ...options }).then(response => ({
    data: response.data,
    total: parseInt(response.headers['content-range'].split('/').pop(), 10),
  }));
});

export default dataProvider;
