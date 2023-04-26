
const buttonsMass = [
  {buttonsText: "Q"},
  {buttonsText: "R"},
]




const body = document.querySelector("body")

body.className="page";

const inputElement = document.createElement("input");
const keyboardSection = document.createElement("section");

const makeButtons = (button) => {

  console.log(button.buttonsText);
}

buttonsMass.map((button)=>{
  makeButtons(button);
})


const buttonElement = document.createElement("button");
inputElement.className="input";
keyboardSection.className="keyboard-field";
buttonElement.className="button";

const buttonText = document.createTextNode("Q");

buttonElement.prepend(buttonText);
body.prepend(inputElement);
body.append(keyboardSection);
keyboardSection.prepend(buttonElement);


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
