import axios from 'axios';

const API_KEY = '24543353-3824dfbf23e7b5ead533e5f72';
const BASE_URL = 'https://pixabay.com';

export const fetchData = (query, page, perPage) => {
  return axios
    .get(
      `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
};