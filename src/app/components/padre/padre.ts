import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class PadreComponent {
mensajeHijoEnviadoDesdeElPadre: string = "";

enviar(mensaje: string) {
  this.mensajeHijoEnviadoDesdeElPadre = mensaje;  
}

recibirMensajeDelHijo(mensajeDelHijo: string) {
  alert("Mensaje recibido del hijo: " + mensajeDelHijo);
  }


}
