import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trade-item',
  templateUrl: './trade-item.component.html',
  styleUrls: ['./trade-item.component.css']
})
export class TradeItemComponent implements OnInit {

  @Input('cryptoCoin') myCoin: {type: string, name: string, amount: string};

  constructor() { }

  ngOnInit() {
  }

}