import { galleryItems } from "./gallery-items.js";

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) => `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);


let lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData:"alt" });