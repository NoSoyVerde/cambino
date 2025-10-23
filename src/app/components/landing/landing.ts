import { Component } from '@angular/core';
import { Home } from "../home/home";

@Component({
  selector: 'app-landing',
  imports: [Home],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
  standalone: true,
})
export class Landing {

}
