import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  title = 'quote';

  quotes: Quote [] = [

    new Quote (1, 'Joy Machuka', "'It's all a risk.'", 'Hellen Dale', new Date(2021, 5 , 22)),
    new Quote (2, 'Noel Injaga', "'The journey of 1000 miles continues with the second step.'", 'Terry Musimbi', new Date(2021,12,25)),
    new Quote (3, 'Gabrielle Union', "'We are going to need more wine.'", 'Kaavia James', new Date(2015,1,1)),
  ]


  addNewQuote(quote: any){
    let quotesLength = this.quotes.length;
    quote.index = quotesLength+1;
    quote.datePost = new Date (quote.datePost);
    this.quotes.unshift(quote);
  }

  unWanted(isDeleted: any, index: number){
    if (isDeleted){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
