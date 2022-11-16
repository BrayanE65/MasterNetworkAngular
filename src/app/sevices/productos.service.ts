import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';
import { response } from '../models/response';

const httpOption={
  headers:new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

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

  add(producto:Producto): Observable<response> {
       return this._http.post<response>(this.url, producto, httpOption);
  }

  edit(producto:Producto): Observable<response> {
    return this._http.put<response>(this.url, producto, httpOption);
  }

  delete(id:number): Observable<response> {
      return this._http.delete<response>(`${this.url}/${id}`);
}

}