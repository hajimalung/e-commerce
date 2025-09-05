import { Component, computed, inject } from '@angular/core';
import { Header } from "./components/header/header";
import { AppContainer } from "./components/app-container/app-container";
@Component({
  selector: 'app-root',
  imports: [Header, AppContainer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
