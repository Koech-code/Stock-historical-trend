import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class NasdaqService {

  constructor(private http: HttpClient) { }
  
  apiURL = "https://data.nasdaq.com/api/v3/datasets/WIKI/FB/data.json?api_key=eL-zu6az_FFk_Pz4BJFD";

  stockApi() {
    return this.http.get(this.apiURL)
    .pipe(map((res: any) => Object.values(res)))
  }

}
