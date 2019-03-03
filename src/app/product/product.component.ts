import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  constructor(private router: Router) { }

  ngOnInit() { //这个钩子会在组件初始化时调用一次
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '商品描述一', ['cate1', 'cate2']),
      new Product(2, '第二个商品', 1.99, 4, '商品描述二', ['cate1', 'cate2']),
      new Product(3, '第三个商品', 1.99, 5, '商品描述三', ['cate1', 'cate2']),
      new Product(4, '第四个商品', 1.99, 2.5, '商品描述', ['cate1', 'cate2']),
      new Product(5, '第五个商品', 1.99, 3, '商品描述', ['cate1', 'cate2']),
      new Product(6, '第六个商品', 1.99, 4, '商品描述', ['cate1', 'cate2'])
    ];
  }
  toDetail() {
    // console.log(2772);
    this.router.navigate(['/nav']);
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){}
}