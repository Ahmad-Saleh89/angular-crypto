import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
    cryptoCoins = [{type: 'buying', name: 'Bitcoin', price: '10,000'}];

    onCryptoBought(buyingData: {cryptoName: string, cryptoPrice: string}){
      this.cryptoCoins.push({
        type: 'buying',
        name: buyingData.cryptoName,
        price: buyingData.cryptoPrice
      });
    }

    onCryptoSold(sellingData: {cryptoName: string, cryptoPrice: string}) {
      this.cryptoCoins.push({
        type: 'selling',
        name: sellingData.cryptoName,
        price: sellingData.cryptoPrice
      });
    }

}
