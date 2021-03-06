import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-joyas',
  templateUrl: './joyas.component.html',
  styles: []
})
export class JoyasComponent implements OnInit {

  public productos = [];

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private firestoreService: FirestoreService,
    public carritoService: CarritoService
    ) {
    this.activatedRoute.params.subscribe( params => {
      this.productos = [];
      if ( params['id'] === '1') {
        this.consulta();
      } else if ( params['id'] === '11' ) {
        for (let i = 12; i < 18; i++) {
          this.consultaTipo( i.toString() );
        }
      } else if ( params['id'] === '18' ) {
        for (let i = 19; i < 23; i++) {
          this.consultaTipo( i.toString() );
        }
      } else {
        this.consultaTipo( params['id'] );
      }
    });
  }

  ngOnInit(): void {
  }

  consultaTipo(elId: string) {
    this.firestoreService.consultaTipo(elId).subscribe((productosSnapshot) => {
      productosSnapshot.forEach((productoData: any) => {
        this.productos.push({
          id: productoData.payload.doc.id,
          data: productoData.payload.doc.data(),
        });
        console.log(productoData.payload.doc.data().nombre);
      });
    });
  }

  consulta() {
    this.firestoreService.getProductos().subscribe((productosSnapshot) => {
      productosSnapshot.forEach((productoData: any) => {
        this.productos.push({
          id: productoData.payload.doc.id,
          data: productoData.payload.doc.data(),
        });
      });
    });
  }

  verJoya(item: any) {

    this.router.navigate([ '/joya', item ]);

  }

  push(id: string) {
    this.firestoreService.consultas('existencias', 'idProducto', id).subscribe((existenciaSnapshot) => {
      existenciaSnapshot.forEach((existenciaData: any) => {
        if (Number(existenciaData.payload.doc.data()['cantidad']) > 0) {
          console.log(existenciaData.payload.doc.data()['cantidad']);
          this.carritoService.pushCart(id, '1');
        } else {
          console.log(existenciaData.payload.doc.data()['No hay existencias suficientes']);
        }
      });
    });
  }
}
