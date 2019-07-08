import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trade-entry',
  templateUrl: './trade-entry.component.html',
  styleUrls: ['./trade-entry.component.css']
})
export class TradeEntryComponent implements OnInit {

  @Output() cryptoBought = new EventEmitter<{cryptoName: string, cryptoPrice: string}>();
  @Output() cryptoSold= new EventEmitter<{cryptoName: string, cryptoPrice: string}>();

  newCryptoName = '';
  newCryptoPrice = '';


  constructor() { }

  ngOnInit() {
  }

  onBuyCrypto() {
    this.cryptoBought.emit({cryptoName: this.newCryptoName, cryptoPrice: this.newCryptoPrice});
  }

  onSellCrypto() {
    this.cryptoSold.emit({cryptoName: this.newCryptoName, cryptoPrice: this.newCryptoPrice});
  }
}