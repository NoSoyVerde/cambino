import { Component } from '@angular/core';
import { AleatorioService } from '../../services/aleatorio';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.html',
  styleUrl: './aleatorio.css',
})
export class Aleatorio {
  numeroAleatorio: number = 0;

  constructor(public aleatorioService: AleatorioService) { 

  }

  ngOnInit(){
  this.numeroAleatorio = this.aleatorioService.generarAleatorio(1,100);
  }
}
