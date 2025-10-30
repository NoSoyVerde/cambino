
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AleatorioService } from '../../services/aleatorio';
import { Aleatorio } from "../aleatorio/aleatorio";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, Aleatorio],
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
  constructor(private aleatorioService: AleatorioService) {}
  numeroAleatorio: number = 1;


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

generarAleatorio() {
  this.numeroAleatorio = this.aleatorioService.generarAleatorio(1, 100);
}
}