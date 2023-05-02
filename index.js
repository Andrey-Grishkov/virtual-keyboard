import {
  buttonsFourString,
  buttonsFiveString,
  buttonsMassFirstString,
  buttonsMassSecondString,
  buttonsMassTherdString,
} from "./utils/constants.js";
import { ButtonCreator } from "./scripts/ButtonCreator.js";
import { ButtonListener } from "./scripts/ButtonListener.js";

const body = document.querySelector("body");

body.className = "page";

const titleElement = document.createElement("h1");
const inputElement = document.createElement("textarea");
const keyboardSection = document.createElement("section");

buttonsMassFirstString.map((button) => {
  const buttonMaker = new ButtonCreator(button, keyboardSection);
  return buttonMaker.makeButtons();
});

buttonsMassSecondString.map((button) => {
  const buttonMaker = new ButtonCreator(button, keyboardSection);
  return buttonMaker.makeButtons();
});

buttonsMassTherdString.map((button) => {
  const buttonMaker = new ButtonCreator(button, keyboardSection);
  return buttonMaker.makeButtons();
});

buttonsFourString.map((button) => {
  const buttonMaker = new ButtonCreator(button, keyboardSection);
  return buttonMaker.makeButtons();
});

buttonsFiveString.map((button) => {
  const buttonMaker = new ButtonCreator(button, keyboardSection);
  return buttonMaker.makeButtons();
});

titleElement.className = "title";
const titleElementText = document.createTextNode("Virtual Keyboard");
titleElement.append(titleElementText);

inputElement.className = "input";
keyboardSection.className = "keyboard-field";
body.prepend(titleElement);
body.append(inputElement);
body.append(keyboardSection);

const ButtonsListener = new ButtonListener(keyboardSection, inputElement);
ButtonsListener.setEventListeners();
ButtonsListener.setKeyEventListeners();
