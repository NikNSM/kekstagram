const CLASS_HIDDEN = 'hidden';
const CLASS_MODAL_OPEN = 'modal-open';
const STEP_COUNT_COMMENTS = 5;
const windowPhotoUser = document.querySelector('section.big-picture');
const containerComments = windowPhotoUser.querySelector('ul.social__comments');
const elementCommentLi = windowPhotoUser.querySelector('ul.social__comments li');
const [countCommentsElement, maxCountCommentsElement] = windowPhotoUser.querySelector('.social__comment-count').childNodes;
const showMoreButton = windowPhotoUser.querySelector('button.social__comments-loader');
const bodyElement = document.querySelector('body')

const infoCommentsView = {
  comments: [],
  countComments: 0
};

const drawComments = () => {
  console.log(infoCommentsView.countComments);
  infoCommentsView.comments.slice(infoCommentsView.countComments, infoCommentsView.countComments + STEP_COUNT_COMMENTS).forEach((comment) => {
    const cloneCommentElement = elementCommentLi.cloneNode(true);
    cloneCommentElement.querySelector('img.social__picture').src = comment.avatar;
    cloneCommentElement.querySelector('p.social__text').textContent = comment.message;
    containerComments.append(cloneCommentElement);
  })
  infoCommentsView.countComments += STEP_COUNT_COMMENTS;
  countCommentsElement.textContent = countCommentsElement.textContent.replace(/\d+/, Math.min(infoCommentsView.comments.length, infoCommentsView.countComments));
  console.log(infoCommentsView.countComments);
  if (infoCommentsView.comments.length <= infoCommentsView.countComments) {
    showMoreButton.classList.add(CLASS_HIDDEN);
  }
};

const showMoreButtonClickHandler = (evt) => {
  evt.preventDefault();
  drawComments()
}

const closeModalWindow = (evt) => {
  evt.preventDefault();
  infoCommentsView.comments = [];
  infoCommentsView.countComments = 0;
  windowPhotoUser.classList.add(CLASS_HIDDEN);
  bodyElement.classList.remove(CLASS_MODAL_OPEN)
  document.removeEventListener('keydown', closeModalWindowKeydownEsc)
};

const closeModalWindowKeydownEsc = (evt) => {
  if (evt.key === 'Escape') {
    closeModalWindow(evt);
  }
}

const openWindowPhotoUser = (photo) => {
  const buttonClose = windowPhotoUser.querySelector('button[type="reset"]')
  containerComments.textContent = '';

  infoCommentsView.comments = photo.comments;
  showMoreButton.classList.remove(CLASS_HIDDEN);
  maxCountCommentsElement.textContent = photo.comments.length;
  drawComments();

  bodyElement.classList.add(CLASS_MODAL_OPEN);
  windowPhotoUser.classList.remove(CLASS_HIDDEN);
  windowPhotoUser.querySelector('div.big-picture__img img').src = photo.url;
  windowPhotoUser.querySelector('div.big-picture__social p.social__likes span')
    .textContent = photo.likes;
  windowPhotoUser.querySelector('div.big-picture__social p.social__caption').textContent = photo.description;

  buttonClose.addEventListener('click', closeModalWindow)
  document.addEventListener('keydown', closeModalWindowKeydownEsc)
}

showMoreButton.addEventListener('click', showMoreButtonClickHandler)
export { openWindowPhotoUser }
