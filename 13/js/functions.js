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

function isWithinWorkingHours(startWorkingDay, endWorkingDay, startMeeting, durationMinutes) {
  // Функция для преобразования времени в минуты
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Преобразуем время начала и конца рабочего дня, а также начала встречи в минуты
  const startWorkingDayMinutes = timeToMinutes(startWorkingDay);
  const endWorkingDayMinutes = timeToMinutes(endWorkingDay);
  const startMeetingMinutes = timeToMinutes(startMeeting);

  // Вычисляем время окончания встречи
  const endMeetingMinutes = startMeetingMinutes + durationMinutes;

  // Проверяем, находится ли встреча в рамках рабочего дня
  return (
    startMeetingMinutes >= startWorkingDayMinutes &&
      endMeetingMinutes <= endWorkingDayMinutes
  );
}

isWithinWorkingHours('08:00', '17:30', '14:00', 90);
isWithinWorkingHours('8:0', '10:0', '8:0', 120);
isWithinWorkingHours('08:00', '14:30', '14:00', 90);
isWithinWorkingHours('14:00', '17:30', '08:0', 90);
isWithinWorkingHours('8:00', '17:30', '08:00', 900);
