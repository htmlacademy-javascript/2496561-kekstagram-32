// Функция для проверки длины строки.
const regularString = (inputString, maxLength) => inputString.length <= maxLength;

regularString ('Hello', 5);
regularString ('Goodbye', 3);

// Функция для проверки, является ли строка палиндромом.
const stringPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
};

stringPalindrome('Уверен и не реву');
stringPalindrome('Коту скоро сорок суток');
stringPalindrome('Академия');

// Функия для извлечения цифр
const extractingNumbers = (inputString) => {
  const numbers = inputString.match(/\d+/g);
  if (numbers === null) {
    return NaN;
  } else {
    return parseInt(numbers.join(''), 10);
  }
};

extractingNumbers('2023 год');
extractingNumbers('ECMAScript 2022');
extractingNumbers('1 кефир, 0.5 батона');
extractingNumbers('агент 007');
extractingNumbers('а я томат');
