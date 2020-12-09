import { Component, OnInit } from '@angular/core';
import { CelularesDataService } from '../celulares-data.service';
import {Celular} from './Celular';
@Component({
  selector: 'app-lista-celulares',
  templateUrl: './lista-celulares.component.html',
  styleUrls: ['./lista-celulares.component.css']
})
export class ListaCelularesComponent implements OnInit {
  celulares: Celular[] = []

  constructor(private celularesDataService: CelularesDataService) {

   }

  ngOnInit(): void {
    this.celularesDataService.getAll()
    .subscribe(celulares => this.celulares = celulares)
  }

}
