import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({ required: true, alias: 'planType' })
  planType: string = ''

  @Input({ required: true, alias: 'planPrice' })
  planPrice: number = 0

  @Input({ required: true, alias: 'style' })
  cardStyle: 'orange' | 'purple' = 'orange'
}
