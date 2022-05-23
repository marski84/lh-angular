import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../ratings-list/ratings-list.component';


// {
//   "recordId": "5e95aa806305f8b0fb2ebe8b",
//     "name": "Ferguson Kerr",
//       "score": 2,
//         "content": "Sint consectetur et do et reprehenderit non incididunt reprehenderit. Sint ad reprehenderit elit exercitation fugiat."
// }



@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating!: Rating;

  ratingAuthor: string = '';
  starRating: number = 0;
  comment: string | undefined;



  constructor() {
  }

  getFormattedComment(content: string): string {
    const contentLenght = content.length;
    const inputContent = content;
    if (contentLenght > 120) {
      inputContent.slice(0, 120);
    }
    return inputContent;
  }



  ngOnInit(): void {
    const { recordId, name, score, content } = this.rating;
    this.ratingAuthor = name;
    this.starRating = score;
    this.comment = this.getFormattedComment(content);
  }

}



