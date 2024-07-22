import {getPictures} from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarpicture = getPictures();

const pictureListFragment = document.createDocumentFragment();

similarpicture.forEach((url, description, comments, likes) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('picture__img').src = url;
  pictureElement.querySelector('picture__img').alt = description;
  pictureElement.querySelector('picture__comments').textContent = comments.length;
  pictureElement.querySelector('picture__likes').textContent = likes;
  pictureList.append(pictureElement);
});

pictureList.append(pictureListFragment);
