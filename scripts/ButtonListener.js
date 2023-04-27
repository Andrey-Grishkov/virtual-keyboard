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
      this.inputElement.value = this.inputElement.value + event.target.textContent;
      console.log(event.target);
    });
  }
}
