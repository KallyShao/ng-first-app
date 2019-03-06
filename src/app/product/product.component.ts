import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() { //这个钩子会在组件初始化时调用一次
    this.products = this.productService.getProducts();
  }
  toDetail(id) {
    console.log(id);
    this.router.navigate(['/detail', id]);
  }
}

