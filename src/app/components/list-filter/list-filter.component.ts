import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent {
  @Input() filter: string;
  @Output() filterChange: EventEmitter<string>;

  constructor() {
    this.filterChange = new EventEmitter<string>();
  }

  onChange(filter): void {
    this.filterChange.emit(filter);
  }
}
