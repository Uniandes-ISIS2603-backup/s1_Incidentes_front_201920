import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IncidenteService } from '../incidente.service';
import { Incidente } from '../incidente';
import { ToastrService } from "ngx-toastr";
import { Coordinador } from '../../coordinador/coordinador'
import { EmpleadoDetail } from '../../empleado/empleado-detail'

@Component({
    selector: 'app-incidente-create',
    templateUrl: './incidente-create.component.html',
    styleUrls: ['./incidente-create.component.css']
})
export class IncidenteCreateComponent implements OnInit {


    incidenteForm: FormGroup;
    incidentes: Incidente[];

    constructor(
        private IncidenteService: IncidenteService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService
    ) {
        this.incidenteForm = this.formBuilder.group({
            descripcion: ["", [Validators.required, Validators.minLength(1)]],

            categoria: ["", [Validators.required, Validators.minLength(1)]],

            equipo: ["", [Validators.required, Validators.minLength(1)]],
        }

        );

    }
    createIncidente(newIncidente: Incidente, coordinador: Coordinador) {

        newIncidente.solucionado = '0';
        newIncidente.reabrir = '0';
        newIncidente.observaciones = 'Aun no hay';
        newIncidente.fechaHoraInicio = new Date().toISOString();
        newIncidente.prioridad = 'No asignada';
        newIncidente.calificacion = 0;
        console.log(this.IncidenteService.getEmp());
        var idEmpleado:number =120;
        var idCoordinador:number =769;
        var id:number;

        console.warn("el incidente fue creado", newIncidente);
        this.IncidenteService.createIncidente(newIncidente).subscribe(c => {
            this.incidentes.push(c);
            this.showSuccess();
            id = c.id;
        });

        var that= this;
        setTimeout(function () {
            that.IncidenteService.asignarIncidenteaEmpleado(id, idEmpleado).subscribe((cas) => {
                that.toastr.success("El empleado fue asignado", "Creado exitosamente!", { "progressBar": true, timeOut: 4000 });
            }, err => {
                that.toastr.error(err, "Error asignando el empleado", { "progressBar": true, timeOut: 4000 });
            });


        }, 500);

        var that= this;
        setTimeout(function () {
            that.IncidenteService.asignarIncidenteaCoordinador(id, idCoordinador).subscribe((cas) => {
                that.toastr.success("El coordinador fue asignado", "Creado exitosamente!", { "progressBar": true, timeOut: 4000 });
            }, err => {
                that.toastr.error(err, "Error asignando el coordinador", { "progressBar": true, timeOut: 4000 });
            });


        }, 500);

        this.incidenteForm.reset();

    }


    showSuccess() {
        for (let i = 0; i < this.incidentes.length; i++) {
            console.log(this.incidentes[i].id + ' ' + this.incidentes[i].descripcion + ' ' + this.incidentes[i].observaciones);
        }
        this.toastr.success("Incidente", "Creado exitosamente!", { "progressBar": true, timeOut: 4000 });

    }


    ngOnInit() {
        this.IncidenteService
            .getIncidentes()
            .subscribe(c => (this.incidentes = c));
    }

}