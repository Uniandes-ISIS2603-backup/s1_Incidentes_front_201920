import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TecnicoService } from './tecnico.service';
import { TecnicoListComponent } from './tecnico-list/tecnico-list.component';
import { TecnicoDetailListComponent } from './tecnico-detail-list/tecnico-detail-list.component';
import { TecnicoIncidentesComponent } from './tecnico-incidentes/tecnico-incidentes.component';
import { TecnicoCreateComponent } from './tecnico-create/tecnico-create.component';


@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule,
  ],
  declarations: [TecnicoListComponent, TecnicoDetailListComponent, TecnicoIncidentesComponent, TecnicoCreateComponent],
  exports : [TecnicoListComponent, TecnicoDetailListComponent],
  providers: [TecnicoService]
})
export class TecnicoModule { }