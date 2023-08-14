import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

function createInstanceGallery(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`
    )
    .join("");
}

galleryList.insertAdjacentHTML(
  "beforeend",
  createInstanceGallery(galleryItems)
);
let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "bottom",
  captionsData: "alt",
});
