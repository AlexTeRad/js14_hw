//*Confirms
// let ques1 = confirm("Ты ел?");
// let ques2 = confirm("Ты спал?");
// let ques3 = confirm("Ты работал?");
// let quesBank = [];
// quesBank.unshift(ques1, ques2, ques3);
// alert(quesBank);

//*Prompts
// let ques1 = prompt("Ты ел?");
// let ques2 = prompt("Ты спал?");
// let ques3 = prompt("Ты работал?");
// let quesBank = [];
// quesBank[0] = ques1;
// quesBank[1] = ques2;
// quesBank[2] = ques3;
// console.log(quesBank);

//*Item access
// let zap = prompt("Введите индекс (0 до 3):");
// let arrDate = [123, "Mass", "345", 56];
// console.log(arrDate[zap]);

// let indexLen = "length";
// console.log(arrDate[indexLen]);

//*Item change
// let index = prompt("Введите индекс (0 до 3):");
// let changeIndex = prompt("Введите новое значение:");
// let arrDate = [123, "Mass", "345", 56];
// arrDate[index] = changeIndex;
// console.log(arrDate);

//*Multiply table
// const arr = Array.from({ length: 5 }, (_, i) =>
//   Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
// );
// console.log(arr);

//*Multiply table slice
// const arr = Array.from({ length: 5 }, (_, i) =>
//   Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
// );
// const newArr = arr.map((row) => row.slice(1));
// console.log(newArr);

//*IndexOf Word
// let str = prompt("Введите строку из нескольких слов");
// let words = str.split(" ");
// let searсhW = prompt("Введите искомое слово");

// let index = words.indexOf(searсhW);

// if (index !== -1) {
//   alert(`Слово ${searсhW} в строке ${index + 1}`);
// } else {
//   alert(`Слово ${searсhW} не найденно`);
// }

//*Reverse
// const arrDate = [];

// for (let i = 0; i < 5; i++) {
//   let element = prompt("Введите элемент массива:");
//   arrDate.push(element);
// }

// const arrDateReverse = [];

// while (arrDate.length > 0) {
//   let elem = arrDate.pop();
//   arrDateReverse.push(elem);
// }

// console.log(arrDateReverse);

//*Reverse 2
// let arrDate = [];

// for (let i = 0; i < 5; i++) {
//   let userInput = prompt("Введите элемент массива");
//   arrDate.push(userInput);
// }

// // Создаем пустой массив для перевернутых элементов
// let arrDateReverse = [];

// // Извлекаем элементы из второго массива и добавляем их в начало reversedArr
// while (arrDate.length > 0) {
//   let elem = arrDate.pop();
//   arrDateReverse.push(elem);
// }

// // Выводим результаты
// console.log("Исходный массив:", arrDate);
// console.log("Перевернутый массив:", arrDateReverse);

// // Используем shift и unshift для переворачивания массива обратно
// while (arrDateReverse.length > 0) {
//   arrDate.unshift(arrDateReverse.shift());
// }

// console.log("Перевернутый обратно массив:", arrDate);

//*Copy //Не уверен в коректности
// const arr = Array.from({ length: 5 }, (_, i) =>
//   Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
// );
// const copiedArr = arr.map((row) => [...row]);
// console.log(copiedArr);

//*Deep Copy //Не уверен в коректности
// const arr = Array.from({ length: 5 }, (_, i) =>
//   Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
// );
// const copiedArr = arr.map((row) => row.map((num) => num));
// console.log(copiedArr);

//*Array Equals
// const arr = [1, 2, 3];
// const arr2 = [1, 2, 3];

// let areEqual = arr.length === arr2.length;

// if (areEqual) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr2[i]) {
//       areEqual = false;
//       break;
//     }
//   }
// }

// console.log(
//   areEqual
//     ? "Массивы arr и arr2 равны друг другу"
//     : "Массивы arr и arr2 не равны друг другу"
// );

//*Flat
// const arr = Array.from({ length: 5 }, (_, i) =>
//   Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
// );
// const flatArr = [].concat(...arr);
// console.log(flatArr);

//*Destruct
// let intString = prompt("Введите строку:");
// let [first, , , , fifth, , , ninth] = intString;
// console.log(
//   `Первый символ: ${first}, Пятый символ: ${fifth}, Девятый символ: ${ninth}`
// );

