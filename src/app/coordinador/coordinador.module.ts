import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinadorListComponent } from './coordinador-list/coordinador-list.component';
import { CoordinadorService } from './coordinador.service';
import { CoordinadorDetailListComponent } from './coordinador-detail-list/coordinador-detail-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [CoordinadorListComponent, CoordinadorDetailListComponent,
  ],
  exports : [CoordinadorListComponent, CoordinadorDetailListComponent],
  providers: [CoordinadorService]
})
export class CoordinadorModule { }