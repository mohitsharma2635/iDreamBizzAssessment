import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datefilter',
  templateUrl: './datefilter.component.html',
  styleUrls: ['./datefilter.component.css']
})
export class DatefilterComponent implements OnInit {
   selectedFilter: string = 'Today';

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }

  constructor() { }

  ngOnInit() {
  }

}
