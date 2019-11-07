import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CoordinadorService } from '../coordinador.service';
import { Coordinador } from '../coordinador';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-coordinador-create',
  templateUrl: './coordinador-create.component.html',
  styleUrls: ['./coordinador-create.component.css']
})
export class CoordinadorCreateComponent implements OnInit {

  coordinadorForm: FormGroup;
  coordinadorService: CoordinadorService;

  coordinadores: Coordinador[];

  constructor(
    private CoordinadorService: CoordinadorService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.coordinadorForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      username: ["", [Validators.required, Validators.minLength(2)]],
      password: ["", [Validators.required, Validators.minLength(2)]]
    });

  }

  createCoordinador(newCoordinador: Coordinador) {
    // Process checkout data here
    console.warn("el coordinador fue creado", newCoordinador);

    this.CoordinadorService.createCoordinador(newCoordinador).subscribe(c => {
      this.coordinadores.push(c);
      this.showSuccess();
    });
    this.coordinadorForm.reset();
  }

  showSuccess() {
    for (let i = 0; i < this.coordinadores.length; i++){
      console.log(this.coordinadores[i].id+' '+this.coordinadores[i].nombre+' '+this.coordinadores[i].username);
    }
    this.toastr.success("Coordinador", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.CoordinadorService
      .getCoordinadores()
      .subscribe(c => (this.coordinadores = c));
  }

}
