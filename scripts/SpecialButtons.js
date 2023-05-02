export class SpecialButtons {
  constructor(inputElement) {
    this.inputElement = inputElement;
  }

  Backspace() {
    if (this.inputElement.selectionStart === this.inputElement.selectionEnd) {
      this.inputElement.value = this.inputElement.value.slice(0, this.inputElement.selectionEnd - 1) + this.inputElement.value.slice(this.inputElement.selectionEnd);
      this.inputElement.selectionStart -= -1;
      this.inputElement.selectionEnd -= -1;
    } else {
      this.inputElement.value = this.inputElement.value.slice(0, this.inputElement.selectionStart + 1) + this.inputElement.value.slice(this.inputElement.selectionEnd);
      this.inputElement.selectionStart -= -1;
      this.inputElement.selectionEnd -= -1;
    }
  }
}
