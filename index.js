import {buttonsMassFirstString, buttonsMassSecondString, buttonsMassTherdString, buttonsFourString, buttonsFiveString}
  from "./utils/constants.js";

const body = document.querySelector("body")

body.className="page";

const inputElement = document.createElement("input");
const keyboardSection = document.createElement("section");

const makeButtons = (button) => {
  const buttonElement = document.createElement("button");
  buttonElement.className="button";

  switch (button.buttonsSize) {
    case "middle": buttonElement.classList.add("button_resized_middle");
      break;
    case "more-than-middle": buttonElement.classList.add("button_resized_middle-plus");
      break;
    case "two-size": buttonElement.classList.add("button_resized_two-size");
      break;
    case "space": buttonElement.classList.add("button_resized_space");
      break;
    default:
      break;
  }

  if(button.buttonsTheme){
    buttonElement.classList.add("button_theme-dark");
  }


  const buttonText = document.createTextNode(button.buttonsText);
  buttonElement.prepend(buttonText);
  keyboardSection.append(buttonElement);
  console.log(button.buttonsText);
}

buttonsMassFirstString.map((button)=>{
  makeButtons(button);
})

buttonsMassSecondString.map((button)=>{
  makeButtons(button);
})

buttonsMassTherdString.map((button)=>{
  makeButtons(button);
})

buttonsFourString.map((button)=>{
  makeButtons(button);
})

buttonsFiveString.map((button)=>{
  makeButtons(button);
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
