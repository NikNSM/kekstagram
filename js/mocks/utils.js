const getRandomItegerNumber = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(Math.abs(minNumber), Math.abs(maxNumber)));
  const upper = Math.floor(Math.max(Math.abs(minNumber), Math.abs(maxNumber)));
  const result = Math.random() * (upper - lower + 1 ) + lower;

  return Math.floor(result);
}

const getRandomArrayElement = (array) => array[getRandomItegerNumber(0, array.length - 1 )];

const getUrlPhoto = (id) => `photos/${id}.jpg`;

const getUrlAvatarPhoto = () => `img/avatar-${getRandomItegerNumber(1, 6)}.svg`

export {getRandomItegerNumber, getRandomArrayElement, getUrlPhoto, getUrlAvatarPhoto}
