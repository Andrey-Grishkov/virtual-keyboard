import {SpecialButtons} from "./SpecialButtons.js"

export class ButtonListener {
  constructor(keyboardSection, inputElement) {
    this.keyboardSection = keyboardSection;
    this.inputElement = inputElement;
    this.cursorStart = this.inputElement.selectionStart;
    this.cursorEnd = this.inputElement.selectionEnd;
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

      this.inputElement.value = this.inputElement.value + buttonContent;
      // this.cursorStart = this.cursorStart +1;
      // this.cursorEnd = this.cursorEnd +1;

      console.log(this.cursorStart, this.cursorEnd, "Backspace - click");
    });
  }

  setKeyEventListeners() {
    document.addEventListener("keydown", (event) => {

      const specialButtons = new SpecialButtons(this.inputElement);

      if (event.key === "Backspace") {
        return specialButtons.Backspace();
      }

        this.inputElement.value = this.inputElement.value + event.key;
        // this.cursorStart = this.cursorStart +1;
        // this.cursorEnd = this.cursorEnd +1;

      console.log(this.cursorStart, this.cursorEnd, "Backspace - keydown");
    });
  }
}
