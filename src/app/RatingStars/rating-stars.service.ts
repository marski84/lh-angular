import { Injectable } from '@angular/core';
import * as data from './data/data.json';

@Injectable({
  providedIn: 'root'
})
export class RatingStarsService {

  // otypow
  ratingData: any

  constructor() {
    this.ratingData = data;
    // Object.values(data);
    // console.log(this.ratingData);

  }

  getRatingsData() {
    return this.ratingData.ratings;
  }


}
