import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ContextService{
    APP_NAME = signal('e-commerce');
}
