import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MdSnackBar } from '@angular/material';

import { AsteroidService } from '../../services/asteroid.service';
import { Asteroid } from '../../models/asteroid';

@Component({
  selector: 'app-asteroid-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public asteroid: Asteroid;
  public units: Array<string>;
  selectedUnit: string;
  orbitalDataLabelsMap: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private asteroidService: AsteroidService,
    private location: Location,
    public snackBar: MdSnackBar
  ) {
    this.units = [
      'kilometers',
      'meters',
      'miles',
      'feet'
    ];
    this.selectedUnit = this.units[0];

    this.orbitalDataLabelsMap = {
      orbit_id: 'Orbit ID',
      orbit_determination_date: 'Orbit determination date',
      orbit_uncertainty: 'Orbit uncertainty',
      minimum_orbit_intersection: 'Minimum orbit intersection',
      jupiter_tisserand_invariant: 'Jupiter tisserand invariant',
      epoch_osculation: 'Epoch osculation',
      eccentricity: 'Eccentricity',
      semi_major_axis: 'Semi major axis',
      inclination: 'Inclination',
      ascending_node_longitude: 'Ascending node longitude',
      orbital_period: 'Orbital period',
      perihelion_distance: 'Perihelion distance',
      perihelion_argument: 'Perihelion argument',
      aphelion_distance: 'Aphelion distance',
      perihelion_time: 'Perihelion time',
      mean_anomaly: 'Mean anomaly',
      mean_motion: 'Mean motion',
      equinox: 'Equinox'
    };
  }

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
       const id = params['id'];

       this.asteroidService
         .getAsteroidDetails(id)
         .then((asteroid) => {
           this.asteroid = asteroid;
         })
         .catch((error) => {
           this.snackBar.open(error, null, {
             duration: 10000
           });
         })
    });
  }

  goToNasaJpl(): void {
    window.open(this.asteroid.nasa_jpl_url, '_blank');
  }

  goBack(): void {
    this.location.back();
  }
}
