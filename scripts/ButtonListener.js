export class ButtonListener {
  constructor(keyboardSection, inputElement) {
    this.keyboardSection = keyboardSection;
    this.inputElement = inputElement;
  }

  setEventListeners() {
    this.keyboardSection.addEventListener("click", (event) => {
      if (event.target.tagName !== "BUTTON") {
        return;
      }
      let buttonContent
      if (event.target.textContent.length > 1) {
        buttonContent = event.target.textContent[1];
      } else {
        buttonContent = event.target.textContent;
      }

      this.inputElement.value = this.inputElement.value + buttonContent;
      console.log(event.target);
    });
  }

  setKeyEventListeners() {
    document.addEventListener("keydown", (event) => {

      this.inputElement.value = this.inputElement.value + event.key;




    });
  }
}
