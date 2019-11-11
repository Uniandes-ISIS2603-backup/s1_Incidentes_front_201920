import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActuacionListComponent } from './actuacion-list/actuacion-list.component';
import { ActuacionCreateComponent } from './actuacion-create/actuacion-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ActuacionListComponent, ActuacionCreateComponent],
  
  exports: [ActuacionListComponent]
})
export class ActuacionModule { }
