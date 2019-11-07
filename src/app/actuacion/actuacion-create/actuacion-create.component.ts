import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActuacionService } from '../actuacion.service';
import { Actuacion } from '../actuacion';

@Component({
  selector: 'app-actuacion-create',
  templateUrl: './actuacion-create.component.html',
  styles: []
})
export class ActuacionCreateComponent implements OnInit {

  actuaciones:Actuacion[];
  actuacionForm:FormGroup;

  constructor(
    private actuacionService: ActuacionService,
    private FormBuilder: FormBuilder
  ) { 
    this.actuacionForm = this.FormBuilder.group({
      fechaHora: ["", Validators.required],
      descripcion: ["", [Validators.required, Validators.minLength(2)]]
    })
  }

  createActuacion(newActuacion: Actuacion) {
    console.warn("la actuación fue creada", newActuacion);
    this.actuacionService.createActuacion(newActuacion).subscribe(actuacion => {
      this.actuaciones.push(actuacion);
    });
    this.actuacionForm.reset();
  }

  ngOnInit() {
    this.actuacionService
      .getActuaciones()
      .subscribe(actuaciones => (this.actuaciones = actuaciones));
  }

}
