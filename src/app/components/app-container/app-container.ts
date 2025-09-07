import { Component, inject, computed } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DrawerService } from '../../services/drawer';
import { Filters } from '../filters/filters';


@Component({
  selector: 'app-container',
  imports: [MatSidenavModule, Filters],
  templateUrl: './app-container.html',
  styleUrl: './app-container.scss'
})
export class AppContainer {

  drawerService = inject(DrawerService);
  drawerOpened = computed(() => this.drawerService.IS_DRAWER_OPENED());

}
