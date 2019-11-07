import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnicoListComponent } from './tecnico-list/tecnico-list.component';
import { TecnicoService } from './tecnico.service';
import { TecnicoDetailComponent } from './tecnico-detail/tecnico-detail.component';

import { ReactiveFormsModule } from '@angular/forms';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { TecnicoCreateComponent } from './tecnico-create/tecnico-create.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule
  ],
  declarations: [TecnicoListComponent, TecnicoDetailComponent, TecnicoCreateComponent],
  exports: [TecnicoListComponent, TecnicoCreateComponent],
  providers: [TecnicoService]
})
export class TecnicoModule { }