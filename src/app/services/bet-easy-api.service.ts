import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { NextToJumpResponse } from '../models/next-to-jump-response';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BetEasyApiService {

  constructor(private http: HttpClient) { }
  
  // Get list of next few races
  getNextToJump() {
    return this.http.get<NextToJumpResponse>('https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
   }
   // Error handling for API
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
