import {buttonsMassFirstString, buttonsMassSecondString, buttonsMassTherdString, buttonsFourString, buttonsFiveString}
  from "./utils/constants.js";
import {ButtonCreator} from "./scripts/ButtonCreator.js"
import {ButtonListener} from "./scripts/ButtonListener.js"

const body = document.querySelector("body")

body.className="page";

const titleElement = document.createElement("h1");
const inputElement = document.createElement("textarea");
const keyboardSection = document.createElement("section");

//_______________________________________Buttons Create________________________________________________________
buttonsMassFirstString.map((button)=>{
  const buttonMaker = new ButtonCreator(button, keyboardSection);
  buttonMaker.makeButtons();
})

buttonsMassSecondString.map((button)=>{
  const buttonMaker = new ButtonCreator(button, keyboardSection);
  buttonMaker.makeButtons();
})

buttonsMassTherdString.map((button)=>{
  const buttonMaker = new ButtonCreator(button, keyboardSection);
  buttonMaker.makeButtons();
})

buttonsFourString.map((button)=>{
  const buttonMaker = new ButtonCreator(button, keyboardSection);
  buttonMaker.makeButtons();
})

buttonsFiveString.map((button)=>{
  const buttonMaker = new ButtonCreator(button, keyboardSection);
  buttonMaker.makeButtons();
})
//_______________________________________________________________________________________________________________________

titleElement.className="title";
const titleElementText = document.createTextNode("Virtual Keyboard");
titleElement.append(titleElementText);

inputElement.className="input";
keyboardSection.className="keyboard-field";
body.prepend(titleElement);
body.append(inputElement);
body.append(keyboardSection);

const ButtonsListener = new ButtonListener(keyboardSection, inputElement);
ButtonsListener.setEventListeners();
ButtonsListener.setKeyEventListeners();

