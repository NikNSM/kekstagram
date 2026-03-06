import { getArrayPhotos } from "./mocks/get-array-photos.js";
import { drawPhotosUser } from "./draw-photos-user.js";

const containerPhotosUsers = document.querySelector('section.pictures.container')
const photosUsers = getArrayPhotos();

photosUsers.forEach((photo) => {
  drawPhotosUser(photo, containerPhotosUsers)
})
