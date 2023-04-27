export class ButtonCreator {
  constructor(button, keyboardSection) {
    this.button = button;
    this.keyboardSection = keyboardSection;
  }

  makeButtons(){
    const buttonElement = document.createElement("button");
    buttonElement.className="button";

    switch (this.button.buttonsSize) {
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

    if(this.button.buttonsTheme){
      buttonElement.classList.add("button_theme-dark");
    }

    const buttonText = document.createTextNode(this.button.buttonsText);

    buttonElement.prepend(buttonText);
    this.keyboardSection.append(buttonElement);
  }
}
