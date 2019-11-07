import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordinadorDetail } from "../coordinador-detail";
import { CoordinadorService } from "../coordinador.service";
import { Tecnico } from '../tecnico';

const btnfilterByEspecialidad: HTMLElement = document.getElementById(
  "button-filterByEspecialidad"
);

const filtroEspecialidad: HTMLElement = document.getElementById(
  "filtroEspecialidad"
);

@Component({
  selector: 'app-coordinador-tecnicos',
  templateUrl: './coordinador-tecnicos.component.html',
  styleUrls: ['./coordinador-tecnicos.component.css']
})
export class CoordinadorTecnicosComponent implements OnInit { 

  coordinadorDetail: CoordinadorDetail;

  id: number;

  constructor(
    private coordinadorService: CoordinadorService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.parent.params.id;
    this.coordinadorDetail = new CoordinadorDetail;
    this.getCoordinadoreDetail();
  }

  getCoordinadoreDetail(): void {
    this.coordinadorService.getDetail(this.id).subscribe(c => this.coordinadorDetail = c);
  }

  filtrarPorEspecialidad(text: string) {
    console.log(filtroEspecialidad);
    this.clearTable();
    let tecnicosFiltered: Tecnico[] = this.searchTecnicoByEspecialidad(text, this.coordinadorDetail.tecnicos);
  }

  searchTecnicoByEspecialidad(nameKey: string, tecnicos: Tecnico[]) {
    return nameKey === ""
      ? this.coordinadorDetail.tecnicos
      : tecnicos.filter(t => t.especialidad.includes(nameKey));
  }

  clearTable() {
  }
}

