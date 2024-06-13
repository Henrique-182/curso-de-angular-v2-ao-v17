import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personSelectedIndex: number | undefined

  listPeople = [
    {
      name: 'Pessoa 1',
      age: 10
    },
    {
      name: 'Pessoa 2',
      age: 20
    },
    {
      name: 'Pessoa 3',
      age: 30
    },
    {
      name: 'Pessoa 4',
      age: 40
    }
  ] 

  selectPerson(index: number) {
    this.personSelectedIndex = index
  }
}
