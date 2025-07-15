import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  template: `
    <div>
      <p>Soy el componente hijo</p>
      <button (click)="notificarPadre()" >Dame click</button>
    </div>
  `,
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Output() button:EventEmitter<string> = new EventEmitter<string>();

  notificarPadre():void{
    //emitir el evento  
    this.button.emit("Le dieron click al boton");  
  }

}
