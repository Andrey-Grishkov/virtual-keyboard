
const buttonsMassFirstString = [
  {buttonsText: "~",
    buttonsTheme:"dark"},
  {buttonsText: "1"},
  {buttonsText: "2"},
  {buttonsText: "3"},
  {buttonsText: "4"},
  {buttonsText: "5"},
  {buttonsText: "6"},
  {buttonsText: "7"},
  {buttonsText: "8"},
  {buttonsText: "9"},
  {buttonsText: "0"},
  {buttonsText: "-"},
  {buttonsText: "="},
  {buttonsText: "← Backspace",
    buttonsSize:"more-than-middle",
    buttonsTheme:"dark"
  },
]


const buttonsMassSecondString = [
  {buttonsText: "Tab",
  buttonsSize:"middle",
  buttonsTheme:"dark"},
  {buttonsText: "Q"},
  {buttonsText: "W"},
  {buttonsText: "E"},
  {buttonsText: "R"},
  {buttonsText: "T"},
  {buttonsText: "Y"},
  {buttonsText: "U"},
  {buttonsText: "I"},
  {buttonsText: "O"},
  {buttonsText: "P"},
  {buttonsText: "{"},
  {buttonsText: "}"},
  {buttonsText: "\\"},
  {buttonsText: "Del",
    buttonsSize:"middle",
    buttonsTheme:"dark"
  },
]




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
