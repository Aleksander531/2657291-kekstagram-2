function checkingSringLength(string, number) {
  return (string.length <= number) ? console.log('Условие выполняется ТЕРН ОП') : console.log('Условие не выполняется, строка больше указанной длинны ТЕРН ОП');
}

checkingSringLength('Четыре', 6);

function CheckPalindrome(line) {
  const result = line.replaceAll(' ', '');
  const register = result.toLowerCase();
  let emptyLine = '';

  for (let i = register.length - 1; i >= 0; i--) {
    emptyLine += register[i];
    console.log(emptyLine);
  }

  if (register === emptyLine) {
    console.log('Это палиндром');
  } else {
    console.log(register + ' - Это НЕ палиндром!!!');
  }
}

CheckPalindrome('Лёша на полке клопа нашёл');
