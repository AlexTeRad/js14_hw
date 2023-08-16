$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

let maxHeight = 0;

$(".slider__screen").each(function () {
  if ($(this).height() > maxHeight) {
    maxHeight = $(this).height();
  }
});

$(".slider__screen").height(maxHeight);

$(".slider").on("afterChange", function (_, _, currentSlide) {
  switch (currentSlide) {
    case 0:
      $("body").css(
        "background",
        "linear-gradient(to right, #020024, #00d4ff)"
      ); // цвет для первого слайда
      break;
    case 1:
      $("body").css(
        "background",
        "linear-gradient(to right, #FFB6C1, #FF69B4)"
      ); // градиент для второго слайда
      break;
    case 2:
      $("body").css(
        "background",
        "linear-gradient(to right, #22c1c3, #fdbb2d)"
      ); // цвет для третьего слайда
      break;
    case 3:
      $("body").css(
        "background",
        "linear-gradient(to right, #eeaeca, #94bbe9)"
      ); // цвет для четвертого слайда
      break;
  }
});

goToNextSlide = () => {
  $(".slider").slick("slickNext");
};

saveData = () => {
  let person = Object.assign(
    {},
    {
      email: $("#email").val(),
      login: $("#login").val(),
      birthdate: $("#birthdate").val(),
      gender: $("#gender").val(),
      name: $("#name").val(),
      zodiac: $("#zodiac").val(),
      weight: parseFloat($("#weight").val()),
      height: parseFloat($("#height").val()),
    }
  );

  if (
    person.email &&
    person.login &&
    person.birthdate &&
    person.gender &&
    person.name &&
    person.zodiac &&
    person.weight &&
    person.height
  ) {
    people.push(person);
    localStorage.setItem("people", JSON.stringify(people));
    showResults();
    goToNextSlide();
    alert("Все записано!");
  } else {
    alert("Пожалуйста, заполните все поля!");
  }
};

showResults = () => {
  console.log(people);
  let tallest = people[0];
  let heaviest = people[0];
  let maleCount = 0;
  let femaleCount = 0;
  let otherCount = 0;
  let totalWeight = 0;
  let names = [];

  people.forEach((person) => {
    if (person.height > tallest.height) tallest = person;
    if (person.weight > heaviest.weight) heaviest = person;
    if (!names.includes(person.name)) names.push(person.name);
    totalWeight += person.weight;

    switch (person.gender) {
      case "мужской":
        maleCount++;
        break;
      case "женский":
        femaleCount++;
        break;
      case "другой":
        otherCount++;
        break;
    }
  });

  const uniqueNames = people
    .map((person) => person.name)
    .filter((name, i, a) => a.indexOf(name) === i && a.lastIndexOf(name) !== i);
  const resultHtml = `
      Самый высокий: ${tallest.name}, рост: ${tallest.height} см
      Самый толстый: ${heaviest.name}, вес: ${heaviest.weight} кг
      Мальчиков: ${maleCount}, Девочек: ${femaleCount}, Других: ${otherCount}
      Совпадения по имени: ${uniqueNames.join(", ")}
      Общий вес: ${totalWeight} кг
    `;
  console.log("Result HTML:", resultHtml);
  $("#result").html(resultHtml);
};

let people = JSON.parse(localStorage.getItem("people")) || []; // Получаем людей из localStorage или используем пустой массив
