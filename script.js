//assign: evaluation
// let a = 5;
// let b, c;

// b = (a * 5); //присваивание значения выражения a * 5 переменной b.
// b = (c = b / 2); //присваивание значения выражения b / 2 переменной c, а затем присваивание этого же значения переменной b.
// //изначальное выражение
// b = (a * 5); //вычисление произведения 5 и значения переменной a. И присвоение переменной b
// b = (c = (b / 2)); //вычисление частного значения переменной b и числа 2. И присвоение переменной c

//Number: age
// let age = prompt('Сколько вам лет?');
// let year = 2023 - age;
// alert(year);

//Или мможно по сложнее через метод getFullYear()

// let age = prompt('Сколько вам лет?');
// let year = new Date().getFullYear();//метод getFullYear() используеться для получения текущего года
// let birthYear = year - age;// вычитаем возраст из текущего года

// alert(`Ваш год рождения: ${birthYear}`);//Выводим данные в браузере

//Number: temperature
// let tempC = prompt('Сколько сейчас градусов Цельсия?');//Запрос на первичные данные
// let convertTempF = (tempC * 9 / 5) + 32;//Формула перевода из Цельсия в Фаренгейт
// let tempF = convertTempF;
// alert(`Температура по Фаренгейту ${tempF}`);//Вывод данных

//Обратный процесс
// let tempF = prompt('Сколько градусов по Фаренгейту?')
// let convertTempC = (tempF - 32) * 5 / 9;
// let = tempC = convertTempC;
// alert(`Температура по Цельсию ${tempC}`)

//Number: divide
// let number1 = prompt('Введите первое число');
// let number2 = prompt('Введите второе число');//Берем исходные данные
// let calc = Math.round(number1 / number2);//Создаем формулу и используем Math.round для создания целого числа
// alert(calc);//Вывод данных

//Number: currency
// let valGrn = prompt('Введите сумму в гривнах');//Запрос
// const rateEvr = 40.18;//Значение валюты
// let convert = (valGrn / rateEvr).toFixed(2);//Для ограничения символов после запятой используем .toFixed
// alert(`Сумма в Евро ${convert}`)

//Number: RGB
// let red = parseInt(prompt('Введите значение красного цвета (от 0 до 255):'));
// let green = parseInt(prompt('Введите значение зеленого цвета (от 0 до 255):'));
// let blue = parseInt(prompt('Введите значение синего цвета (от 0 до 255):'));

// const hexColor = "#" + red.toString(16) + green.toString(16) + blue.toString(16);//Переводим в шестнадцатеричную систему, так же можно ограничить количесвто символов с помощью .padStart
// alert(`Цвет в CSS ${hexColor}`)

//Number: flats
// let totalFloor = prompt('Введите количество этажей в доме:');
// let kvarFloor = prompt('Введите количество квартир на этаже:');
// let numberKvar = prompt('Введите номер квартиры:');//ввод данных

// let kvarEnt = kvarFloor * totalFloor;//вычисляем общее количество квартир в подъезде 
// let numberPadik = Math.ceil(numberKvar / kvarEnt);//вычисляем номер подъезда
// let floorNumber = Math.ceil((numberKvar % kvarEnt) / kvarFloor);//вычисляем номер этажа

// console.log("Квартира номер " + numberKvar + " находится в " + numberPadik + "-м подъезде на " + floorNumber + "-м этаже.");
