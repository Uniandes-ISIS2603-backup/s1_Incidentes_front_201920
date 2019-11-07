import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActuacionListComponent } from './actuacion-list/actuacion-list.component';
import { ActuacionCreateComponent } from './actuacion-create/actuacion-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActuacionListComponent, ActuacionCreateComponent],
  
  exports: [ActuacionListComponent]
})
export class ActuacionModule { }
