import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumirdataService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data)
     });
     this.getJsonNew().subscribe(frase => {
      console.log(frase)
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('https://dataserverdaw.herokuapp.com/escritores');
   }

   public getJsonNew() : Observable<any> {
    return this.http.get('https://dataserverdaw.herokuapp.com/escritores/frases');
   }
}
