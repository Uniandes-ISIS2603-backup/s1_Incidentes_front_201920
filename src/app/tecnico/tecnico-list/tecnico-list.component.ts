import { Component, OnInit } from '@angular/core';

import {Tecnico} from "../tecnico";

import {TecnicoService} from '../tecnico.service';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  constructor(private tecnicoService: TecnicoService) { 
    this.tecnicos=[];
  }
  
  tecnicos: Tecnico[]; 

  getTecnicos(): void {
        this.tecnicoService.getTecnico().subscribe(tecnicos => this.tecnicos = tecnicos);
    }

  ngOnInit() {

    this.getTecnicos();
  }

}