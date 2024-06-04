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
}
