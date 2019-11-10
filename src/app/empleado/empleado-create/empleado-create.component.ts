import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-empleado-create',
  templateUrl: './empleado-create.component.html',
  styleUrls: ['./empleado-create.component.css']
})
export class EmpleadoCreateComponent implements OnInit {
  empleadoForm: FormGroup;
  empleadoService: EmpleadoService;

  empleados: Empleado[];

  constructor(
    private EmpleadoService: EmpleadoService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.empleadoForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      username: ["", [Validators.required, Validators.minLength(2)]],
      password: ["", [Validators.required, Validators.minLength(2)]]
    });

  }

  createEmpleado(newEmpleado: Empleado) {
    // Process checkout data here
    console.warn("el empleado fue creado", newEmpleado);

    this.EmpleadoService.createEmpleado(newEmpleado).subscribe(c => {
    this.empleados.push(c);
    this.showSuccess();
    });
    this.empleadoForm.reset();
  }

  showSuccess() {
    for (let i = 0; i < this.empleados.length; i++){
      console.log(this.empleados[i].id+' '+this.empleados[i].nombre+' '+this.empleados[i].username);
    }
    this.toastr.success("Empleado", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.EmpleadoService
      .getEmpleados()
      .subscribe(c => (this.empleados = c));
  }
}