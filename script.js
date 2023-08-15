//*Для 1 команды:
// * Функция которая принимает в себя масив, в этом массиве должны быть все типы данных (6) основных
// * Функция должна посчитать сколько в массиве Каждых разных типов данных
// * На return объект типа ключ "тип данных" : значение "кол-во"

//* 1. Создать функцию, которая принимает массив в качестве аргумента.
//* 2. Создать пустой объект для хранения результатов.
//* 3. Использовать цикл для перебора элементов массива.
//* 4. Для каждого элемента определить его тип данных с помощью оператора typeof.
//* 5. Проверить, есть ли уже свойство с таким именем в объекте результатов. Если есть, увеличеть его значение на 1. Если нет, создать новое свойство с именем типа данных и значением 1.
//* 6. После завершения цикла верните объект с результатами.

//!
sortDataTypes = (arr) => {
  // Метод reduce используется для создания объекта с результатами
  return arr.reduce((result, item) => {
    // Определяем тип данных текущего элемента
    let dataType =
      item === null ? "null" : Array.isArray(item) ? "array" : typeof item;
    // Увеличиваем счетчик для текущего типа данных
    result[dataType] = (result[dataType] || 0) + 1;
    // Возвращаем обновленный объект с результатами
    return result;
  }, {}); // Начальное значение - пустой объект
};

let newArr = [
  { "8Z": false, false: false },
  null,
  null,
  { 18: 58, 41: "LVdJwMW", 93: true, REcJ8g9QsT: 4, false: "vAj" },
  "7gpQw7H8",
  { true: true },
  [32, "CF"],
  { 30: "elj6h5pZ" },
  { 91: "0L8yeuO", false: true, true: 79 },
  { SqYFSHDe: "wB0j2x", "7QyaeafWq1": "15cf6", true: 78, WgIa: 12 },
  79,
  [true, true, false, true, true, false, false],
  { false: false },
  "95Mu9sb",
  null,
  ["qJy", "G5zFeU", true, 41, "5G", false, "nxVxd", "ZjQ", false],
  { Q2L2zo: "Z0mu730H" },
  null,
  { 34: "7", 43: "22XWLwI", 45: 98, K: "8", true: "ZQXJJ", JqN: true },
  true,
  null,
  null,
  null,
  false,
  "Mhfmw7z",
  3,
  [false, false, "hC", "1u5Ts", "uNx1"],
  null,
  false,
  null,
  { 47: false },
  null,
  null,
  5,
  [false, 53, true, false, true, "M6", "itqtn", false, "fSrFPf9ANQ"],
  null,
  ["WOgStRiDrj", 32, true],
  { false: "4nz5Yu" },
  { X8YP: "QA" },
  null,
];
