import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote.interface';
import {Response} from '@angular/http';
import {QuoteService} from "../quote.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];
  constructor(private quoteSevice: QuoteService) { }

  ngOnInit() {
  }
 onGetQuotes(){
    this.quoteSevice.getQuotes().subscribe(
        (quotes: Quote[]) => this.quotes = quotes,
        (error: Response) => console.log(error)
    );
 }
}
