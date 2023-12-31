import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

function createInstanceGallery(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`
    )
    .join("");
}

galleryList.insertAdjacentHTML(
  "beforeend",
  createInstanceGallery(galleryItems)
);

galleryList.addEventListener("click", handlerGetOriginalSize);

function handlerGetOriginalSize(evt) {
  evt.preventDefault();
  if (evt.currentTarget === evt.target) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", handlercloseModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", handlercloseModal);
      },
    }
  );

  instance.show();

  function handlercloseModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
