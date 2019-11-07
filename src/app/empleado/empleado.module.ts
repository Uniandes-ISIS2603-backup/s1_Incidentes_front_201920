import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadoService } from './empleado.service';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [EmpleadoListComponent, EmpleadoDetailComponent],
  exports: [EmpleadoListComponent],
  providers: [EmpleadoService]
})
export class EmpleadoModule { }