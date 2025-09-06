import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { QuantityController } from '../quantity-controller/quantity-controller';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, QuantityController],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {

}
