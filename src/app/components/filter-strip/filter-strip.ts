import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-filter-strip',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './filter-strip.html',
  styleUrl: './filter-strip.scss'
})
export class FilterStrip {

}
