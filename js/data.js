import {getRandomInteger, getRandomArrayElement} from './utils.js';

const NAMES = ['Виктория', 'Арина', 'Алексей', 'Макар', 'Агата', 'Тимофей', 'Варвара', 'Кира', 'Никита', 'Юрий', 'Айша', 'Вероника', 'Иван', 'Артём', 'Ксения', 'Тимур', 'Мария', 'Матвей', 'Агния', 'Анна', 'Марк', 'Дарина', 'Милана', 'Екатерина', 'Елена'];

const DESCRIPTION = [
  'Семейный отдых на море.',
  'Полёт на воздушном шаре.',
  'Красивый вид из окна.',
  'Девочка с персиками.',
  'Собачья свадьба.',
  'Семейный портрет.',
  'Прогулка в парке.',
  'Осенний пейзаж.',
  'Зимний пейзаж.',
  'Гора - Эверест.',
  'Красивое звёздное небо.',
  'Домашние животные.',
  'Влюбленная пара на прогулке в парке.',
  'Отец с сыном на рыбалке.',
  'Красивая яхта на лодочной станции.',
  'Летняя гроза.',
  'Шторм на чёрном море.',
  'Мужики ремонтируют машину в гараже.',
  'Дети играют в футбол.',
  'Подростки играют в баскетбол.',
  'Компания подростков сидят в подъезде.',
  'Моя новая машина.',
  'В ресторане с мужем.',
  'Сегодня мне поставили пятёрку по математике.',
  'Выпускной бал.'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда Вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const PICTURE_COUNT = 25;
const MIN_AVATAR_COUNT = 1;
const MAX_AVATAR_COUNT = 6;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;
const MIN_COMMENT_COUNT = 0;
const MAX_COMMENT_COUNT = 30;
const MIN_DESCRIPTION_COUNT = 1;
const MAX_DESCRIPTION_COUNT = 2;

const getRandomComment = () => {
  const commentParts = getRandomInteger(MIN_DESCRIPTION_COUNT, MAX_DESCRIPTION_COUNT);
  const comments = [];
  for (let i = 0; i < commentParts; i++) {
    comments.push(getRandomArrayElement(COMMENTS));
  }
  return comments.join(' ');
};

const generateComments = () => {
  const commentCount = getRandomInteger(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT);
  const comments = [];
  for (let i = 0; i < commentCount; i++) {
    comments.push({
      id: getRandomInteger(1, 10000),
      avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_COUNT, MAX_AVATAR_COUNT)}.svg`,
      message: getRandomComment(),
      name: getRandomArrayElement(NAMES),
    });
  }
  return comments;
};

const createPictures = () => {
  const photos = [];
  for (let i = 1; i <= PICTURE_COUNT; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(DESCRIPTION),
      likes: getRandomInteger(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
      comments: generateComments(i),
    });
  }
  return photos;
};

const getPictures = () => Array.from(
  {length: PICTURE_COUNT},
  (_, index) => createPictures(index + 1)
);

getPictures();

export {getPictures, COMMENTS, MIN_DESCRIPTION_COUNT, MAX_DESCRIPTION_COUNT};
