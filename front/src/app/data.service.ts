import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../app/models/card';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:4000/api/cartas/';

  constructor(private http: HttpClient) { }

  // Añadir carta
  addCard(card: Card): Observable<any> {
    return this.http.post(this.url, card);
  }

  // Mostrar cartas
  getCards(): Observable<any> {
    return this.http.get(this.url);
  }

  // Añadir mazo

}
