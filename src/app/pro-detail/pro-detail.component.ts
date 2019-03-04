import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.styl']
})
export class ProDetailComponent implements OnInit {
  proTitle: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.proTitle = this.routeInfo.snapshot.params['proTitle'];
  }

}
