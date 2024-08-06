/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

function getRandom(type, value) {
  const cardMod = document.querySelectorAll(".my-card");
  const cardModNumber = document.getElementById("value");
  let randomType = Math.floor(Math.random() * type.length);
  let randomValue = Math.floor(Math.random() * value.length);
  cardMod.forEach(element => {
    element.innerHTML = cardType[randomType];
    element.classList.add(cardStyle[randomType]);
  });
  cardModNumber.innerHTML = cardValue[randomValue];
}

window.onload = function() {
  getRandom(cardType, cardValue);
};
