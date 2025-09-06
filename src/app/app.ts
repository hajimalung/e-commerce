import { Component, computed, inject } from '@angular/core';
import { Header } from "./components/header/header";
import { AppContainer } from "./components/app-container/app-container";
import { ProductCard } from "./components/product-card/product-card";
import { FilterStrip } from "./components/filter-strip/filter-strip";

@Component({
  selector: 'app-root',
  imports: [Header, AppContainer, ProductCard, FilterStrip],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
