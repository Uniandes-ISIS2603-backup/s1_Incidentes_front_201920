import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Tecnico } from '../tecnico';
import { ToastrService } from "ngx-toastr";
import { TecnicoService } from '../tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnicoForm: FormGroup;
  tecnicos: Tecnico[];

  constructor(
    private TecnicoService: TecnicoService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.tecnicoForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      username: ["", [Validators.required, Validators.minLength(2)]],
      password: ["", [Validators.required, Validators.minLength(2)]],
      especialidad: ["", [Validators.required, Validators.minLength(2)]]
    });
  }
  createTecnico(newTecnico: Tecnico) {
    // Process checkout data here
    console.warn("el tecnico fue creado", newTecnico);

    this.TecnicoService.createTecnico(newTecnico).subscribe(t => {
      this.tecnicos.push(t);
      this.showSuccess();
    });
    this.tecnicoForm.reset();
  }

  showSuccess() {
    for (let i = 0; i < this.tecnicos.length; i++) {
      console.log(this.tecnicos[i].id + ' ' + this.tecnicos[i].username);
    }
    this.toastr.success("Tecnico", "Creado exitosamente!", { "progressBar": true, timeOut: 4000 });

  }
  ngOnInit() {
    this.TecnicoService
      .getTecnicos()
      .subscribe(t => (this.tecnicos = t));
  }

}
