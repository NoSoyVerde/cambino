import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class HijoComponent {
@Input() mensajeHijoRecibidoDelPadre: string = "";
@Output() mensajeAlPadreDesdeElHijoEventEmitter = new EventEmitter<string>();

enviarMensajeAlPadre() {
  const mensajeParaElPadre = "El mensaje recibido ha sido obedecido : " + this.mensajeHijoRecibidoDelPadre;
  this.mensajeAlPadreDesdeElHijoEventEmitter.emit(mensajeParaElPadre);
}
}
