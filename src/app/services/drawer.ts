import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DrawerService{

  private _drawerOpened = signal(true);
    IS_DRAWER_OPENED = this._drawerOpened.asReadonly();

    openDrawer(){
        this._drawerOpened.set(true);
    }

    closeDrawer(){
        this._drawerOpened.set(false);
    }

    toggleDrawer(){
        this._drawerOpened.set(!this._drawerOpened());
    }

}
