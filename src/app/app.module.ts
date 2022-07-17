import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NasdaqService } from './services/nasdaq.service';
import { ChartComponent } from './components/chart/chart.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './pipes/search.pipe'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    SearchComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NasdaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
