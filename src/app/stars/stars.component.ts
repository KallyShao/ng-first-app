import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.styl']
})
export class StarsComponent implements OnInit {

  private ratings: boolean[];
  @Input() 
  private rating: number; //父组件传入的值

  constructor() { }

  ngOnInit() {
    // this.ratings = [true, true, false, false, false];
    this.ratings = this.getStars(this.rating);
  }
  getStars(num) {
    let arr = [];
    for (let i = 0; i < Math.floor(num); i++) {
      arr.push(true);
    }
    while(arr.length < 5) {
      arr.push(false);
    }
    return arr;
  }
}
