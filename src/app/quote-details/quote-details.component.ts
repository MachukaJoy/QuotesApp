import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Quote;  

  @Output() isDeleted = new EventEmitter <boolean>();

  quoteDelete(complete:boolean){
    this.isDeleted.emit(complete);
  }

  upVote = 0;

  voteUp(){
    this.upVote +=1
  }

  downVote = 0;

  voteDown(){
    this.downVote +=1
  }


  constructor() { }

  ngOnInit(): void {
  }

}
