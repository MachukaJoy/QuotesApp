import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteInputFormComponent } from './quote-input-form/quote-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteInputFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
