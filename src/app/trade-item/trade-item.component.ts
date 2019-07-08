import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trade-item',
  templateUrl: './trade-item.component.html',
  styleUrls: ['./trade-item.component.css']
})
export class TradeItemComponent implements OnInit {

  @Input('cryptoCoin') cryptoCoin: {type: string, name: string, price: string};

  constructor() { }

  ngOnInit() {
  }

}