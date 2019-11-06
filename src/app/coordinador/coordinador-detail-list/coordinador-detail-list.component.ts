import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coordinador } from "../coordinador";
import { CoordinadorDetail } from "../coordinador-detail";
import { CoordinadorService } from "../coordinador.service";

@Component({
   selector: 'coordinador-detail-list',
   templateUrl: './coordinador-detail-list.component.html',
   styleUrls: ['./coordinador-detail-list.component.css']
})
export class CoordinadorDetailListComponent implements OnInit {

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