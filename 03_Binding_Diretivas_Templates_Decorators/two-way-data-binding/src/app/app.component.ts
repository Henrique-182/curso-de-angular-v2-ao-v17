import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = 'Henrique'

  handleInputChange(text: string) {
    console.log('handleInputChange');
  }
}
