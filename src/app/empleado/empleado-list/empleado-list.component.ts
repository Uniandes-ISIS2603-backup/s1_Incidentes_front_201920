import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

/**
 * The component for the list of empleados
 */
@Component({
    selector: 'list-empleado',
    templateUrl: './empleado-list.component.html', 
})
export class EmpleadoListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param empleadoService 
     */
    constructor(private empleadoService: EmpleadoService) { }
    
    /**
     * The list of empleados
     */
    empleados: Empleado[];

    /**
     * Asks the service to update the list of empleados
     */
    getEmpleados(): void {
        this.empleadoService.getEmpleados().subscribe(empleados => this.empleados = empleados);
    }

    /**
     * This will initialize the component by retrieving the list of empleados from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getEmpleados();
    }
}