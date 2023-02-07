import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
//  ==========================MARKUP CREACTION==============================
const markup = galleryItems
  .map(item => {
    return `<a class="gallery__item" href = "${item.original}" data-capture="${item.description}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></a>`;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

// //  ==========================EVENTS HANDLING==============================

const lightboxGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
