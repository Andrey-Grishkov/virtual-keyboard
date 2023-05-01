import {SpecialButtons} from "./SpecialButtons.js"

export class ButtonListener {
  constructor(keyboardSection, inputElement) {
    this.inputElement = inputElement;
  }

  setEventListeners() {
    document.addEventListener("click", (event) => {

      if (event.target.tagName !== "BUTTON") {
        return;
      }
      let buttonContent
      const specialButtons = new SpecialButtons(this.inputElement);

      if (event.target.id === "Backspace") {
        return specialButtons.Backspace();
      }

      if (event.target.textContent.length > 1) {
        buttonContent = event.target.textContent[1];
      } else {
        buttonContent = event.target.textContent;
      }

      if (event.target.id === "ShiftRight" || event.target.id === "ShiftLeft"){
        return
      }

      this.inputElement.value = this.inputElement.value + buttonContent.toLowerCase();
    });
  }

  setKeyEventListeners() {
    document.addEventListener("keydown", (event) => {

      const specialButtons = new SpecialButtons(this.inputElement);

      if (event.key === "Backspace") {
        return specialButtons.Backspace();
      }

      console.log(event.key);

      if (event.key === "Shift" && event.key === "Control"){

      }

      if (event.key === "Shift" || event.key === "Control"){
        return
      }




        this.inputElement.value = this.inputElement.value + event.key;
    });
  }
}
