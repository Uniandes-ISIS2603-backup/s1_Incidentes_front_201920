import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CoordinadorDetail } from "../coordinador-detail";
import { CoordinadorService } from "../coordinador.service";
import { Tecnico } from '../../tecnico/tecnico';

@Component({
  selector: 'app-coordinador-tecnicos',
  templateUrl: './coordinador-tecnicos.component.html',
  styleUrls: ['./coordinador-tecnicos.component.css']
})
export class CoordinadorTecnicosComponent implements OnInit {

  coordinadorDetail: CoordinadorDetail;
  tecnicos: Tecnico[];
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
    this.coordinadorService.getDetail(this.id).subscribe(c => this.tecnicos = c.tecnicos);
  }

  getTecnicos(): void {
    this.tecnicos = this.coordinadorDetail.tecnicos;
  }

  filtrar(): void {
    console.log("Filtrando");
    this.getTecnicos()
    console.log(this.tecnicos);
    let tecnicosFiltrados: Tecnico[] = this.buscarTecnicoPorEspecialidad('HARDWARE', this.tecnicos);
    console.log(tecnicosFiltrados);
    this.tecnicos = tecnicosFiltrados;
  }

  buscarTecnicoPorEspecialidad(text: string, tecnicos: Tecnico[]): Tecnico[] {
    console.log('buscando');
    return text === ""
    ? tecnicos
    : tecnicos.filter(t => t.especialidad.includes(text));
  }

  verEstado(text:string):void{
    console.log("revisando estado del filtro");
    console.log(text);
  }
}


