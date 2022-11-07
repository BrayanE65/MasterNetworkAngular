import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../sevices/productos.service';
import { response } from '../models/response';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public lst: any[]=[];
  public columnas : string[] = ['Id','nombre']

  constructor(private apiProductos: ProductosService) { 
    apiProductos.getProductos().subscribe( response =>{console.log(response)}
  )}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.apiProductos.getProductos().subscribe( response =>{
      this.lst= response.data;
  });

}
}
