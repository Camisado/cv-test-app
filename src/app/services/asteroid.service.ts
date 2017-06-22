import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Asteroid } from '../models/asteroid';

import { Page } from '../models/page'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AsteroidService {
  private BASE_URL = 'https://api.nasa.gov/neo/rest/v1/neo/';

  constructor (
    private http: Http
  ) {}

  getAsteroids(page: Page = {
    number: 0,
    size: 20,
    total_elements: 0,
    total_pages: 0
  }): Promise<any> {
    return this.http
      .get(this.BASE_URL + 'browse', {
        params: {
          'page': page.number,
          'size': page.size,
          'api_key': 'DEMO_KEY'
        }
      })
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  // todo: use this method fo mock-data when api is blocked
  // getAsteroids(page: Page = {
  //   number: 0,
  //   size: 20,
  //   total_elements: 0,
  //   total_pages: 0
  // }): Promise<any> {
  //   console.log({
  //     page: page.number,
  //     size: page.size
  //   })
  //   return this.http.get('../../assets/mock-data.json').toPromise().then((response) => {
  //     console.log(response.json());
  //     return response.json();
  //   });
  // }

  getAsteroidDetails(id: number): Promise<any> {
    return this.http.get(this.BASE_URL + id, {
      params: {
        'api_key': 'DEMO_KEY'
      }
    }).toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  // todo: use this method fo mock-data when api is blocked
  // getAsteroidDetails(id: number): Promise<any> {
  //   return this.http.get('../../assets/mock-data.json').toPromise().then((response) => {
  //     console.log(response.json());
  //     return response.json().near_earth_objects[0];
  //   });
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error.json().error.message);
    return Promise.reject(error.json().error.message || error.json());
  }

}
