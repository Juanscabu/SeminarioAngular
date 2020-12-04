import { Injectable } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CelularesDataService {

  constructor(private http: HttpClientModule) { }
  public getAll() {
    //this.http.get
  }

}
