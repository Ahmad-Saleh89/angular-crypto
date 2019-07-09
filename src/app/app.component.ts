import { Component } from '@angular/core';

import { CRYPTOCOINS, CryptoCoin } from './crypto-coin';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
    cryptoCoins: CryptoCoin[] = CRYPTOCOINS;

    onCryptoBought(buyingData: {cryptoName: string, cryptoAmount: string}){
      this.cryptoCoins.push({
        type: 'buying',
        name: buyingData.cryptoName,
        amount: buyingData.cryptoAmount
      });
    }

    onCryptoSold(sellingData: {cryptoName: string, cryptoAmount: string}) {
      this.cryptoCoins.push({
        type: 'selling',
        name: sellingData.cryptoName,
        amount: sellingData.cryptoAmount
      });
    }

}
