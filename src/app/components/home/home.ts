
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})

export class Home {

  nombre = 'Rafa';
  titulo = "Homer"
  ancho = 300;
  hasError = false;
  mostrar = false;
  items = ['Manzana', 'Banana', 'Naranja'];
  today = new Date();
  nombreusuario: string = '';

  constructor() {
    console.log('constructor');
    this.nombre = 'Jose';
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.nombre = 'Ana';
  }

  noHayError() {
    return this.hasError;
  }

  siHayError() {
    return !this.hasError;
  }

  suma(a: number, b: number): number {
    return a + b;
  }

  cambiarNombreInput(event: any) {
    this.nombre = event.target.value;
  }

  flipMostrar() {
    this.mostrar = !this.mostrar;
  }

  complicado() {
    return [1, 2, 3].map(n => n * 2).filter(n => n > 2);
  }
cambiarNombre(Nuevonombre: string) {
  this.nombreusuario = Nuevonombre;
}
irASaludoEnrutado() {
  window.location.href = `/saludoenrutado/${this.nombreusuario}`;   
}
irASaludoEnrutado2() {
  window.location.href = `/saludoenrutado`;
}
}