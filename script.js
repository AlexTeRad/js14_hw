$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

let people = [];
let person = {
  email: "",
  login: "",
  birthdate: "",
  gender: "",
  name: "",
  zodiac: "",
  weight: 0,
  height: 0,
};

goToNextSlide = () => {
  $(".slider").slick("slickNext");
};

saveData = () => {
  person.email = $("#email").val();
  person.login = $("#login").val();
  person.birthdate = $("#birthdate").val();
  person.gender = $("#gender").val();
  person.name = $("#name").val();
  person.zodiac = $("#zodiac").val();
  person.weight = parseFloat($("#weight").val());
  person.height = parseFloat($("#height").val());

  people.push(person);

  localStorage.setItem("people", JSON.stringify(people));

  showResults();
  goToNextSlide();
};

showResults = () => {};
