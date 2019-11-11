import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Tecnico } from "../tecnico";
import { TecnicoService } from "../tecnico.service";

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico.create.component.html',
  styleUrls: ['./tecnico.create.component.css']
})
export class TecnicoCreateComponent 
{
  tecnicoForm: FormGroup;

 constructor
 ( 
    private tecbicoService: TecnicoService,
    private formBuilder: FormBuilder
  ) 
  {
    this.tecnicoForm = this.formBuilder.group({
      descripcion: ["", [Validators.required]],
      usuario: ["",[Validators.required]],
      contrasenia:["",[Validators.required]],
      numcasos:["",[Validators.required]],
    });
  }

  createTecnico(newTecnico: Tecnico) 
  {
    // Process checkout data here
  console.warn("Your order has been submitted", newTecnico);

   this.tecnicoForm.reset();
  }

  
  validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
  }




}
