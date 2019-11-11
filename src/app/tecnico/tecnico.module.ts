import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TecnicoCreateComponent } from './tecnico-create/tecnico.create.component';
import { TecnicoService } from './tecnico.service';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  declarations: [TecnicoCreateComponent],
  exports:[TecnicoCreateComponent],
  providers: [TecnicoService]
})
export class TecnicoModule { }