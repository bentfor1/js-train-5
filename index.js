// Завдання 1: Дано масив, використовуючи цикл "for in" виведіть на консоль всі індекси цього масиву
function printIndexes(array) {
  for (const index in array) {
    console.log(index);
  }
  // Проходимося по всіх індексах масиву
  // Виводимо кожен індекс на консоль
}

console.log("Завдання 1 ====================================");
printIndexes([1, 2, 3, 4, 5]);
// Виведе
// 0
// 1
// 2
// 3
// 4

// Завдання 2: Дано масив, використовуючи цикл "for in" знайдіть суму всіх елементів масиву
function sumArray(array) {
  let sum = 0; // Ініціалізуємо змінну для зберігання суми
  for (let index in array) {
    sum += array[index]; // Додаємо кожен елемент до загальної суми
  } // Проходимося по всіх індексах масиву
  // Додаємо кожен елемент до загальної суми
  return sum; // Повертаємо суму
}

console.log("Завдання 2 ====================================");
console.log("sumArray([1, 2, 3, 4, 5])", sumArray([1, 2, 3, 4, 5])); // Виведе 15

// Завдання 3: Дано масив, використовуючи цикл "for of" знайдіть добуток всіх елементів масиву
function multiplyArray(array) {
  let product = 1;

  for (let value of array) {
    product *= value;
  }

  return product;
  // Ініціалізуємо змінну для зберігання добутку
  // Проходимося по всіх значеннях масиву
  // Множимо кожен елемент на загальний добуток
  // Повертаємо добуток
}

console.log("Завдання 3 ====================================");
console.log("multiplyArray([1, 2, 3, 4, 5])", multiplyArray([1, 2, 3, 4, 5])); // Виведе 120

// Завдання 4: Дано масив рядків. За допомогою циклу for переберіть масив, видаліть третій елемент масиву та перетворіть кожен елемент в рядок за допомогою методу toString(). Результат виведіть на консоль.
function modifyArray(array) {
  array.splice(2, 1); // Видаляємо третій елемент масиву
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toString();
  }
  console.log(array); // Виводимо масив перетворений в рядок
}

console.log("Завдання 4 ====================================");
modifyArray([1, "two", 3, "four", 5]); // Виведе 1,two,,four,5

// Завдання 5: Дано масив рядків. За допомогою циклу for переберіть масив, виведіть кожен елемент на консоль у верхньому регістрі.
function printUppercase(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].toUpperCase());
  }
  // Проходимося по всіх елементах масиву
  // Перетворюємо кожен елемент в верхній регістр та виводимо на консоль
}

console.log("Завдання 5 ====================================");
printUppercase(["one", "two", "three"]); // Виведе ONE TWO THREE

// Завдання 6: Функція приймає деструктуризований масив чисел де буду перший елемент та масив всіх інших.
// За допомогою циклу for переберіть масив, знайдіть мінімальне та максимальне значення. Результат виведіть на консоль.
function findMinMax([firstElement, ...restElements]) {
  let min = firstElement;
  let max = firstElement;

  // Перебираємо масив починаючи з другого елементу
  for (let i = 0; i < restElements.length; i++) {
    const currentElement = restElements[i];

    // Перевіряємо, чи поточний елемент менший за мінімальне значення
    if (currentElement < min) {
      min = currentElement;
    }

    // Перевіряємо, чи поточний елемент більший за максимальне значення
    if (currentElement > max) {
      max = currentElement;
    }
  }
  console.log("Мінімальне значення:", min);
  console.log("Максимальне значення:", max);
}

console.log("Завдання 6 ====================================");
findMinMax([5, 2, 8, 1, 9, 3]); // Виведе Min: 1 Max: 9

// Завдання 7: Функція приймає масив рядків.
// Перетворіть масив в рядок за допомогою методу toString() та повторіть його 2 рази. Результат виведіть на консоль.
function printStrings(array) {
  // Перетворюємо масив в рядок за допомогою методу toString()
  let str = array.toString();

  // Повторюємо рядок 2 рази
  str = str.repeat(2);

  // Виводимо рядок на консоль
  console.log(str);
}

