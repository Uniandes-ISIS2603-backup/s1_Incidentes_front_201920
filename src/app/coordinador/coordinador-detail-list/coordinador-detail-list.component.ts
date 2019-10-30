import { Component, OnInit } from '@angular/core';
import {Coordinador} from "../coordinador";
import {CoordinadorService} from "../coordinador.service";

@Component({
  selector: 'coordinador-detail-list',
  templateUrl: './coordinador-detail-list.component.html',
  styleUrls: ['./coordinador-detail-list.component.css']
})
export class CoordinadorDetailListComponent implements OnInit {

   coordinadores: Coordinador[];

  constructor(private coordinadorService: CoordinadorService) {  }

  ngOnInit() {
     this.getCoordinadores();
  }

  getCoordinadores(): void {
        this.coordinadorService.getCoordinadoresDetail().subscribe(coordinadores => this.coordinadores = coordinadores);
    }
}