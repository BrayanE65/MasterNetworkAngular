import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
    public snackBar: MatSnackBar
  ) { }

  close(){
    this.dialogRef.close();
  }

   addProducto(){
    const producto: Producto = {nombre: this.nombre};
    this.apiProductos.add(producto).subscribe(response =>{
      if (response.exito === 1){
        this.dialogRef.close();
        this.snackBar.open('Producto instertado con Exito!!', '' ,{duration:2000})
      }
    })
   }

  ngOnInit(): void {
  }

}
