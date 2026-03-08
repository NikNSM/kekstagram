const CLASS_HIDDEN = 'hidden';
const CLASS_MODAL_OPEN = 'modal-open'
const windowPhotoUser = document.querySelector('section.big-picture');
const elementCommentLi = windowPhotoUser.querySelector('ul.social__comments li');
const bodyElement = document.querySelector('body')

const closeModalWindow = (evt) => {
  evt.preventDefault();
  windowPhotoUser.classList.add(CLASS_HIDDEN);
  bodyElement.classList.remove(CLASS_MODAL_OPEN)
  document.removeEventListener('keydown', closeModalWimdowKeydownEsc)
};

const closeModalWimdowKeydownEsc = (evt) => {
  if(evt.key === 'Escape'){
    closeModalWindow(evt);
  }
}

const drawCommentUser = ({comments}, container) => {
  const listComments = container.querySelectorAll('li');

  const drawDataComments = (elementComment, {avatar, name, message}) => {
    const imgComment = elementComment.querySelector('img');
    imgComment.src = avatar;
    imgComment.alt = name;
    elementComment.querySelector('p').textContent = message;
  }

  if (listComments.length > comments.length) {
    listComments.forEach((item, index) => {
      if (index + 1 > comments.length) {
        item.remove();
      }
    })
  }

  comments.forEach((comment, index) => {
    if (listComments.length - 1 >= index) {
      drawDataComments(listComments[index], comment)
      return
    }

    const commentElement = elementCommentLi.cloneNode(true);
    drawDataComments(commentElement, comment);
    container.append(commentElement);
  })
}


const openWindowPhotoUser = (photo) => {
  const containerComments = windowPhotoUser.querySelector('ul.social__comments');
  const buttonClose = windowPhotoUser.querySelector('button[type="reset"]')

  bodyElement.classList.add(CLASS_MODAL_OPEN);
  windowPhotoUser.classList.remove(CLASS_HIDDEN);
  windowPhotoUser.querySelector('button.social__comments-loader').classList.add(CLASS_HIDDEN);
  windowPhotoUser.querySelector('div.social__comment-count').classList.add(CLASS_HIDDEN);

  windowPhotoUser.querySelector('div.big-picture__img img').src = photo.url;
  windowPhotoUser.querySelector('div.big-picture__social p.social__likes span')
    .textContent = photo.likes;
  windowPhotoUser.querySelector('div.big-picture__social p.social__caption').textContent = photo.description;

  drawCommentUser(photo, containerComments)

  buttonClose.addEventListener('click', closeModalWindow)
  document.addEventListener('keydown', closeModalWimdowKeydownEsc)
}

export {openWindowPhotoUser}
