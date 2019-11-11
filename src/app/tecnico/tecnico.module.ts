import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TecnicoCreateComponent } from './tecnico-create/tecnico.create.component';
import { TecnicoService } from './tecnico.service';
import {TecnicoDetailComponent} from './tecnico-detail/tecnico.detail.component';
import {TecnicoListComponent} from './tecnico-list/tecnico.list.component';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  declarations: [TecnicoCreateComponent, TecnicoDetailComponent, TecnicoListComponent],
  providers: [TecnicoService]
})
export class TecnicoModule { }