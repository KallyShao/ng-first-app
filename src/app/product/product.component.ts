import { Component, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { PriceQuote } from '../stars/stars.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private keyword: string = '';
  private titleFilter: FormControl = new FormControl();
  //////////接收子组件传的值
  private priceQuote: PriceQuote = new PriceQuote('', 0);
  private obj = {
    name: 'trest'
  };

  constructor(private router: Router, private productService: ProductService) {
    this.titleFilter.valueChanges.pipe(debounceTime(500))
    .subscribe(
      value => this.keyword = value
    );
   }

  ngOnInit() { //这个钩子会在组件初始化时调用一次
    this.products = this.productService.getProducts();
  }
  toDetail(id) {
    console.log(id);
    this.router.navigate(['/detail', id]);
  }
  _emitPrice(ev: PriceQuote){
    this.priceQuote = ev;
  }
  _emitBuy(ev: PriceQuote) {
    this.priceQuote = ev;
  }

}

