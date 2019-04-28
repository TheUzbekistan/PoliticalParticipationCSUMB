import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Pet } from "./pet";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GetsetpetService {

  private petUrl = 'api/petitions'; //URL to api

  constructor(
    private http: HttpClient
  ) { }

  getPet(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.petUrl)
      .pipe(
        catchError(this.handleError<Pet[]>('getPet', [])) //catch error
      );
  }
  setPet(pet : Pet): Observable<Pet> {
    return this.http.post<Pet>(this.petUrl, pet, httpOptions)
    .pipe(
      catchError(this.handleError<Pet>('setPet'))
      ); //catch error
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}
