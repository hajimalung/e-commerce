import { Component, inject, computed } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DrawerService } from '../../services/drawer';


@Component({
  selector: 'app-container',
  imports: [MatSidenavModule],
  templateUrl: './app-container.html',
  styleUrl: './app-container.scss'
})
export class AppContainer {

  drawerService = inject(DrawerService);
  drawerOpened = computed(() => this.drawerService.IS_DRAWER_OPENED());

}
