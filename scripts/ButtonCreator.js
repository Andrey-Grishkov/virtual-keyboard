
export class ButtonCreator {
  constructor(button, keyboardSection) {
    this.button = button;
    this.keyboardSection = keyboardSection;
  }

  makeButtons(){
    const buttonElement = document.createElement("button");
    const buttonSpanText = document.createElement("span");
    buttonElement.className="button";
    buttonSpanText.className="button__span-text";

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

    if(this.button.secondText){
      const buttonSecondText = document.createTextNode(this.button.secondText);
      buttonSpanText.append(buttonSecondText);
      buttonElement.prepend(buttonSpanText);
    }

    const buttonText = document.createTextNode(this.button.buttonsText);

    buttonElement.append(buttonText);
    this.keyboardSection.append(buttonElement);

    buttonElement.id = this.button.keyCode;

    document.addEventListener("keydown", (event) => {
      if(this.button.keyCode === event.code){
        buttonElement.classList.add('button_active');
      }
    });

    document.addEventListener("keyup", (event) => {
      if(this.button.keyCode === event.code){
        buttonElement.classList.remove('button_active');
      }
    });

  }
}
