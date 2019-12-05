import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { IncidenteService } from '../../incidente/incidente.service';
import { Empleado } from '../empleado';
import { EmpleadoDetail } from '../empleado-detail';

@Component({
  selector: 'app-empleado-detail',
  templateUrl: './empleado-detail.component.html',
  styleUrls: ['./empleado-detail.component.css']
})
export class EmpleadoDetailComponent implements OnInit {

  constructor(
    private incidenteService: IncidenteService,
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute
  ) { }
  
  empleadoDetail: EmpleadoDetail;

  @Input() empleado_id: number;
  
  ngOnInit() {
    this.empleado_id = +this.route.snapshot.paramMap.get("id");
    this.empleadoDetail = new EmpleadoDetail;
    this.getEmpleadoDetail();
 }
 util():void{
   this.incidenteService.setEmp(this.empleado_id);
 }

 getEmpleadoDetail(): void {
    this.empleadoService.getEmpleadoDetail(this.empleado_id).subscribe(c => this.empleadoDetail = c);
 }
}