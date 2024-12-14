var countDownDate = new Date("Jan 1,2025 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const container = document.getElementsByClassName("container");

  container[0].style.background = 'url("img/black_background.jpg")';
  container[0].style.backgroundPosition = "center";
  container[0].style.backgroundSize = "cover";
  container[0].style.backgroundRepeat = "no-repeat";

  const right = document.getElementsByClassName("right");
  const left = document.getElementsByClassName("left");

  const newYearBlock = document.getElementsByClassName("newyear");
  newYearBlock[0].style.display = "block";

  container[0].removeChild(left[0]);
  container[0].removeChild(right[0]);
});
