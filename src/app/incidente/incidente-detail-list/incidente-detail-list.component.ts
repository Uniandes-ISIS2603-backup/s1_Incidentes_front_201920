import { Component, OnInit } from '@angular/core';
import {Incidente} from "../incidente";
import {IncidenteService} from "../incidente.service";

@Component({
  selector: 'incidente-detail-list',
  templateUrl: './incidente-detail-list.component.html',
  styleUrls: ['./incidente-detail-list.component.css']
})
export class IncidenteDetailListComponent implements OnInit {

   incidentes: Incidente[];

  constructor(private incidenteService: IncidenteService) {  }

  ngOnInit() {
     this.getIncidentes();
  }

  getIncidentes(): void {
        this.incidenteService.getIncidentesDetail().subscribe(incidentes => this.incidentes = incidentes);
    }
}