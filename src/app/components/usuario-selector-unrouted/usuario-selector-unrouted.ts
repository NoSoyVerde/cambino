import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../model/userInterface';
import { UsuarioService } from '../../services/usuario-service';

@Component({
  selector: 'app-usuario-selector-unrouted',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './usuario-selector-unrouted.html',
  styleUrl: './usuario-selector-unrouted.css',
})
export class UsuarioSelectorUnrouted {
  usuarios: User[] = [];
  usuariosFiltrados: User[] = [];
  filtroTexto: string = '';
  usuarioSeleccionado: User | null = null;
  
  data = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<UsuarioSelectorUnrouted>);

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService.getAll().subscribe((users: User[]) => {
      this.usuarios = users;
      this.usuariosFiltrados = users;
    });
  }

  filtrarUsuarios(event: any) {
    this.filtroTexto = event.target.value.toLowerCase();
    this.usuariosFiltrados = this.usuarios.filter(usuario =>
      usuario.name.toLowerCase().includes(this.filtroTexto) ||
      usuario.email.toLowerCase().includes(this.filtroTexto) ||
      usuario.company.name.toLowerCase().includes(this.filtroTexto) ||
      usuario.address.city.toLowerCase().includes(this.filtroTexto)
    );
  }

  seleccionarUsuario(usuario: User) {
    this.usuarioSeleccionado = usuario;
  }

  confirmarSeleccion() {
    if (this.usuarioSeleccionado) {
      this.dialogRef.close(this.usuarioSeleccionado);
    }
  }

  cerrar() {
    this.dialogRef.close();
  }
}
