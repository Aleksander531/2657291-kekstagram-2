/* function checkingSringLength(string, number) {
  // eslint-disable-next-line no-alert
  return (string.length <= number) ? alert('Условие выполняется') : alert('Условие не выполняется, строка больше указанной длинны');
}
checkingSringLength('two', 4); */


function CheckPalindrome(line) {
  const result = line.replaceAll(' ', '');
  const register = result.toLowerCase();
  let emptyLine = '';

  for (let i = register.length - 1; i >= 0; i--) {
    emptyLine += register[i];
    // eslint-disable-next-line no-alert
    console.log(emptyLine);
  }

  if (register === emptyLine) {
    // eslint-disable-next-line no-alert
    console.log('Это палиндром');
  } else {
    // eslint-disable-next-line no-alert
    console.log(`${register} - Это НЕ палиндром!!!`);
  }
}

CheckPalindrome('Лёша на полке клопа нашёл 5j');
