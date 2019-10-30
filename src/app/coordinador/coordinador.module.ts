import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinadorListComponent } from './coordinador-list/coordinador-list.component';
import { CoordinadorService } from './coordinador.service';
import { CoordinadorDetailListComponent } from './coordinador-detail-list/coordinador-detail-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoordinadorListComponent, CoordinadorDetailListComponent,
  ],
  exports : [CoordinadorListComponent, CoordinadorDetailListComponent],
  providers: [CoordinadorService]
})
export class CoordinadorModule { }