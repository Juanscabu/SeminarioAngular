import { Component, Input, OnInit } from '@angular/core';
import { Celular } from '../lista-celulares/Celular';

@Component({
  selector: 'app-input-numerico',
  templateUrl: './input-numerico.component.html',
  styleUrls: ['./input-numerico.component.css']
})
export class InputNumericoComponent implements OnInit {

  
  constructor() {
   }
  
  @Input()
  celular!: Celular;

  ngOnInit(): void {
  }

  upCantidad(celular:Celular): void {
    if (celular.cantidad < celular.stock)
    celular.cantidad++
  }

  downCantidad(celular:Celular): void {
    if (celular.cantidad > 0)
    celular.cantidad--
  }

  changeCantidad(event: { key: any; }, celular:Celular): void {
    console.log(event.key)
  }

}
