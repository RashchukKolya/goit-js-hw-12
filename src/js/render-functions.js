import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

function createGallery(images) {
  const imgListItems = images.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) =>
      (acc += `
        <a class="photo-card" href="${largeImageURL}">
          <img class="photo-img" src="${webformatURL}" alt="${tags}" loading="${largeImageURL}" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${likes}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${views}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${downloads}
            </p>
          </div>
        </a>`),
    ''
  );
  gallery.insertAdjacentHTML('beforeend', imgListItems);
  lightbox.refresh();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}
export { createGallery, clearGallery, showLoader, hideLoader };
