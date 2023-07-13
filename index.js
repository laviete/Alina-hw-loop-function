//1. Написати функцію, яка приймає в якості аргументів висоту і ширину
//прямокутника, повертає площу прямокутника.
/**
 *
 * @param {number} width
 * @param {number} height
 * @returns {number}
 */
function calcRectangleArea(width, height) {
  return height <= 0 || width <= 0 ? null : width * height;
}
calcRectangleArea(2, 5);

//2. Написати функцію, яка приймає три числа - значення мір
//кутів трикутника, повертає класифікацію трикутника за кутами:
//прямокутний, гострокутний - якщо усі кути гострі, тупокутний,
//якщо хоча б один з кутів тупий, або повертає інформацію про
//неможливість існування трикутника з такими значеннями мір кутів трикутника.
/**
 *
 * @param {number} angle1
 * @param {number} angle2
 * @param {number} angle3
 * @returns {string}
 */
function triangleClassification(angle1, angle2, angle3) {
  if (
    angle1 + angle2 + angle3 !== 180 ||
    angle1 <= 0 ||
    angle2 <= 0 ||
    angle3 <= 0
  ) {
    return "A triangle cannot be formed";
  }
  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return "A right triangle";
  }
  if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
    return "An obtuse triangle";
  }
  if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    return "Oxygon";
  }
}
console.log(triangleClassification(0, 20, 60));

//3. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола
function calcCircleLenght(diametr) {
  return diametr > 0 ? Math.PI * diametr : null;
}
console.log(calcCircleLenght("200"));

// 4. Написати функцію, яка приймає в якості аргумента висоту циліндра
// та діаметр основи і повертає об'єм циліндра.
function calcCylinderVolume(height, diametr) {
  return diametr > 0 && height > 0
    ? ((Math.PI * Math.pow(diametr, 2)) / 4) * height
    : null;
}
console.log(calcCylinderVolume(12, 2));

//5. Написати функцію, яка приймає три аргументи: два числа (діапазон) і виводити
//на консоль всі числа з цього діапазону, які діляться на передане число -
//третій аргумент.
/**
 *
 * @param {number} minValue
 * @param {number} maxValue
 * @param {number} divisor
 */
function logNumberInRange(minValue = 1, maxValue = 10, divisor = 3) {
  for (let i = minValue; i <= maxValue; i++) {
    if (i % divisor) {
      continue;
    }
    console.log(i);
  }
}
logNumberInRange();

//5. Написати функцію, яка приймає три аргументи: два числа (діапазон включно)
//і виводити на консоль всі числа з цього діапазону,
//які діляться на передане число -  третій аргумент.
/**
 *
 * @param {number} minValue
 * @param {number} maxValue
 * @param {number} divisor
 */
function logNumInRange(minValue = 1, maxValue = 10, divisor = 3) {
  while (minValue <= maxValue) {
    if (minValue % divisor === 0) {
      console.log(minValue);
    }
    minValue++;
  }
}
logNumInRange();

//6. Написати функцію, яка повертає факторіал переданого числа.
//Використовувати BigInt.
/**
 *
 * @param {bigint} number
 * @returns
 */
function getFactorial(number) {
  let result = 1n;
  for (let i = 1n; i <= number; i++) {
    result *= BigInt(i);
  }
  return result;
}

//7. Написати функцію, яка приймає число и повертає суму непарних чисел
// від 1 до прийнятого числа
/**
 *
 * @param {number} end
 * @returns {number}
 */
function getSummOddnumFromDiapazon(end = 10) {
  let summa = 0;
  for (let i = 1; i <= end; i++) {
    if (i % 2) {
      summa += i;
    }
  }
  return summa;
}

//---------------HOME WORK----------------------

//8. Написати код, який пропонує користувачу вгадати "таємне число".
//Таємне исло зберігається в константі. Користувач намагається вгадати,
//ви, в залежності від відповіді користувача, дієте відказки: більше або
//менше таємне число. Після того, як користувач вгадає таємне число, ви
//видите йому кількість спроб, які були використанні для вгадування.

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {string | number}
 */
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const SECRET_NUMBER = getRandomNum((min = 1), (max = 20));
let attempts = 0;
while (true) {
  const userInput = prompt(
    "Enter a number from 1 to 20 to guess the secret number:"
  );
  if (isNaN(userInput) || userInput === "") {
    alert("Enter a valid number!");
    continue;
  }
  attempts++;
  if (userInput < SECRET_NUMBER) {
    alert("The secret number is more. Try again!");
    continue;
  }
  if (userInput > SECRET_NUMBER) {
    alert("The secret number is less. Try again!");
    continue;
  }
  alert(`You guessed the secret number! Number of attempts: ${attempts}`);
  break;
}
