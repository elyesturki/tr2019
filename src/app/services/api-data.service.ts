import { Injectable } from '@angular/core';
import { api } from '../../config/api-config';

import { Observable, of, throwError } from 'rxjs';
//import  httpClient
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {

  constructor(private http: HttpClient) { }

  apiURL = api.urlTest3;
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  public getCities() {
    return this.http.get(this.apiURL, httpOptions)
    /*.pipe(
      map(this.extractData),
      catchError(this.handleError)
     )*/
     .pipe(map(response => {
      return response;
      }))
  }
}
