import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidenteListComponent } from './incidente-list/incidente-list.component';
import { IncidenteService } from './incidente.service';
import { IncidenteDetailListComponent } from './incidente-detail-list/incidente-detail-list.component';

@NgModule({
  imports: [

  
    CommonModule
  ],
  declarations: [IncidenteListComponent, IncidenteDetailListComponent,
  ],
  exports : [IncidenteListComponent, IncidenteDetailListComponent],
  providers: [IncidenteService]
})
export class IncidenteModule { }