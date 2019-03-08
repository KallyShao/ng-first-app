import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product, Comment } from '../shared/product.service';

@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.styl']
})
export class ProDetailComponent implements OnInit {
  proDetail: Product;
  comments: Comment[];

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    let proId = this.routeInfo.snapshot.params['id'];
    this.proDetail = this.productService.getProductById(proId);
    this.comments = this.productService.getProductComments(proId);
  }

}
