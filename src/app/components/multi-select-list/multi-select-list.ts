import { Component, input, output, viewChild } from '@angular/core';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { ListOption } from '../../modals/list-option';

@Component({
  selector: 'app-multi-select-list',
  imports: [MatListModule],
  templateUrl: './multi-select-list.html',
  styleUrl: './multi-select-list.scss'
})
export class MultiSelectList {
    list = input.required<ListOption[]>();
    selectionChanged = output<ListOption[]>();
}
