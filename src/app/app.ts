import { Component, computed, inject } from '@angular/core';
import { Header } from "./components/header/header";
import { AppContainer } from "./components/app-container/app-container";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuantityController } from "./components/quantity-controller/quantity-controller";
import { ProductCard } from "./components/product-card/product-card";
@Component({
  selector: 'app-root',
  imports: [Header, AppContainer, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
