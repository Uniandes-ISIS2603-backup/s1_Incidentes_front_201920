import { Component, OnInit } from '@angular/core';
import { Tecnico } from "../tecnico";
import { TecnicoService } from "../tecnico.service";

@Component({
  selector: 'tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  tecnicos: Tecnico[];

  constructor(private tecnicoService: TecnicoService) { }

  ngOnInit() {
    this.getTecnicos();
 }

 getTecnicos(): void {
       this.tecnicoService.getTecnicos().subscribe(tecnicos => this.tecnicos = tecnicos);
   }

}
