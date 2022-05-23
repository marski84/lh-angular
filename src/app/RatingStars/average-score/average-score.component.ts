import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-average-score',
  templateUrl: './average-score.component.html',
  styleUrls: ['./average-score.component.css']
})
export class AverageScoreComponent implements OnInit {
  @Input() scoreArray!: number[];
  averageScore: number = 0;



  constructor() { }

  ngOnInit(): void {
    const averageScore = this.scoreArray.reduce((acc, currVal) => { return acc + currVal }, 0) / this.scoreArray.length;
    const roundedAverageScore = Number(averageScore.toFixed(2));
    this.averageScore = roundedAverageScore;
  }

}
