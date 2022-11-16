import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../sevices/productos.service';
import { response } from '../models/response';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Producto } from '../models/Producto';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public list: any[] = [];
  public columnas : string[] = ['Id','nombre','precioUnitario','costo','actions']

  constructor(
    public apiProductos: ProductosService,
    public dialog: MatDialog,
    public snackBar:MatSnackBar
    ) {}

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

  OpenEdit(producto : Producto){
    const dialogRef= this.dialog.open(DialogComponent,{width:'300', data : producto});
    dialogRef.afterClosed().subscribe( response =>{
     this.getProductos();
    })
   }

   Delete(producto:Producto){
    const dialogRef= this.dialog.open(DialogAlertComponent,{width:'300'});
    dialogRef.afterClosed().subscribe( result =>{
     if(result){
      this.apiProductos.delete(producto.id).subscribe(response => {if (response.exito == 1){
      this.snackBar.open('Producto Eliminado con Exito!!', '' ,{duration:2000})}})
      this.getProductos();
     }
      
    })
   }
}
