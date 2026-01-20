/* const messages = [
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

const commentsArray = () => ({
  id: '',
  avatar: '',
  message: '',
  name: '',
});

const getRandomInteger = (minValue, maxValue) => {
  const lower = Math.ceil(Math.min(minValue, maxValue));
  const upper = Math.floor(Math.max(minValue, maxValue));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}; */

let ids = [];

const getIds = function(minValue, maxValue) {
  for (let i = minValue; i <= maxValue; i++) {
    ids.push(i);
  }
};

getIds(1, 25);
console.log(ids);



/*

const createNewObject = () => {
  const randomId = getRandomInteger(1, 25);
  const randomUrl = `photos/${ getRandomInteger(1, 25) }.jpg`;
  const randomDescription = String(getRandomInteger(1, 25));
  const randomLikes = String(getRandomInteger(1, 200));

  return {
    id: '',
    url: '',
    description: '',
    likes: '',
    comments: '',
  };
};

const NewComments = () => {
  const randomId = getRandomInteger(1, 200);
  const randomAvatar = `img/avatar-${ getRandomInteger(1, 6) }.svg`;
  const randomMessage = messages[getRandomInteger(0, messages.length - 1)];
  const randomName = names[getRandomInteger(0, names.length - 1)];

  return {
    id: '',
    avatar: '',
    message: '',
    name: '',
  };
};

console.log("Привет !!!!");
console.log(`${NewComments() } - это тест`); */
