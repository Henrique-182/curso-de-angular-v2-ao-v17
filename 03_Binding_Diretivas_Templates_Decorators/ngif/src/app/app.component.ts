import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  minhaProp = true
  pessoa: any = {
    status: true,
    name: ''
  }

  toggleProp() {
    this.minhaProp = !this.minhaProp
  }

  isTruthy() {
    // return {}
    // return []
    // return true
    // return 1
    // return "teste"
    // return '0'
    // return "false"
    return this.pessoa.status
  }

  isFalsy() {
    // return false
    // return ""
    // return 0
    // return null
    // return undefined
    // return -0
    // return NaN
    // return this.pessoa.name
    return this.pessoa.endereco?.rua
  }
}
