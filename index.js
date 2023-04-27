import {buttonsMassFirstString, buttonsMassSecondString, buttonsMassTherdString, buttonsFourString, buttonsFiveString}
  from "./utils/constants.js";
import {ButtonCreator} from "./scripts/ButtonCreator.js"

const body = document.querySelector("body")

body.className="page";

const inputElement = document.createElement("input");
const keyboardSection = document.createElement("section");


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

inputElement.className="input";
keyboardSection.className="keyboard-field";



body.prepend(inputElement);
body.append(keyboardSection);



// buttonElement.addEventListener("click", ()=>{
//   inputElement.value = inputElement.value + buttonText.nodeValue;
//   console.log(buttonText, "buttonText")
// })


const buttons = [...keyboardSection.children];

keyboardSection.addEventListener("click", (event) => {
  //прерываем функцию, если кликаем не на кнопку
  if (event.target.tagName !== "BUTTON") {
    return;
  }


  inputElement.value = inputElement.value + event.target.textContent;
  console.log(event.target);

  // //Определяем индекс ячейки в которой произошло событие
  // const index = buttons.indexOf(event.target);

});
