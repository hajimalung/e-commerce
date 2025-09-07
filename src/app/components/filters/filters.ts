import { Component, signal } from '@angular/core';
import { MultiSelectList } from "../multi-select-list/multi-select-list";
import { ListOption } from '../../modals/list-option';

@Component({
  selector: 'app-filters',
  imports: [MultiSelectList],
  templateUrl: './filters.html',
  styleUrl: './filters.scss'
})
export class Filters {

  categoriesList = signal<ListOption[]>([
    {id: '1', name: 'MENS', selected: false, displayName: 'Mens Clothing'},
    {id: '2', name: 'KIDS', selected: false, displayName: 'Kids Clothing'},
  ]);

}
