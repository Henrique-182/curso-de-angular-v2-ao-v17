import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "Texto Inicial 2"
  inputType = "text"
  isDisabled = false
  buttonTitle = "Título do botão"
  buttonDisable = true
  widthButton1 = '110px'
  widthButton2 = 130
  stylesObj = {
    width: '160px', 
    backgroundColor: 'grey'
  }
  isRed = true
  isGreen = true

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value
    console.log(currentText)
  }

  handleInputEvent(event: Event) {
    const currentText2 = (event.target as HTMLInputElement).value
    console.log(currentText2);
  }

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setPasswordType() {
    this.inputType = 'password'
  }

  setTextType() {
    this.inputType = 'text'
  }

  logInputText() {
    console.log(this.inputText)
  }

  onButtonClick() {
    this.buttonTitle = 'Título Alterado'
    this.buttonDisable = !this.buttonDisable
  }
  
  updateStyleObj() {
    this.stylesObj.width = '170px'
    this.stylesObj.backgroundColor = 'lightblue'
  }

  updateStyleObj2() {
    this.stylesObj = {
      width: '170px',
      backgroundColor: 'lightblue'
    }
  }

  updateWidth() {
    this.widthButton2 += 5
  }
}
