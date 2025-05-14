import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // Esta es la forma correcta de hacerlo, ya que estamos usando el decorador Input para recibir un valor desde el padre.
  //@Input()
  //msg: string = ''

  msg = input<string>(''); 

  //@Input()
  //person: any

  person = input<any>();
}
