import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trade-entry',
  templateUrl: './trade-entry.component.html',
  styleUrls: ['./trade-entry.component.css']
})
export class TradeEntryComponent implements OnInit {

  @Output() cryptoBought = new EventEmitter<{cryptoName: string, cryptoAmount: string}>();
  @Output() cryptoSold= new EventEmitter<{cryptoName: string, cryptoAmount: string}>();

  newCryptoName = '';
  newCryptoAmount = '';


  constructor() { }

  ngOnInit() {
  }

  onBuyCrypto() {
    this.cryptoBought.emit({cryptoName: this.newCryptoName, cryptoAmount: this.newCryptoAmount});
    this.clearFields();
  }

  onSellCrypto() {
    this.cryptoSold.emit({cryptoName: this.newCryptoName, cryptoAmount: this.newCryptoAmount});
    this.clearFields();
  }

  clearFields(){
    this.newCryptoName = '';
    this.newCryptoAmount = '';
  }
}