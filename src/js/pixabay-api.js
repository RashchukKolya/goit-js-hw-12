import axios from 'axios';

const API_KEY = '54530633-d87da1398ffb7ca41953b047e';
const BASE_URL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });
  return response.data;
}
