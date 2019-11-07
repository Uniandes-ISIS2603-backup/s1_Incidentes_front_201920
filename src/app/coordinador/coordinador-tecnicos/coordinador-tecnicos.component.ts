import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordinadorDetail } from "../coordinador-detail";
import { CoordinadorService } from "../coordinador.service";

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
    this.id = +this.route.snapshot.paramMap.get("id");
    this.coordinadorDetail = new CoordinadorDetail;
    
  }

  getCoordinadoreDetail(): void {
    this.coordinadorService.getDetail(this.id).subscribe(c => this.coordinadorDetail = c);
  }

}
