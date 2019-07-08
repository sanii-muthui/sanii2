import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
  quotes = [
    new Quote(1, 'The moon is beautiful.','A.B Clark',"Z.G"),
    new Quote(2, 'The moon is beautiful.', 'A.B Clark',"Z.G"),
    new Quote(3, 'The moon is beautiful.', 'A.B Clark',"Z.G"),
    new Quote(4, 'The moon is beautiful.', 'A.B Clark',"Z.G"),
    new Quote(5, 'The moon is beautiful.', 'A.B Clark',"Z.G"),
];

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  this.quotes.unshift(quote)

}

toogleDetails(index){
  this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
  constructor() { }

  ngOnInit() {
  }

}
