import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  private _planType: string = ''

  @Input('planType')
  set planType(value: string) {
    this._planType = value.toUpperCase()
  }

  get planType(): string {
    return this._planType
  }

  @Input({ alias: 'planPrice', required: true })
  planPrice: number = 0

  buttonClicked(value: boolean) {
    console.log(value);
  }
}
