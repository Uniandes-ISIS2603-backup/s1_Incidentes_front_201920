import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor (private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['']);
        const role = localStorage.getItem('role');
        console.log(role)
        if (!role) {
            this.setGuestRole();
        } else if (role === 'COORDINADOR') {
            this.setCoordinadorRole();
        } else if (role === 'EMPLEADO') {
            this.setEmpleadoRole();
        } else if (role === 'TECNICO') {
            this.setTecnicoRole();
        } else {
            this.setClientRole();
        }
    }

    setGuestRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setClientRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('CLIENT', ['leave_review']);
        localStorage.setItem('role', 'CLIENT');
    }

    setEmpleadoRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('EMPLEADO', ['']);
        localStorage.setItem('role', 'EMPLEADO');
    }

    setTecnicoRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('TECNICO', ['']);
        localStorage.setItem('role', 'TECNICO');
    }

    setCoordinadorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('COORDINADOR', ['']);
        localStorage.setItem('role', 'COORDINADOR');
    }

    setAdministratorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['']);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole (): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    setRole (role): void {
        if (role === 'Coordinador') {
            this.setCoordinadorRole();
        } else if (role === 'Tecnico') {
            this.setTecnicoRole();
        } else if (role === 'Empleado') {
            this.setEmpleadoRole();
        } else {
            this.setClientRole()
        }
        console.log('fin');
        console.log(role);
    }

    /**
     * Logs the user out
     */
    logout (): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        localStorage.removeItem('id');
        this.router.navigateByUrl('/');
    }

    guardarId(id):void{
        localStorage.setItem('id',""+id);
        this.router.navigateByUrl('/');
    }

}
