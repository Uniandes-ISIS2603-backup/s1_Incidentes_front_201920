import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActuacionService } from '../actuacion.service';
import { Actuacion } from '../actuacion';
import { ToastrService } from "ngx-toastr";
import { Incidente } from '../../incidente/incidente';

@Component({
  selector: 'app-actuacion-create',
  templateUrl: './actuacion-create.component.html',
  styles: []
})
export class ActuacionCreateComponent implements OnInit {

  actuaciones:Actuacion[];
  actuacionForm:FormGroup;

  @Input() incidente: Incidente

  constructor(
    private actuacionService: ActuacionService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { 
    this.actuacionForm = this.formBuilder.group({
      descripcion: ["", [Validators.required, Validators.minLength(2)]]
    })
  }

  createActuacion(newActuacion: Actuacion) {
    console.warn("la actuación fue creada", newActuacion);
    newActuacion.fechaHora = new Date().toISOString();
    newActuacion.incidente = this.incidente;
    this.actuacionService.createActuacion(newActuacion).subscribe(actuacion => {
      this.actuaciones.push(actuacion);
    });
    this.actuacionForm.reset();
    this.showSuccess();
  }

  showSuccess() {
    for (let i = 0; i < this.actuaciones.length; i++){
      console.log(this.actuaciones[i].descripcion+' '+this.actuaciones[i].fechaHora);
    }
    this.toastr.success("Actuación", "Creada exitosamente!", {"progressBar": true,timeOut:4000});
   
  }

  ngOnInit() {
    this.actuacionService
      .getActuaciones(this.incidente.id)
      .subscribe(actuaciones => (this.actuaciones = actuaciones));
  }

}