console.log("Завдання 7 ====================================");
printStrings([1, "two", 3, "four", 5]); // 1,two,3,four,51,two,3,four,5

// Завдання 8: Функція приймає масив рядків.
// За допомогою методу toString() перетворіть масив в рядок, та виясніть чи є в цьому рядку підрядок subString .

function concatenateStrings(array, subString) {
  // Використовуємо метод toString() для перетворення масиву в рядок
  const concatenatedString = array.toString();

  // Перевіряємо, чи містить рядок підрядок
  const containsSubstring = concatenatedString.includes(subString);

  // Виводимо результат
  console.log("Рядок містить підрядок?", containsSubstring);
}

console.log("Завдання 8 ====================================");
concatenateStrings([1, "two", 3, "four", 5], "two"); // Виведе true

// Завдання 9: Функція приймає масив чисел.
// За допомогою циклу for-in переберіть масив, додайте до кожного елемента 10.
// Зберігайте результат в новому масиві. Результат виведіть на консоль.
function addTenToEach(array) {
  // Ініціалізуємо масив через конструктор з такою же кількістю елементів як в вхідному масиві для зберігання результату
  const resultArray = new Array(array.length);

  // Перебираємо масив за допомогою циклу for-in
  for (let index in array) {
    // Додаємо до поточного елемента 10 та додаємо результат в новий масив
    resultArray[index] = array[index] + 10;
  }

  // Виводимо результат
  console.log(resultArray);
}

console.log("Завдання 9 ====================================");
addTenToEach([5, 10, 15, 20]); // Виведе [15, 20, 25, 30]

// Завдання 10: Створити функцію, яка приймає масив чисел як аргумент.
function swapMinMax(array) {
  let max = array[0];
  let min = array[0];
  let maxIndex = 0;
  let minIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    } else if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }

  [array[maxIndex], array[minIndex]] = [array[minIndex], array[maxIndex]];

  return array;
}

console.log("Завдання 10 ====================================");
// Виводимо в консоль результат виклику функції swapMinMax з масивом [1, 2, 3, 4, 5] як аргументом. Очікуємо бачити [5, 2, 3, 4, 1], оскільки максимальне та мінімальне значення обміняні місцями.
console.log(swapMinMax([1, 2, 3, 4, 5]));

// Завдання 11: Функція приймає масив чисел. Поверніть новий масив, який містить тільки парні числа з оригінального масиву.
function getEvenNumbers(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log("Завдання 11 ====================================");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе [2, 4, 6]

// Завдання 12: Функція приймає масив чисел. Поверніть новий масив, в якому всі числа помножені на їх індекс.
function multiplyByIndex(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * i);
  }

  return result;
  // Створюємо пустий масив для зберігання результату
  // Проходимо через кожен елемент вхідного масиву
  // Помножуємо число на його індекс і додаємо до масиву результату
  // Повертаємо масив результату
}
console.log("Завдання 12 ====================================");
console.log(multiplyByIndex([1, 2, 3, 4, 5])); // Виведе [0, 2, 6, 12, 20]

// Завдання 13: Функція приймає масив чисел. Повертає новий масив, в якому всі числа більші за 10 замінені на рядок "Greater than 10", а решта чисел замінені на рядок "Less than or equal to 10".
function replaceNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      result.push("Greater than 10");
    } else {
      result.push("Less than or equal to 10");
    }
  }

  return result;
  // Створюємо пустий масив для зберігання результату
  // Проходимо через кожен елемент вхідного масиву
  // Перевіряємо, чи число більше за 10
  // Якщо число більше за 10, додаємо рядок "Greater than 10" до масиву результату
  // Якщо число менше або дорівнює 10, додаємо рядок "Less than or equal to 10" до масиву результату
  // Повертаємо масив результату
}

console.log("Завдання 13 ====================================");
console.log(replaceNumbers([5, 10, 15, 20])); // Виведе ["Less than or equal to 10", "Less than or equal to 10", "Greater than 10", "Greater than 10"]
