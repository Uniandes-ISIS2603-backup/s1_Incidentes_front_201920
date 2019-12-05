import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TecnicoDetail } from "../tecnico-detail";
import { TecnicoService } from "../tecnico.service";

@Component({
  selector: 'tecnico-detail-list',
  templateUrl: './tecnico-detail-list.component.html',
  styleUrls: ['./tecnico-detail-list.component.css']
})
export class TecnicoDetailListComponent implements OnInit {

  tecnicoDetail: TecnicoDetail;

  id: number;
  
  constructor(
    private tecnicoService: TecnicoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.tecnicoDetail = new TecnicoDetail;
    this.getTecnicoDetail();
 }

 getTecnicoDetail(): void {
    this.tecnicoService.getDetail(this.id).subscribe(c => this.tecnicoDetail = c);
 }

}
