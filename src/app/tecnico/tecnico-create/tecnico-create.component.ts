import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { TecnicoService } from "../tecnico.service";
import {Tecnico} from "../tecnico";

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

tecnicoForm: FormGroup;

tecnicos: Tecnico[];

  constructor(private formBuilder: FormBuilder,
      private tecnicoService: TecnicoService) { 

        this.tecnicoForm = this.formBuilder.group(
      {
        //nombro los campos de recepcion de info

        nombre:["", [Validators.required, Validators.minLength(2)]],
        
        correo:["", [Validators.required, Validators.email]],

        username:["", [Validators.required]],

        contrasena:["",[Validators.required]]


      }
    )
      }

      createTecnico(newTecnico: Tecnico) 
      {

    console.warn("Your order has been submitted", newTecnico);
  this.tecnicoService.createTecnico(newTecnico).subscribe(tecnico=> {
      this.tecnicos.push(tecnico);
    });

   this.tecnicoForm.reset();
   }



  ngOnInit() {

       this.tecnicoService
      .getTecnicos()
      .subscribe(tecnico => (this.tecnicos = tecnicos));
  }

}