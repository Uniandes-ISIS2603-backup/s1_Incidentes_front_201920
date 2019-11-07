import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { EmpleadoDetail } from '../empleado-detail';

@Component({
  selector: 'app-empleado-detail',
  templateUrl: './empleado-detail.component.html',
  styleUrls: ['./empleado-detail.component.css']
})
export class EmpleadoDetailComponent implements OnInit {

  constructor(
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute
  ) { }

  empleadoDetail: EmpleadoDetail;

  @Input() empleado_id: number;

  loader: any;

  getEmpleadoDetail():void {
    this.empleadoService.getEmpleadoDetail(this.empleado_id).subscribe(o => {
      this.empleadoDetail = o
    });
  }

  onLoad(params) {
    this.empleado_id = parseInt(params['id']);
    console.log(" en detail " + this.empleado_id);
    this.empleadoDetail = new EmpleadoDetail();
    this.getEmpleadoDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}