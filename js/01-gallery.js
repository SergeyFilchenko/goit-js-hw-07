import { galleryItems } from "./gallery-items.js";

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
  )

  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

// Реализация делегирования на div.gallery и получение url большого изображения.

// const galleryItem = document.querySelector(".gallery__item");
// const galleryLink = document.querySelector(".gallery__link");
// const galleryImage = document.querySelector(".gallery__image");

gallery.addEventListener("click", showPicture);

function showPicture(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedLink = event.target.dataset.source;

  // Открытие модального окна по клику на элементе галереи.

  // event.stopPropagation();
  event.preventDefault();

  const modal = {
    onShow: () => {
      document.addEventListener("keydown", KeyEscPress);
    },

    onClose: () => {
      document.removeEventListener("keydown", KeyEscPress);
    },
  };

  const instance = basicLightbox.create(`<img src="${selectedLink}">`, modal);
  instance.show(() => console.log("lightbox now visible"));

  // Закрытие модального окна по клику на Escape

  function KeyEscPress(event) {
    if (event.key === `Escape`) {
      instance.close(() => console.log("lightbox not visible anymore"));
    }
  }
}
