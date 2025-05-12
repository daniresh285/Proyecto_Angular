import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  imports: [CommonModule],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})

export class MiComponenteComponent {
nombre: string = 'Daniel';
edad: number = 29
//Ejemplo de un array, en este caso de strings
nombres:Array<string> = ['Daniel', 'Juan', 'Pedro', 'Luis']

AumentarEdad() {
  this.edad++;
  alert("La edad ha aumentado a: " + this.edad);
  // this.edad = this.edad + 1, esto es lo mismo que lo de arriba pero de otra forma;
};

DisminuirEdad() {
  this.edad--;
  alert("La edad ha disminuido a: " + this.edad);
  // this.edad = this.edad - 1, esto es lo mismo que lo de arriba pero de otra forma;
};
}


console.log("Mi-componente se ha cargado totalmente")
// Este es un componente de ejemplo en Angular, hecho por Daniel De Los Reyes, esto lo que hace es generar un log en la cmd