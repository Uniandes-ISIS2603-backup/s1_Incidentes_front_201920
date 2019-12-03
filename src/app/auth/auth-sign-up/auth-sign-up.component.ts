import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { User } from '../user';
import { CoordinadorService } from '../../coordinador/coordinador.service';
import { EmpleadoService } from '../../empleado/empleado.service';

@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html',
    styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {

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
    ) { }

    user: User;

    rolUsuario: string;

    /**
    * Sign the user up with the selected role
    */
    signUp(): void {
        this.rolUsuario = (<HTMLInputElement>document.getElementById("rol")).value;
        var rol:string = (<HTMLInputElement>document.getElementById("rol")).value;
        this.authService.login(rol);
        this.toastrService.success('Successfully signed up')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
    }

}
