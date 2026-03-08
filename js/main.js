import { getArrayPhotos } from "./mocks/get-array-photos.js";
import { drawPhotosUser } from "./draw-photos-user.js";
import { openWindowPhotoUser } from "./open-window-photo-user.js";

const containerPhotosUsers = document.querySelector('section.pictures.container')
const photosUsers = getArrayPhotos();

containerPhotosUsers.addEventListener('click', (evt) => {
  evt.preventDefault();
  if(evt.target.matches('img.picture__img')){
    const id = evt.target.dataset.id;
    const photo = photosUsers.find((item) => item.id === Number(id))
    openWindowPhotoUser(photo)
  }
})

photosUsers.forEach((photo) => {
  drawPhotosUser(photo, containerPhotosUsers)
})
