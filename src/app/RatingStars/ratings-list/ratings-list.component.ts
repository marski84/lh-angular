import { Component, OnInit } from '@angular/core';
import { RatingStarsService } from '../rating-stars.service';

export type Rating = {
  recordId: string;
  name: string;
  score: number;
  content: string;
}


@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.css']
})
export class RatingsListComponent implements OnInit {

  ratingsList: Rating[];
  ratingScoreArray: number[];
  ratingsListToView: Rating[] = [];


  constructor(private ratingService: RatingStarsService) {
    this.ratingsList = this.ratingService.getRatingsData();
    this.ratingScoreArray = this.ratingsList.map((ratingObject: Rating) => ratingObject.score);
  }

  ngOnInit(): void {
    console.log(this.ratingsList);
    this.ratingsListToView = this.ratingsToView;
  }

  get ratingsToView() {
    const mappedRatings = this.ratingsList.slice(0, 10);
    return mappedRatings;
  }

}
