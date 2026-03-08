const templatePhotosUser = document.querySelector('#picture').content;

const drawPhotosUser = (photoUser, container) => {
  const photosUserElement = templatePhotosUser.cloneNode(true);
  const img = photosUserElement.querySelector('.picture__img')
  img.src = photoUser.url;
  img.dataset.id = photoUser.id;
  photosUserElement.querySelector('.picture__likes').textContent = photoUser.likes;
  photosUserElement.querySelector('.picture__comments').textContent = photoUser.comments.length;

  container.append(photosUserElement)
}

export {drawPhotosUser}
