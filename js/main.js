const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Вася',
  'Катя',
  'Коля',
  'Лена',
  'Егор',
  'Артур',
  'Саша',
  'Петр',
  'Сергей',
];

const descriptions = [
  'Лето',
  'Круто',
  'Огонь',
  'Лена',
  'Имба',
  'Так себе',
  'Кот',
  'Лес',
  'Река',
];


//Функция для генерации случайного числа из диапазона
const getRandomInteger = (minValue, maxValue) => {
  const lower = Math.ceil(Math.min(minValue, maxValue));
  const upper = Math.floor(Math.max(minValue, maxValue));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция для создания массива из уникальных чисел в указанном диапазоне
const getUniqueNumber = (minValue, maxValue) => {
  const numbers = [];

  for (let i = minValue; i <= maxValue; i++) {
    numbers.push(i);
  }
  return numbers;
};

//Функция для выбора случайного элемента из массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

//Функция для создания случайного комментария
const NewComments = () => {
  const randomId = getRandomInteger(1, 200);
  const randomAvatar = `img/avatar-${ getRandomInteger(1, 6) }.svg`;
  const randomMessage = messages[getRandomInteger(0, messages.length - 1)];
  const randomName = names[getRandomInteger(0, names.length - 1)];

  return {
    id: randomId,
    avatar: randomAvatar,
    message: randomMessage,
    name: randomName,
  };
};

//Функция для создания нового объекта описания фотографии
const createNewObject = () => {
  const uniqueId = getRandomArrayElement(getUniqueNumber(1,25));
  const randomUrl = `photos/${ uniqueId }.jpg`;
  const description = descriptions[0];
  const randomLikes = (getRandomInteger(15, 200));

  return {
    id: uniqueId,
    url: randomUrl,
    description: description,
    likes: randomLikes,
    comments: NewComments(),
  };
};

// eslint-disable-next-line no-unused-vars
const generatedObjects = Array.from({length: 25}, createNewObject);
