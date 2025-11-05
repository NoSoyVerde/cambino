import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-datos-unrouted',
  imports: [],
  templateUrl: './datos-unrouted.html',
  styleUrl: './datos-unrouted.css',
})
export class DatosUnrouted {

  data = inject(MAT_DIALOG_DATA);
  oUsuario = this.data.usuario;
  ngOnInit (): void {
    console.log(this.data);
  }

}
