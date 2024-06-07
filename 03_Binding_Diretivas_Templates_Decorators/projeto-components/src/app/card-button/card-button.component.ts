import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  @Output('buttonClickEmitter')
  buttonClickEmitter = new EventEmitter<boolean>()

  @Input({ transform: booleanAttribute })
  buttonDisabled: boolean = false

  onButtonClick() {
    console.log('log')

    this.buttonClickEmitter.emit(false)
  }
}