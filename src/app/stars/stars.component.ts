import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.styl']
})
export class StarsComponent implements OnInit {

  private ratings: boolean[];
  @Input() 
  private rating: number; //父组件传入的值

  ////////////////
  stockCode: string = 'IBM';
  price: number;
  //对外输出
  @Output()
  lastPrice: EventEmitter<PriceQuote>= new EventEmitter();

  constructor() { 
    setInterval(() => {
      let quote: PriceQuote = new PriceQuote(this.stockCode, 100*Math.random());
      this.price = quote.latestPrice;
      this.lastPrice.emit(quote);
    }, 1000)
  }

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
// 输出属性学习
export class PriceQuote {
  constructor (public stockCode: string, public latestPrice: number) {

  }
}