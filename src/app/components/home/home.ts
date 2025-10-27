import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  nombre: string = 'Hector';
  titulo: string = 'Homer';
  ancho: number = 200; // ancho de imagen en píxeles
  hasError: boolean = false;
  mostrar: boolean = true; // toggle de contenido
  amigos: string[] = ['Bart', 'Lisa', 'Maggie']; // lista de amigos para *ngFor

  constructor() {
    console.log('Home component initialized');
    this.nombre = 'Jose';
  }

  ngOnInit() {
    console.log('Home component ngOnInit called');
    this.nombre = 'Ana';
  }

  // Devuelve true si NO hay error
  noHayError(): boolean {
    return !this.hasError;
  }

  // Devuelve true si hay error
  siHayError(): boolean {
    return this.hasError;
  }

  // Suma dos números
  sumar(a: number, b: number): number {
    return a + b;
  }

  // Cambia el nombre a Carlos
  cambiarNombre(): void {
    this.nombre = 'Carlos';
  }

  // Cambia el nombre desde un input
  cambiarNombreInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.nombre = inputElement.value;
  }

  // Alterna el valor de 'mostrar' para toggle
  flipMostrar(): void {
    this.mostrar = !this.mostrar;
    console.log('mostrar:', this.mostrar);
  }
}
