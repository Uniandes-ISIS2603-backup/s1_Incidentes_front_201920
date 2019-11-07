import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import {IncidenteDetail} from "../incidente-detail";
import {IncidenteService} from "../incidente.service"; 
@Component({
  selector: 'incidente-detail-list',
  templateUrl: './incidente-detail-list.component.html',
  styleUrls: ['./incidente-detail-list.component.css']
})
export class IncidenteDetailListComponent implements OnInit {

   
   incidenteDetail: IncidenteDetail;
   id:number;

  constructor(
   private incidenteService: IncidenteService,
   private route: ActivatedRoute,
   private router: Router) {  }

  ngOnInit() {
   this.id = +this.route.snapshot.paramMap.get("id");
   this.incidenteDetail = new IncidenteDetail;
     this.getIncidentesDetail();
  }

  getIncidentesDetail(): void {
   this.incidenteService.getIncidentesDetail(this.id).subscribe(i => this.incidenteDetail = i);
}
}