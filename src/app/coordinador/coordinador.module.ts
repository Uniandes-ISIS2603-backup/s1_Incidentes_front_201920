import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinadorListComponent } from './coordinador-list/coordinador-list.component';
import { CoordinadorService } from './coordinador.service';
import { CoordinadorDetailListComponent } from './coordinador-detail-list/coordinador-detail-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CoordinadorCreateComponent } from './coordinador-create/coordinador-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoordinadorTecnicosComponent } from './coordinador-tecnicos/coordinador-tecnicos.component';
import { CoordinadorIncidentesComponent } from './coordinador-incidentes/coordinador-incidentes.component';
import { CoordinadorAssignTecnicoComponent } from './coordinador-assign-tecnico/coordinador-assign-tecnico.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule,
  ],
  declarations: [CoordinadorListComponent, CoordinadorDetailListComponent, CoordinadorCreateComponent, CoordinadorTecnicosComponent, CoordinadorIncidentesComponent, CoordinadorAssignTecnicoComponent,
  ],
  exports : [CoordinadorListComponent, CoordinadorDetailListComponent, CoordinadorCreateComponent],
  providers: [CoordinadorService]
})
export class CoordinadorModule { }