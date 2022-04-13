import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteInputFormComponent } from './quote-input-form/quote-input-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DateCountPipe } from './date-count.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ClickDirective } from './click.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteInputFormComponent,
    QuoteDetailsComponent,
    DateCountPipe,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
