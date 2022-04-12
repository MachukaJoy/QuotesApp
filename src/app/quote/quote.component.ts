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

    new Quote (1, 'Joy Machuka', "It's all a risk", 'Hellen Dale', new Date(2021, 5 , 22)),
    new Quote (2, 'Precious Zawadi', "'The journey of 1000 miles continues with the second step.'", 'Noel Injaga', new Date(2021,12,25)),
    new Quote (3, 'Kaavia James', "'We are going to need more wine.'", 'Gabrielle Union', new Date(2015,1,1)),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
