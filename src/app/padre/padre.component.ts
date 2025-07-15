import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  template: `
    <div>
      <app-hijo
        (button)="eventoBoton($event)"
      >
        
      </app-hijo>
      @if (bandera==true){
        <p>Soy el componente padre</p>
        <p>Mensaje que envia mi hijo {{ mensaje }}</p>
      }
    </div>
  `,
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  mensaje:string="";
  bandera:boolean=false;

  eventoBoton(msg:string):void{
    this.mensaje=msg;
    this.bandera=true;
  }

}
