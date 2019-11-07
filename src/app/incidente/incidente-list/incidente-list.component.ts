import { Component, OnInit } from "@angular/core"; 
import {Incidente} from "../incidente";
import {IncidenteService} from "../incidente.service";
@Component({
  selector: "incidente-list",
  templateUrl: "./incidente-list.component.html",
  styleUrls: ["./incidente-list.component.css"]
})
export class IncidenteListComponent implements OnInit {

    incidentes: Incidente[];

  constructor(private incidenteService: IncidenteService) {  }

  ngOnInit() {
     this.getIncidentes();
  }

  getIncidentes(): void {
        this.incidenteService.getIncidentes().subscribe(incidentes => this.incidentes = incidentes);
    }
}