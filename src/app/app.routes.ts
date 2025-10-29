import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Landing } from './components/landing/landing';
import { Ejercicio01clase } from './components/ejercicio01clase/ejercicio01clase';
import { Saludoenrutado } from './components/saludoenrutado/saludoenrutado';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'landing', component: Landing },
  { path: 'home', component: Home },
  { path: 'ejercicio01clase', component: Ejercicio01clase },
  { path: 'saludoenrutado', component: Saludoenrutado },
  { path: 'saludoenrutado/:nombre', component: Saludoenrutado }
];
