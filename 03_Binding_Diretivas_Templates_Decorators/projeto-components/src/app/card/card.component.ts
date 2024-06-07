import { Component, Input, numberAttribute } from '@angular/core';

function handlePlanType(value: string) {
  console.log(value);
  return value.toUpperCase()
} 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ alias: 'planType', transform: handlePlanType })
  planType: string = ''

  @Input({ alias: 'planPrice', required: true, transform: numberAttribute })
  planPrice: number = 0

  buttonClicked(value: boolean) {
    console.log(value);
  }
}
