import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordinadorDetail } from "../coordinador-detail";
import { CoordinadorService } from "../coordinador.service";
import { Incidente } from '../../incidente/incidente';

@Component({
  selector: 'app-coordinador-incidentes',
  templateUrl: './coordinador-incidentes.component.html',
  styleUrls: ['./coordinador-incidentes.component.css']
})
export class CoordinadorIncidentesComponent implements OnInit {

  coordinadorDetail: CoordinadorDetail;
  incidentes: Incidente[];
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
    this.coordinadorService.getDetail(this.id).subscribe(c => this.incidentes = c.incidentes);
  }

  getIncidentes(): void {
    this.incidentes = this.coordinadorDetail.incidentes;
  }

  filtrarPorEspecialidad(): void {
    this.getIncidentes();
    var estado: string = (<HTMLInputElement>document.getElementById("filtroEspecialidad")).value;
    let incidentesFiltrados: Incidente[] = this.buscarIncidentePorEspecialidad(estado, this.incidentes);
    if (estado.localeCompare('sin filtros') != 0) {
      this.incidentes = incidentesFiltrados;
    }
  }

  ordenar(): void {
    this.incidentes = this.incidentes.sort((a, b) => b.calificacion - a.calificacion);
  }

  buscarIncidentePorEspecialidad(text: string, incidentes: Incidente[]): Incidente[] {
    return text === ""
      ? incidentes
      : incidentes.filter(i => i.categoria.includes(text));
  }

  verEstado(text: string): void {
    console.log("revisando estado del filtro");
    console.log(text);
  }
}