//*Destruct default
// let intString = prompt("Введите строку:");
// let [, second = "!", , fourth = "!", fifth = "!"] = intString;
// console.log(second, fourth, fifth);

//*Multiply table rest
// const arr = Array.from({ length: 5 }, (_, i) =>
//   Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
// );
// const [[...first], [...second], [...third], [...fourth]] = arr;
// const finalArr = [...first.slice(1), ...second.slice(1), ...third.slice(1), ...fourth.slice(1)].filter(Boolean);

// console.log(finalArr);

//*For Alert
// const arr = ["John", "Paul", "George", "Ringo"];
// for (let name of arr) {
//   alert(name);
// }

//*For Select Option
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
// for (const currency of currencies) {
//   str += `<option value="${currency}">${currency}</option>`;
// }
// str += "</select>";
// document.write(str); //document.write відобразить ваш HTML на сторінці

//*For Table Horizontal
// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table>";
// for (const name of names) {
//   str += "<td>" + name + "</td>";
// }
// str += "</table>";
// document.write(str); //document.write отобразит ваш HTML на странице

//*For Table Vertical
// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table>";
// for (const name of names) {
//   str += "<tr><td>" + name + "</tr></td>";
// }
// str += "</table>";
// document.write(str); //document.write відобразить ваш HTML на сторінці

//*For Table Letters
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<table>";
// for (const currency of currencies) {
//   str += "<tr>";
//   console.log(currency);
//   for (const letter of currency) {
//     str += "<td>" + letter + "</td>";
//     console.log(letter);
//   }
//   str += "</tr>";
// }
// str += "</table>";
// document.write(str); //document.write відобразить ваш HTML на сторінці

//*For Multiply Table
// const table = Array.from({ length: 5 }, (_, i) =>
//   Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
// );

// // Выводим таблицу умножения в таблицу с помощью вложенных циклов for...of и метода document.write()
// document.write("<table>");
// for (const row of table) {
//   document.write("<tr>");
//   for (const num of row) {
//     document.write(`<td>${num}</td>`);
//   }
//   document.write("</tr>");
// }
// document.write("</table>");

//*Function Capitalize
// const capitalize = (str) => {
//   let result =
//     str.slice(0, 1).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
//   return result;
// };
// console.log(capitalize("cANBerRa")); //Canberra

//*Map Capitalize //Не уверен в вверности кода
// const capitalize = (str) => {
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// };

// let inputStr = prompt("Введите строку:");
// let words = inputStr.split(" ");
// let capWords = words.map((word) => capitalize(word));
// let resultStr = capWords.join(" ");
// console.log(resultStr);

//*Filter Lexics
// let invalidWords = ["bad", "words", "here"];
// let inputString = prompt("Введите строку:");
// let words = inputString.split(" ");
// let filteredWords = words.filter((word) => !invalidWords.includes(word));
// let outputString = filteredWords.join(" ");
// console.log(outputString);

//*Beep Lexics
// const forbiddenWords = ["apple", "banana", "orange"];
// const input = prompt("Введите строку:");
// const words = input.split(" ");
// const transformedWords = words.map((word) =>
//   forbiddenWords.includes(word) ? "BEEP" : word
// );
// const result = transformedWords.join(" ");

// console.log(result);

//*Reduce HTML
// let currencies = ["USD", "EUR", "GBP", "UAH"];
// let selectOptions = currencies.reduce((options, currency) => {
//   return options + `<option value="${currency}">${currency}</option>`;
// }, "");
// let selectElement = `<select>${selectOptions}</select>`;
// document.write(selectElement);

//*For Brackets Hell Check //-
// const line = prompt("Введите строку со скобками:");
// const bracketsStack = [];
// let i = 0;

// for (const character of line) {
//   if (character === '[' || character === '(' || character === '{') {
//     bracketsStack.push(character);
//   } else if (character === ']' || character === ')' || character === '}') {
//     const lastOpeningBracket = bracketsStack.pop();

//     if (
//       !lastOpeningBracket ||
//       (character === ']' && lastOpeningBracket !== '[') ||
//       (character === ')' && lastOpeningBracket !== '(') ||
//       (character === '}' && lastOpeningBracket !== '{')
//     ) {
//       break;
//     }
//   }

//   i++;
// }

// if (bracketsStack.length === 0) {
//   console.log("Строка скобок верна");
// } else {
//   console.log(`Ошибка: непарные скобки на позиции ${i}`);
// }
