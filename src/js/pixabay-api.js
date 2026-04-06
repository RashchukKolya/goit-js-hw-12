import axios from 'axios';

const API_KEY = '54530633-d87da1398ffb7ca41953b047e';
const BASE_URL = 'https://pixabay.com/api/';

export default function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(resp => {
      return resp.data;
    });
}
