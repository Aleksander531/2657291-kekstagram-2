function checkingSringLength(string, number) {
  return (string.length <= number) ? console.log("Условие выполняется ТЕРН ОП") : console.log("Условие не выполняется, строка больше указанной длинны ТЕРН ОП");
}

checkingSringLength("Четыре", 6);

function CheckPalindrome(line) {
let result = line.replaceAll(' ', '');
let register = result.toLowerCase();
let emptyLine = "";

for (let i = register.length-1; i >= 0; i--) {
  emptyLine += register[i];
  console.log(emptyLine);
}

if (register === emptyLine) {
  console.log("Это палиндром");
} else {
  console.log(register + " - Это НЕ палиндром!!!");
}
}

CheckPalindrome("Лёша на полке клопа нашёл");

function extractNumbers(line) {
let toLine = line.toString().replaceAll(' ', '');
let emptyLine = "";

for (let i = 0; i <= toLine.length - 1; i++) {
  let result = parseInt(toLine[i]);
  console.log(result + " это значение переменной result");

  if (result !== NaN) {
    emptyLine += toLine[i];
    console.log("Это из цикла  сейчас переменная emptyLine = " + parseInt(emptyLine));
  }
}
}

extractNumbers("2");
