import getImagesByQuery from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

let page = 1;

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', e => {
  showLoader();
  e.preventDefault();
  hideLoadMoreButton();
  clearGallery();
  const query = form.elements.searchText.value;
  getImagesByQuery(query, page)
    .then(data => {
      if (data.hits.length > 0) {
        createGallery(data.hits);
        data.totalHits > 15 * page
          ? showLoadMoreButton()
          : hideLoadMoreButton();
      } else {
        iziToast.info({
          position: 'center',
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    })
    .catch(err => {
      iziToast.error({
        position: 'center',
        title: 'Error',
        message: 'Something went wrong. Try again later',
      });
      console.error(err);
    })
    .finally(hideLoader());
});

loadMoreBtn.addEventListener('click', () => {
  page++;
  hideLoadMoreButton();
  showLoader();
  const query = form.elements.searchText.value;
  getImagesByQuery(query, page)
    .then(data => {
      createGallery(data.hits);
      if (data.totalHits > 15 * page) {
        showLoadMoreButton();
        const items = document.querySelectorAll('.photo-card');
        window.scrollBy({
          top: Number(
            3 * items[items.length - 1].getBoundingClientRect().height
          ),
          behavior: 'smooth',
        });
      } else {
        hideLoadMoreButton();
        iziToast.info({
          position: 'center',
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    })
    .catch(err => console.error(err))
    .finally(hideLoader());
});
