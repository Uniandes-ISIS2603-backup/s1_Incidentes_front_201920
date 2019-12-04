import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TecnicoDetail } from "../tecnico-detail";
import { TecnicoService } from "../tecnico.service";
import { Incidente } from '../../incidente/incidente';

@Component({
  selector: 'app-tecnico-incidentes',
  templateUrl: './tecnico-incidentes.component.html',
  styleUrls: ['./tecnico-incidentes.component.css']
})
export class TecnicoIncidentesComponent implements OnInit {

  tecnicoDetail: TecnicoDetail;

  id: number;

  constructor(
    private tecnicoService: TecnicoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.parent.params.id;
    this.tecnicoDetail = new TecnicoDetail;
    this.getTecnicoeDetail();
  }

  getTecnicoeDetail(): void {
    this.tecnicoService.getTecnicoDetail(this.id).subscribe(c => this.tecnicoDetail = c);
  }

  cerrarIncidente(incidente:Incidente): void {
    this.tecnicoService.cerrarIncidente(incidente);
  }
}
