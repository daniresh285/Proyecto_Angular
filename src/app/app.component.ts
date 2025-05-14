import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { SegundoComponenteComponent } from "./segundo-componente/segundo-componente.component";
import { FormsModule } from '@angular/forms'; //Esto se usa para usar el ngModel en el html
import { ChildComponent } from "./child/child.component"; 

// El decorador @Component es una función que toma un objeto de configuración
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MiComponenteComponent, SegundoComponenteComponent, FormsModule, ChildComponent], // Esto se usa para importar el componente hijo, que se importa
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// La clase AppComponent es la clase principal del componente, que contiene la parte visible de la aplicación a la página web
export class AppComponent {
  title = 'Proyecto con angular';
  nombre:string = "Daniel De Los Reyes"
  Text: string = "Variable desde el padre"
  number: number = 0;

  // El método addOne incrementa el valor de la propiedad number en 1
  addOne() {
    this.number++;
  }
  
  //Aqui lo que se hace con person es crear un objeto con dos propiedades
    person: any = {
    sex: "hombre",
    age: 29
  }

  // La condicion es una propiedad booleana que se inicializa en false, que hace que el componente hijo no se muestre
  condition: boolean = false;
}