import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludoenrutado',
  imports: [],
  templateUrl: './saludoenrutado.html',
  styleUrls: ['./saludoenrutado.css'],
  standalone: true
})
export class Saludoenrutado {

  nombre: string | null;


  constructor(private route: ActivatedRoute) {
    this.nombre = this.route.snapshot.paramMap.get('nombre');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nombre = params['noombre'] || 'desconocido';
      console.log(`Hola, ${nombre}!`);
    });
  }

}
