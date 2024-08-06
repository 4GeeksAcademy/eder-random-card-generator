/* eslint-disable */
import "bootstrap";
import "./style.css";

const cardType = ["♥", "♠", "♣", "♦"];
const cardStyle = ["hearts", "spades", "clovers", "diamonds"];
const cardValue = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const cardMod = document.querySelectorAll(".my-card");
const cardModNumber = document.getElementById("value");
let randomType = 0;
let randomValue = 0;

function generateRandom() {
  cardMod.forEach(element => {
    element.classList.remove(cardStyle[randomType]);
  });
  randomType = Math.floor(Math.random() * cardType.length);
  randomValue = Math.floor(Math.random() * cardValue.length);
}

function getRandom() {
  generateRandom();
  cardMod.forEach(element => {
    element.innerHTML = cardType[randomType];
    element.classList.add(cardStyle[randomType]);
  });
  cardModNumber.innerHTML = cardValue[randomValue];
}

const button = document.getElementById("button-event");
button.addEventListener("click", function() {
  getRandom();
});

//const forceNewCard = () => getRandom(cardType, cardValue);

window.onload = function() {
  getRandom();
};

//export default forceNewCard;
