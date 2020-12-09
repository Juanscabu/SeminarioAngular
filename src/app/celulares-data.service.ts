import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Celular } from './lista-celulares/Celular';

const URL = "https://5fd1190eb485ea0016eee018.mockapi.io/celulares/celulares"

@Injectable({
  providedIn: 'root'
})
export class CelularesDataService {

  constructor(private http: HttpClient) { }
  
  public getAll(): Observable<Celular[]> {
   return this.http.get<Celular[]>(URL)
      .pipe(
        tap( (celulares: Celular[]) => celulares.forEach(celular => celular.cantidad = 0))
          );
      }
}
