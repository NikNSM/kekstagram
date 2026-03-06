const templatePhotosUser = document.querySelector('#picture').content;

const drawPhotosUser = (photoUser, container) => {
  const photosUserElement = templatePhotosUser.cloneNode(true);

  photosUserElement.querySelector('.picture__img').src = photoUser.url;
  photosUserElement.querySelector('.picture__likes').textContent = photoUser.likes;
  photosUserElement.querySelector('.picture__comments').textContent = photoUser.comments.length;

  container.append(photosUserElement)
}

export {drawPhotosUser}
