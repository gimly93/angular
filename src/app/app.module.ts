import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import {routing} from "./app.routing";
import {QuoteService} from "./quote.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
      routing,
    HttpModule,
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
