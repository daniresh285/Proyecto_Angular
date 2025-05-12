import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { SegundoComponenteComponent } from "./segundo-componente/segundo-componente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MiComponenteComponent, SegundoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proyecto con angular';
  nombre:string = "Daniel De Los Reyes"
}