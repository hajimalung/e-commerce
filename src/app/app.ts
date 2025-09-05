import { Component, computed, inject } from '@angular/core';
import { Header } from "./components/header/header";
import { AppContainer } from "./components/app-container/app-container";
import { Login } from "./components/login/login";
@Component({
  selector: 'app-root',
  imports: [Header, AppContainer, Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
