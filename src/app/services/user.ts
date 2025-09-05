import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private _isLoggedIn = signal(false);
  IS_LOGGED_IN = this._isLoggedIn.asReadonly();
}
