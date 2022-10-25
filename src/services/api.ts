import axios from 'axios';

const api = axios.create({
  baseURL: 'https://esports-api.lolesports.com/persisted/gw',
  headers: { 'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z' },
});

export default api;
