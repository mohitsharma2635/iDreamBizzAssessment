import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardData: { title: string, value: string | number }[] = [];

  constructor() { }

  ngOnInit() {
    this.cardData = [
      { title: 'Total Calls Originated', value: 9232 },
      { title: 'Answered Calls', value: 8232 },
      { title: 'Abandoned Calls', value: 1000 },
      { title: 'Total Talk Time', value: '100 HRS' },
      { title: 'Avg. Wait Time', value: '2 MINS 30 SEC' },
      { title: 'Avg. Call Time', value: '6 MINS 26 SEC' },
    ];
  }
}
