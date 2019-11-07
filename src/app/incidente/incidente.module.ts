import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidenteListComponent } from './incidente-list/incidente-list.component';
import { IncidenteService } from './incidente.service';
import { IncidenteDetailListComponent } from './incidente-detail-list/incidente-detail-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
@NgModule({ 
  imports: [

  
    CommonModule,AppRoutingModule
  ],
  declarations: [IncidenteListComponent, IncidenteDetailListComponent,
  ],
  exports : [IncidenteListComponent, IncidenteDetailListComponent],
  providers: [IncidenteService]
})
export class IncidenteModule { }