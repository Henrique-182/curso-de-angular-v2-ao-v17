import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  template: `
    <div class="card-button-cancel">Cancelar</div>
  `,
  styles: [
    `
      .card-button-cancel {
        font-size: 16px;
        text-align: center;
        margin-top: 10px;
        border-radius: 25px;
        background-color: red;
        cursor: pointer;
        font-weight: bold;
        padding: 10px;
      }
    `,
    `
      .card-button-cancel {
        background-color: blue;
      }
    `
  ]
})
export class CardButtonCancelComponent {

}
