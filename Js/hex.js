const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number btw 0 - 3
  let hexColor = "#";
  for (let i = 0; i <= 5; i++) {
    hexColor = hexColor + hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  let randomNumb = Math.random();
  console.log(randomNumb);
  return Math.floor(randomNumb * hex.length);
}
