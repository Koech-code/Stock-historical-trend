import { AfterViewInit, Component,OnInit } from '@angular/core';
import { NasdaqService } from './services/nasdaq.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  chart = [];
  datas: any;
  
  constructor (private api: NasdaqService) {}

    ngOnInit() {
      this.api.stockApi()
      .subscribe(res => {
        this.datas=res

    })  
}
}