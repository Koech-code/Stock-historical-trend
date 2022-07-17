import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  title = 'angular-text-search-highlight';
  public searchText = '';
  characters = [
    'Walmart',
    'Amazon',
    'Apple',
    'CVS Health',
    'Alphabet',
    'Costco',
    'Microsoft',
    'Intel',
    'PepsiCo',
    'IBM',
    '	MetLife',
    ]

}
