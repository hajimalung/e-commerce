import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';

import { ContextService } from '../../services/context';
import { DrawerService } from '../../services/drawer';
import { UserService } from '../../services/user';
import { Login } from '../login/login';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  readonly dialog = inject(MatDialog);

  appConstext = inject(ContextService);
  drawerService = inject(DrawerService);
  userService = inject(UserService);
  protected readonly title = this.appConstext.APP_NAME;

  openLoginDialog(){
    this.dialog.open(Login,{
      width: '564px'
    });
  }
}
