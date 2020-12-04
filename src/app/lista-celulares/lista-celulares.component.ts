import { Component, OnInit } from '@angular/core';
import {Celular} from './Celular';
@Component({
  selector: 'app-lista-celulares',
  templateUrl: './lista-celulares.component.html',
  styleUrls: ['./lista-celulares.component.css']
})
export class ListaCelularesComponent implements OnInit {
  celulares: Celular[] = [
    {
      "img":"https://http2.mlstatic.com/D_NQ_NP_814188-MLA43437369484_092020-O.webp",
      "nombre":"Samsung Galaxy S20",
      "precio":"790$",
      "descripcion":"El Samsung Galaxy S20 logra ofrecer un gran paquete de funciones, especificaciones y experiencia en un cuerpo compacto y fácil de usar con una sola mano. Es también el Galaxy S20 más barato.",
      "oferta": false,
      "stock": 12,
      "cantidad": 10
    },
    {
        "img":"https://http2.mlstatic.com/D_NQ_NP_833747-MLA44154238430_112020-O.webp",
        "nombre":"Pixel 4a",
        "precio":"349$",
        "descripcion": "El celular Google Pixel 4A llega con un precio de US$349 para ofrecer una buena experiencia de uso, pero sobretodo una cámara que le permite competir con celulares que cuestan tres veces su precio o hasta más." ,
        "oferta": false,
        "stock": 15,
        "cantidad": 13
      },
    {
      "img":"https://http2.mlstatic.com/D_NQ_NP_663067-MLA43654417340_102020-O.webp",
      "nombre":"Iphone 11",
      "precio":"599$",
      "descripcion":"El iPhone 11 es un buen sucesor del iPhone XR de 2018 y ofrece muchas de las funciones y potencia del iPhone 11 Pro y Pro Max, pero a un precio más bajo. Sin embargo, a pesar de su mejor cámara el XR tiene una batería más duradera",
      "oferta": true,
      "stock": 10,
      "cantidad": 6
    },
    {
      "img":"https://http2.mlstatic.com/D_NQ_NP_808321-MLA31832222796_082019-O.webp",
      "nombre":"OnePlus 8 Pro",
      "precio":"999$",
      "descripcion":"El OnePlus 8 Pro lo quiere hacer todo y ha tenido que sacrificar menos cualidades que ningún otro celular de la empresa. Con esto, OnePlus cree tener lo necesario para retar a los Galaxy S20 y al iPhone 11 Pro en su propio territorio",
      "oferta": false,
      "stock": 5,
      "cantidad": 2
    },
    {
      "img":"https://http2.mlstatic.com/D_NQ_NP_848263-MLA41240273558_032020-O.webp",
      "nombre":"Galaxy A51",
      "precio":"400$",
      "descripcion":"El Galaxy A51 4G decepciona por su procesador, pero el Galaxy A51 5G mantiene todas las cosas buenas de esa versión, tiene un procesador mucho mejor, batería de 4,500mAh y conectividad 5G.",
      "oferta": true,
      "stock": 20,
      "cantidad": 16
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
