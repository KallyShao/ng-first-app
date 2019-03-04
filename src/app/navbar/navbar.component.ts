import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

  private productId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.routeInfo.snapshot.params);
    this.productId = this.routeInfo.snapshot.params['id'];
  }

}
