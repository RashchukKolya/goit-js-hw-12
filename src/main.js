import getImagesByQuery from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  showLoader();
  e.preventDefault();
  clearGallery();
  const query = form.elements.searchText.value;
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          position: 'center',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(err => console.error(err))
    .finally(hideLoader());
});
