import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true, alias: 'text' })
  buttonText: string = ''

  @Input({ required: true, alias: 'style' })
  buttonStyle: 'white' | 'purple' = 'purple'

  @Output('clicked')
  butonClickedEmitt = new EventEmitter<void>()

  @Input('disabled')
  isDisabled: boolean = false

  onButtonClicked() {
    this.butonClickedEmitt.emit()
  }
}
