import { DESCRIPTION, NAME_AUTHOR_COMMENT, COMMENTS } from "./const-moks.js";
import { getRandomArrayElement, getRandomItegerNumber, getUrlPhoto, getUrlAvatarPhoto } from "./utils.js";

const getComment = (id, index) => {
  return {
    id: Number(`${id}${index}`),
    avatar: getUrlAvatarPhoto(id),
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAME_AUTHOR_COMMENT)
  }
}

const getPhotosObject = (id) => {
  return {
    id,
    url: getUrlPhoto(id),
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomItegerNumber(15, 200),
    comments: Array.from({length: getRandomItegerNumber(0, 20)}, (_item, index) => getComment(id, index))
  }
}

const getArrayPhotos = () => Array.from({length: 25}, (_item, index) => getPhotosObject(index + 1));

export {getArrayPhotos};
