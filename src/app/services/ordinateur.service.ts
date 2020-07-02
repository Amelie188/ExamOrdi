import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Ordinateur } from '../models/ordinateur';
import {catchError, retry} from 'rxjs/internal/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {
  myURL = 'http://localhost:3000/ordinateur';
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };

  // marques = [
  //   new Marque("Dell","HP","Apple", "Asus")
  // ];

  constructor( private http : HttpClient) { }

  // getAllMarques(): Marque[] {
  //   return this.marques;
  // }

  getAllOrdinateurs(): Observable <Ordinateur[]> {
    return this.http.get<Ordinateur[]>(this.myURL).pipe(retry(1),catchError(this.handleError));
  }
  
  getOneOrdinateur(id: number): Observable <Ordinateur> {
    return this.http.get<Ordinateur>(this.myURL + '/' + id).pipe(retry(1), catchError(this.handleError)); 
  }

  addOrdinateur(ordinateur: Ordinateur): Observable <Ordinateur> {
    return this.http.post<Ordinateur>(this.myURL,ordinateur, this.httpOptions).pipe(catchError(this.handleError)
      ); 
  }

  deleteOrdinateur (id: number): Observable <Ordinateur> { 
    return this.http.delete<Ordinateur>(this.myURL + '/' + id,this.httpOptions).pipe(retry(1),catchError(this.handleError)); 
    }
  
  editOrdinateur(ordinateur: Ordinateur): Observable <Ordinateur> {
    return this.http.put<Ordinateur>(this.myURL + '/' + ordinateur.id ,ordinateur, this.httpOptions).pipe(retry(1),catchError(this.handleError)      );
     } 


  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
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
