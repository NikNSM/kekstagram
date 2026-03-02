import { DESCRIPTION, NAME_AUTHOR_COMMENT, COMMENTS } from "./const-moks.js";
const getRandomItegerNumber = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(Math.abs(minNumber), Math.abs(maxNumber)));
  const upper = Math.floor(Math.max(Math.abs(minNumber), Math.abs(maxNumber)));
  const result = Math.random() * (upper - lower + 1 ) + lower;

  return Math.floor(result);
}

const getRandomArrayElement = (array) => array[getRandomItegerNumber(0, array.length - 1 )];

const getUrlPhotos = (id) => `photos/${id}.jpg`;

const getUrlAvatarPhotos = () => `img/avatar-${getRandomItegerNumber(1, 6)}.svg`

const getComment = (id, index) => {
  return {
    id: Number(`${id}${index}`),
    avatar: getUrlAvatarPhotos(id),
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAME_AUTHOR_COMMENT)
  }
}

const getPhotosObject = (id) => {
  return {
    id,
    url: getUrlPhotos(id),
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomItegerNumber(15, 200),
    comments: Array.from({length: getRandomItegerNumber(0, 20)}, (_item, index) => getComment(id, index))
  }
}

const getArrayPhotos = () => Array.from({length: 25}, (_item, index) => getPhotosObject(index + 1));

export {getArrayPhotos};
