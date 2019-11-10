import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadoService } from './empleado.service';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
import { EmpleadoCreateComponent } from './empleado-create/empleado-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EmpleadoListComponent, EmpleadoDetailComponent, EmpleadoCreateComponent],
  exports: [EmpleadoListComponent, EmpleadoDetailComponent, EmpleadoCreateComponent],
  providers: [EmpleadoService]
})
export class EmpleadoModule { }