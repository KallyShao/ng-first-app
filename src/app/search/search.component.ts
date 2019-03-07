import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {

  constructor() { }

  defaultVal: string = '';
  attr: string = 'test';
  isActive: boolean = true;
  ngOnInit() {
  }

  _input(ev) {
    console.log(ev.target.getAttribute('aa'));
    this.attr = 'test1';
  }
}
