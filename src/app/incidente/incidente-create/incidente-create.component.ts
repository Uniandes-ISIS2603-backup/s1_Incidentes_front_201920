import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IncidenteService } from '../incidente.service';
import { Incidente } from '../incidente';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-incidente-create',
  templateUrl: './incidente-create.component.html',
  styleUrls: ['./incidente-create.component.css']
})
export class IncidenteCreateComponent implements OnInit {
    
    incidenteForm: FormGroup;
    incidenteService: IncidenteService;
    incidentes: Incidente[];
    
    constructor(
                private IncidenteService: IncidenteService,
                private formBuilder: FormBuilder,
                private toastr: ToastrService
                ) 
                {
                    this.incidenteForm = this.formBuilder.group({
                    fechaHoraInicio: ["", [Validators.required, Validators.minLength(1)]],
                    fechaHoraFinal: ["", [Validators.required, Validators.minLength(1)]],
                    descripcion: ["", [Validators.required, Validators.minLength(1)]],
                    observaciones: ["", [Validators.required, Validators.minLength(1)]],
                    calificacion: ["", [Validators.required, Validators.minLength(1)]],
                    categoria: ["", [Validators.required, Validators.minLength(1)]],
                    prioridad: ["", [Validators.required, Validators.minLength(1)]],
                    solucionado: ["", [Validators.required, Validators.minLength(1)]],
                    reabrir: ["", [Validators.required, Validators.minLength(1)]],
                    equipo: ["", [Validators.required, Validators.minLength(1)]],
                    tecnico: <number><unknown>[],
                    empleado:<number><unknown>[],
                    coordinador: <number><unknown>[]

                }
                
                );
            
      }
    createIncidente(newIncidente: Incidente) {
        console.warn("el incidente fue creado", newIncidente);
    
        this.IncidenteService.createIncidente(newIncidente).subscribe(c => {
            this.incidentes.push(c);
            this.showSuccess();
            });
        this.incidenteForm.reset();
    }
    showSuccess() {
        for (let i = 0; i < this.incidentes.length; i++){
          console.log(this.incidentes[i].id+' '+this.incidentes[i].descripcion+' '+this.incidentes[i].observaciones);
        }
        this.toastr.success("Incidente", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
       
    }
    
    
    ngOnInit() {
        this.IncidenteService
        .getIncidentes()
        .subscribe(c => (this.incidentes = c));
    }

}