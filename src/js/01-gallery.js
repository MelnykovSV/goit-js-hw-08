import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const gallery = document.querySelector('.gallery');
//  ==========================MARKUP CREACTION==============================
const markup = galleryItems
  .map((ele, i, arr) => {
    return `<a class="gallery__item" href = "${ele.original}" data-capture="${ele.description}"><img class="gallery__image" src="${ele.preview}" alt="${ele.description}"></a>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

// //  ==========================EVENTS HANDLING==============================

var $gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
