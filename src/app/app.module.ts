import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TradeEntryComponent } from './trade-entry/trade-entry.component';
import { TradeItemComponent } from './trade-item/trade-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TradeEntryComponent, TradeItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
