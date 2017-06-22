import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AsteroidService } from '../../services/asteroid.service';
import { Asteroid } from '../../models/asteroid';
import { Page } from '../../models/page';

@Component({
  selector: 'app-list-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input() title: string;
  @Input() page: Page;
  @Output() pageChange: EventEmitter<Page>;


  constructor(private asteroidService: AsteroidService) {
    this.pageChange = new EventEmitter<Page>();
  }

  first(): void {
    this.page.number = 0
    this.pageChange.emit(this.page);
  }

  prev(): void {
    this.page.number--;
    this.pageChange.emit(this.page);
  }

  next(): void {
    this.page.number++;
    this.pageChange.emit(this.page);
  }

  last(): void {
    this.page.number = this.page.total_pages - 1;
    this.pageChange.emit(this.page);
  }

  isPossibleTo(destination: string): boolean {
    switch (destination) {
      case 'first': {
        return this.page.number !== 0;
      }
      case 'prev': {
        return this.page.number > 0;
      }
      case 'next': {
        return this.page.number < this.page.total_pages - 1;
      }
      case 'last': {
        return this.page.number !== this.page.total_pages - 1;
      }
    }
    return false;
  }
}
