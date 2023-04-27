import {buttonsMassFirstString, buttonsMassSecondString, buttonsMassTherdString, buttonsFourString, buttonsFiveString}
  from "./utils/constants.js";
import {ButtonCreator} from "./scripts/ButtonCreator.js"
import {ButtonListener} from "./scripts/ButtonListener.js"

const body = document.querySelector("body")

body.className="page";

const inputElement = document.createElement("input");
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

inputElement.className="input";
keyboardSection.className="keyboard-field";
body.prepend(inputElement);
body.append(keyboardSection);

const ButtonsListener = new ButtonListener(keyboardSection, inputElement);
ButtonsListener.setEventListeners();


