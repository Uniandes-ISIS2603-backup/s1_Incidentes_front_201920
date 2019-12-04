import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { CoordinadorService } from '../../coordinador/coordinador.service';
import { EmpleadoService } from '../../empleado/empleado.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Coordinador } from '../../coordinador/coordinador';
import { Empleado } from '../../empleado/empleado';
import { Tecnico } from '../../tecnico/tecnico';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private coordinadorService: CoordinadorService,
        private empleadoService: EmpleadoService,
        private authService: AuthService,
        private toastrService: ToastrService,
        private formBuilder: FormBuilder,

    ) {
    }

    correo: string;
    contrasenia: string;
    rol: string;
    coordinadores: Coordinador[];
    empleados: Empleado[];
    tecnicos: Tecnico[];
    roles: string[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        var existe:boolean;
        var id;
        var that = this;
        console.log(this.correo)
        if (that.rol == 'Coordinador') {
            this.coordinadores.forEach(function (value) {
                if (value.username === that.correo) {
                    id = value.id;
                    if (value.password == that.contrasenia) {
                        that.authService.setRole(that.rol);
                        that.toastrService.success('Logged in');
                        that.authService.guardarId(id);
                    } else {
                        that.toastrService.error('Contraseña incorrecta');
                    }
                }
            });
        }

        if (that.rol == 'tecnico') {
            this.empleados.forEach(function (value) {
                if (value.username === that.correo) {
                    id = value.id;
                    if (value.password == that.contrasenia) {
                        that.authService.setRole(that.rol);
                        that.toastrService.success('Logged in');
                        that.authService.guardarId(id);
                    } else {
                        that.toastrService.error('Contraseña incorrecta');
                    }
                }
            });
        }

        if (that.rol == 'empleado') {
            this.coordinadores.forEach(function (value) {
                if (value.username === that.correo) {
                    id = value.id;
                    if (value.password == that.contrasenia) {
                        that.authService.setRole(that.rol);
                        that.toastrService.success('Logged in');
                        that.authService.guardarId(id);
                    } else {
                        that.toastrService.error('Contraseña incorrecta');
                    }
                }
            });
        }
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.roles = ['Coordinador', 'Tecnico', 'Empleado'];
        this.coordinadorService.getCoordinadores().subscribe(coordinadores => this.coordinadores = coordinadores);
        this.empleadoService.getEmpleados().subscribe(e => this.empleados = e);
        this.coordinadorService.getCoordinadores().subscribe(coordinadores => this.coordinadores = coordinadores);
    }

}
