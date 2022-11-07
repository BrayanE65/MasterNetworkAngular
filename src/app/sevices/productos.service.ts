import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string ='https://localhost:44374/Productos';
  constructor(
    private _http: HttpClient
  ) { }

  getProductos():Observable<response>{
       return this._http.get<response>(this.url);
  }
}
