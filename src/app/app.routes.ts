import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Landing } from './components/landing/landing';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'landing', component: Landing },
  { path: 'home', component: Home },
];
