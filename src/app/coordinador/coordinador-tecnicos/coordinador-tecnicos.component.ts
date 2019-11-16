import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CoordinadorDetail } from "../coordinador-detail";
import { CoordinadorService } from "../coordinador.service";
import { Tecnico } from '../../tecnico/tecnico';

const btnfilterByEspecialidad: HTMLElement = document.getElementById(
  "button-filterByEspecialidad"
);

const filtroEspecialidad: HTMLElement = document.getElementById(
  "filtroEspecialidad"
);
// btnfilterByEspecialidad.onclick = () => filtrarPorEspecialidad();


// function filtrarPorEspecialidad(): void {
//   console.log(btnfilterByEspecialidad);
//   console.log(filtroEspecialidad);
// }

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

}


