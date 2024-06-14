import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text: string = 'Texto'
  person = {
    name: 'Nome da pessoa 1',
    status: 1
  }

  person2 = {
    name: 'Nome da pessoa 2',
    status: 2
  }

  person3 = {
    name: 'Nome da pessoa 3',
    status: 3
  }

  getStyle(status: number) {
    return {
      'active': status === 1,
      'partial': status === 2,
      'blocked': status === 3,
    }
  }
  
}
