import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { IncidenteListComponent } from './incidente-list/incidente-list.component';
import { IncidenteService } from './incidente.service';
import { IncidenteDetailListComponent } from './incidente-detail-list/incidente-detail-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { IncidenteCreateComponent } from './incidente-create/incidente-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActuacionListComponent } from '../actuacion/actuacion-list/actuacion-list.component';
import { ActuacionCreateComponent } from '../actuacion/actuacion-create/actuacion-create.component';
@NgModule({ 
  imports: [

  
    CommonModule,AppRoutingModule, ReactiveFormsModule,
  ],
  declarations: [IncidenteListComponent, IncidenteDetailListComponent,IncidenteCreateComponent, ActuacionListComponent, ActuacionCreateComponent
  ],
  exports : [IncidenteListComponent, IncidenteDetailListComponent,IncidenteCreateComponent, ActuacionListComponent, ActuacionCreateComponent],
  providers: [IncidenteService]
})
export class IncidenteModule {}