import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-quantity-controller',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './quantity-controller.html',
  styleUrl: './quantity-controller.scss'
})
export class QuantityController {
  quantity = signal(0);

  increase(){
    this.quantity.update(q => q + 1);
  }

  decrease(){
    this.quantity.update(q => q > 0 ? q - 1 : 0);
  }
}
