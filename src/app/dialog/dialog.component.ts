import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from '../models/Producto';
import { ProductosService } from '../sevices/productos.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public nombre!: string;


  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public apiProductos: ProductosService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public producto : Producto

  ) { 
    if (this.producto !== null){
       this.nombre = producto.nombre;
    }
  }

  close(){
    this.dialogRef.close();
  }

   addProducto(){
    const producto: Producto = {nombre: this.nombre,id: this.producto.id};
    this.apiProductos.add(producto).subscribe(response =>{
      if (response.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Producto instertado con Exito!!', '' ,{duration:2000})
      }
    })
   }

   editProducto(){
    const producto: Producto = {nombre: this.nombre, id: this.producto.id};
    this.apiProductos.edit(producto).subscribe(response =>{
      if (response.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Producto Editado con Exito!!', '' ,{duration:2000})
      }
    })
   }


  ngOnInit(): void {
  }

}
