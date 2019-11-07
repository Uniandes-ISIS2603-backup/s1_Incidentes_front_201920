import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordinadorDetail } from "../coordinador-detail";
import { CoordinadorService } from "../coordinador.service";

@Component({
  selector: 'app-coordinador-incidentes',
  templateUrl: './coordinador-incidentes.component.html',
  styleUrls: ['./coordinador-incidentes.component.css']
})
export class CoordinadorIncidentesComponent implements OnInit {

  coordinadorDetail: CoordinadorDetail;

  id: number;

  constructor(
    private coordinadorService: CoordinadorService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.coordinadorDetail = new CoordinadorDetail;
    this.getCoordinadoreDetail();
  }

  getCoordinadoreDetail(): void {
    this.coordinadorService.getDetail(this.id).subscribe(c => this.coordinadorDetail = c);
  }

}
