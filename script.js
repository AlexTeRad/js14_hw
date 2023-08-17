// Запускаем функцию, когда DOM полностью загружен
// Идет перечисление функций slick
$(document).ready(() => {
  // Инициализируем слайдер с определенными настройками
  $(".slider").slick({
    dots: false, // Не показывать точки под слайдером
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  // Устанавливаем максимальную высоту слайдов
  const maxHeight = Math.max(
    300,
    ...$(".slider__screen")
      .map(function () {
        return $(this).height();
      })
      .get()
  );
  $(".slider__screen").height(maxHeight);
});

// Текущий активный слой фона
let activeLayer = 1;
// Функция изменения фона в зависимости от текущего слайда
const changeBackground = (currentSlide) => {
  // Получаем два элемента фона
  const [layer1, layer2] = [
    document.getElementById("background-layer-1"),
    document.getElementById("background-layer-2"),
  ];
  // Определение градиента для фона на основе текущего слайда
  const gradient =
    [
      "linear-gradient(to right, #020024, #00d4ff)",
      "linear-gradient(to right, #FFB6C1, #FF69B4)",
      "linear-gradient(to right, #22c1c3, #fdbb2d)",
      "linear-gradient(to right, #eeaeca, #94bbe9)",
    ][currentSlide] || "";
  // Переключаем фоны и их прозрачность
  if (activeLayer === 1) {
    layer2.style.background = gradient;
    [layer1.style.opacity, layer2.style.opacity, activeLayer] = [0, 1, 2];
  } else {
    layer1.style.background = gradient;
    [layer1.style.opacity, layer2.style.opacity, activeLayer] = [1, 0, 1];
  }
};
// Слушатель событий для смены фона при изменении слайда
$(".slider").on("afterChange", (_, __, currentSlide) =>
  changeBackground(currentSlide)
);
// Переход к следующему слайду
goToNextSlide = () => {
  $(".slider").slick("slickNext");
};
// Начало работы с формой
// Функция для сохранения данных
const saveData = () => {
  // Поля для сбора данных
  const fields = [ //Массив с индефикаторами
    "email",
    "login",
    "password",
    "birthdate",
    "gender",
    "name",
    "zodiac",
    "weight",
    "height",
  ];
  // Сбор данных из полей в объект person
  const person = fields.reduce(
    (obj, field) => ({ ...obj, [field]: $("#" + field).val() }),
    {}
  );
  // Проверка заполненности всех полей
  if (Object.values(person).every((value) => value)) {
    //Использую Object.values(person), чтобы получить массив всех значений объекта person. Затем с помощью метода every проверяю, что каждое значение не является пустым.
    // Если все поля заполнены, то сохраняем данные в локальном хранилище
    const people = [
      ...JSON.parse(localStorage.getItem("people") || "[]"), // Используем ... для извлечения массива
      person, //добавляю в массив новый объект
    ];
    localStorage.setItem("people", JSON.stringify(people)); // Загружаю обратно в локальное хранилище предварительно переведя массив в строку
    // Отображаем результаты и переходим к следующему слайду
    showResults();
    $(".slider").slick("slickNext");
    alert("Все записано!");
  } else {
    // Если не все поля заполнены, то выводит сообщение об ошибке
    alert("Пожалуйста, заполните все поля!");
  }
};
// Показ результатов при загрузке страницы
document.addEventListener( //Запускаю слушателя который будет реагировать на дом когда html будет загружен. без него не хотелось отображаться
  "DOMContentLoaded",
  (showResults = () => {
    // Получаем данные из локального хранилища
    const people = JSON.parse(localStorage.getItem("people") || "[]");
    // Вычисляем результаты
    let tallest = getTallestPerson(people);
    let heaviest = getHeaviestPerson(people);
    let genderCounts = getGenderCounts(people);
    let uniqueNames = getUniqueNames(people);
    let totalWeight = getTotalWeight(people);
    // Очищаем предыдущие результаты
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
    // Отображаем результаты на странице
    appendInfoElement(
      `Самый высокий: ${tallest.name}, рост: ${tallest.height} см`
    );
    appendInfoElement(
      `Самый толстый: ${heaviest.name}, вес: ${heaviest.weight} кг`
    );
    appendInfoElement(
      `Мальчиков: ${genderCounts.male}, Девочек: ${genderCounts.female}, Других: ${genderCounts.other}`
    );
    appendInfoElement(`Совпадение по имени: ${uniqueNames.join(", ")}`);
    appendInfoElement(`Общий вес ${totalWeight} кг`);
  })
);
// Создание элемента для отображения информации
const createInfoElement = (text) => {
  const infoElement = document.createElement("div");
  infoElement.textContent = text;
  infoElement.classList.add("result__div");// Добавляем класс
  return infoElement;
};
// Добавление элемента с информацией в результат
const appendInfoElement = (text) => {
  const resultContainer = document.getElementById("result");
  const infoElement = createInfoElement(text);
  resultContainer.appendChild(infoElement);
};
// Функции для обработки данных

// Рост
const getTallestPerson = (people) => {
  return people.reduce((tallest, person) => //tallest акумуляторное значение а person представляет текущий элемент массива
    person.height > tallest.height ? person : tallest // здесь мы сравниваем самого высокого человека на текущий моммент и поступивщего 
  );
};
// Вес
const getHeaviestPerson = (people) => {
  return people.reduce((heaviest, person) =>
    person.weight > heaviest.weight ? person : heaviest
  );
};
// Пол
const getGenderCounts = (people) => {
  const genderOptions = ["мужской", "женский", "другой"];
  let genderCounts = { male: 0, female: 0, other: 0 };
  people.forEach((person) => {
    switch (person.gender) {
      case genderOptions[0]:
        genderCounts.male++;
        break;
      case genderOptions[1]:
        genderCounts.female++;
        break;
      case genderOptions[2]:
        genderCounts.other++;
        break;
    }
  });
  return genderCounts;
};

// Общий вес
const getTotalWeight = (people) => {
  return people.reduce((totalWeight, person) => totalWeight + person.weight, 0);
};

// Уникальность имени
const getUniqueNames = (people) => {
  return people
    .map((person) => person.name)// Создаем новый массив только с именами
    .filter((name, i, a) => a.indexOf(name) === i && a.lastIndexOf(name) !== i);
    //Применяем метод filter для поиска уникальных имен. name- это имя в массиве, i - его индекс a-сам массив. 
};

// Получаем список людей из локального хранилища или пустой массив, если данных нет
let people = JSON.parse(localStorage.getItem("people")) || [];
