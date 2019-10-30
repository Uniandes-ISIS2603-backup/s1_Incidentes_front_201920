import { Component, OnInit } from "@angular/core";
import {Coordinador} from "../coordinador";
import {CoordinadorService} from "../coordinador.service";
@Component({
  selector: "coordinador-list",
  templateUrl: "./coordinador-list.component.html",
  styleUrls: ["./coordinador-list.component.css"]
})
export class CoordinadorListComponent implements OnInit {

  coordinadores: Coordinador[];

  constructor(private coordinadorService: CoordinadorService) {  }

  ngOnInit() {
     this.getCoordinadores();
  }

  getCoordinadores(): void {
        this.coordinadorService.getCoordinadores().subscribe(coordinadores => this.coordinadores = coordinadores);
    }
}
