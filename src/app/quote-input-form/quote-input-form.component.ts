import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-input-form',
  templateUrl: './quote-input-form.component.html',
  styleUrls: ['./quote-input-form.component.css']
})
export class QuoteInputFormComponent implements OnInit {

  newQuote = new Quotes(0, "", "", "", new Date());

  @Output() addQuote = new EventEmitter <Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes(0, "", "", "", new Date());
  }
  constructor() { }

  ngOnInit(): void {
  }

}
