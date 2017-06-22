import { Component, OnInit  } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { AsteroidService } from '../../services/asteroid.service';
import { Asteroid } from '../../models/asteroid';
import { Page } from '../../models/page';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  asteroids: Asteroid[];
  selectedAsteroid: Asteroid;
  listTitle: string;
  page: Page;
  query: string;

  constructor(
    private asteroidService: AsteroidService,
    public snackBar: MdSnackBar
  ) {}

  ngOnInit(): void {
    this.listTitle = 'Asteroids';
    this.getAsteroids();
  }

  getAsteroids(page?: Page): void {
    this.asteroidService
     .getAsteroids(page)
     .then(data => {
       this.asteroids = data.near_earth_objects as Asteroid[];
       this.page = data.page as Page;
     })
     .catch(error => {
       this.snackBar.open(error, null, {
         duration: 10000
       });
     });
  }

  applyFilter(filter: string): void {
    this.query = filter;
  }
}
