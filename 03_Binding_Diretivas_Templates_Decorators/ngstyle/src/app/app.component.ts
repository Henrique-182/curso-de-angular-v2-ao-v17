import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fontSize: number = 15
  textColor: 'green' | 'orange' = 'orange'
  buttonText: 'Verde' | 'Laranja' = 'Verde'
  stylesString: string = 'font-size: 15px; color: orange;'
  stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor
  }

  increaseFontSize() {
    this.fontSize += 5

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor}`

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor
    }
  }

  toggleFontColor() {
    if (this.textColor === 'green') {
      this.textColor = 'orange'
      this.buttonText = 'Verde'
    } else {
      this.textColor = 'green'
      this.buttonText = 'Laranja'
    }

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor}`

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor
    }
  }

}
