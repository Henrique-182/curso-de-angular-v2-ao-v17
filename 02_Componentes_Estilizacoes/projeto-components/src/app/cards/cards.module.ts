import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';



@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardRoxoComponent
  ]
})
export class CardsModule { }
