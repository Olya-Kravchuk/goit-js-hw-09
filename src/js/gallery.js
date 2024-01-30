import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "./images";

const galleryContainer = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery-link', {
  overlayOpacity: 0.9,
  captionsData: "alt",
  captionDelay: 500
});
renderGallery(images);

function renderGallery(images) {
  const markup = images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');

  galleryContainer.innerHTML = `<ul class="gallery-list">${markup}</ul>`;
}

