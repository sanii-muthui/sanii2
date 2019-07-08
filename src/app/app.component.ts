import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, 'You can make it.','sanii',"Z.G"),
    new Quote(2, 'You can make it.', 'sanii',"E.I"),
    new Quote(3, 'You can make it.', 'sanii',"T.O"),
    new Quote(4, 'You can make it.', 'sanii',"P.S"),
    new Quote(5, 'You can make it.', 'sanii',"Q.T"),
];
  constructor(){  }
}
