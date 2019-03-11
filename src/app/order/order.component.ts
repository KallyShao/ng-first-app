import { Component, OnInit, Input } from '@angular/core';
import { PriceQuote } from '../stars/stars.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.styl']
})
export class OrderComponent implements OnInit {

  price: number;
  @Input()
  private priceQuote: PriceQuote;
  
  constructor() { }

  ngOnInit() {
    console.log(this.priceQuote);
  }

}
