import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '商品描述一', ['cate1', 'cate2']),
    new Product(2, '第二个商品', 1.99, 4, '商品描述二', ['cate1', 'cate2']),
    new Product(3, '第三个商品', 1.99, 5, '商品描述三', ['cate1', 'cate2']),
    new Product(4, '第四个商品', 1.99, 2.5, '商品描述', ['cate1', 'cate2']),
    new Product(5, '第五个商品', 1.99, 3, '商品描述', ['cate1', 'cate2']),
    new Product(6, '第六个商品', 1.99, 4, '商品描述', ['cate1', 'cate2'])
  ];
  private comments: Comment[] = [
    new Comment(1, 2, '2019-03-06 22:23:00', 's1', 2, '不错啊'),
    new Comment(2, 3, '2019-03-07 09:23:00', 's2', 5, '还可以'),
    new Comment(3, 2, '2019-03-08 12:23:00', 's3', 4, '很好的'),
    new Comment(4, 1, '2019-03-09 23:23:00', 's4', 3, 'nb')
  ];
  constructor() { }

  getProducts():Product[] {
    return this.products;
  }
  getProductById(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  getProductComments(proId: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == proId);
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

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ){}
}