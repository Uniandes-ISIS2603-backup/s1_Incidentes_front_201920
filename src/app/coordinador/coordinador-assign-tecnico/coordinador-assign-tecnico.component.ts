import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tecnico } from '../tecnico';
import { IncidenteDetail } from '../../incidente/incidente-detail'
import { IncidenteService } from '../../incidente/incidente.service';

import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-coordinador-assign-tecnico',
  templateUrl: './coordinador-assign-tecnico.component.html',
  styleUrls: ['./coordinador-assign-tecnico.component.css']
})
export class CoordinadorAssignTecnicoComponent implements OnInit {

  prioridad = new FormControl('', Validators.required);
  idTecnico = new FormControl('', Validators.required);

  formCompromisos = new FormGroup({
    prioridad: this.prioridad,
    idTecnico: this.idTecnico
  });

  @Input() tecnicos: Tecnico[]
  @Input() incidente: IncidenteDetail

  constructor(private incidenteService: IncidenteService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  guardar() {
    this.incidente.prioridad = this.prioridad.value;
    this.incidente.tecnico = this.idTecnico.value;
    this.incidenteService.updateIncidente(this.incidente);
    this.showSuccess
  }

  showSuccess() {
    console.log(this.incidente.id + ":" + this.incidente.prioridad + "," + this.incidente.tecnico);
    this.toastr.success("Actuación", "Creada exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
}
