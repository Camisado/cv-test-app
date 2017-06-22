import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
  title: string;
  constructor(private location: Location) {
    this.title = `Path "${location.path()}" not found!`;
  }
}
