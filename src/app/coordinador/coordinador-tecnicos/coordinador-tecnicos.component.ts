import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CoordinadorDetail } from "../coordinador-detail";
import { CoordinadorService } from "../coordinador.service";
import { Tecnico } from '../../tecnico/tecnico';
import { FormBuilder, FormGroup } from "@angular/forms";

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
    this.getTecnicos()
    var estado:string = (<HTMLInputElement>document.getElementById("especialidad")).value;
    let tecnicosFiltrados:Tecnico[] = this.buscarTecnicoPorEspecialidad(estado, this.tecnicos);
    if(estado.localeCompare('sin filtros')!=0){
      this.tecnicos = tecnicosFiltrados;
    }
  }

  ordenar(): void {
    this.tecnicos = this.tecnicos.sort((a, b) => a.numCasos - b.numCasos);
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


