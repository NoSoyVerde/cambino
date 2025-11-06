import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from '../../services/usuario-service';
import { User } from '../../model/userInterface';
import { UsuarioSelectorUnrouted } from '../usuario-selector-unrouted/usuario-selector-unrouted';

@Component({
  selector: 'app-mostrar-usuario',
  imports: [],
  templateUrl: './mostrar-usuario.html',
  styleUrl: './mostrar-usuario.css',
})
export class MostrarUsuario {
  usuarios: User[] = [];
  usuarioSeleccionado: User | null = null;
  private oMatDialog = inject(MatDialog);

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService.getAll().subscribe((users: User[]) => {
      this.usuarios = users;
    });
  }

  seleccionarUsuario(usuario: User) {
    this.usuarioSeleccionado = usuario;
  }

  abrirSelectorUsuario() {
    const dialogRef = this.oMatDialog.open(UsuarioSelectorUnrouted, {
      height: '600px',
      width: '800px',
      data: { usuarios: this.usuarios }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usuarioSeleccionado = result;
      }
    });
  }
}
