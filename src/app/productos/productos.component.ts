import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../sevices/productos.service';
import { response } from '../models/response';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public list: any[] = [];
  public columnas : string[] = ['Id','nombre','precioUnitario','costo']

  constructor(
    public apiProductos: ProductosService,
    public dialog: MatDialog
    ) { 
    apiProductos.getProductos().subscribe( response =>{console.log(response)}
  )
}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.apiProductos.getProductos().subscribe( response =>{
      this.list= response.datos;
  });
  }
  OpenAdd(){
   const dialogRef= this.dialog.open(DialogComponent,{width:'300'});
   dialogRef.afterClosed().subscribe( response =>{
    this.getProductos();
   })
  }
}
