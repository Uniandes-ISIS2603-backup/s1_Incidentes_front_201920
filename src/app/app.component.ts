import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CoordinadorService } from './coordinador/coordinador.service';
import { IncidenteService } from './incidente/incidente.service';
/**
 * The app component. This component is the base of s1_incidentes-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: string;

    id:string;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s1_incidentes-Front";
        this.authService.start();
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService, private coordinadorService: CoordinadorService, private incidenteService: IncidenteService) { }

    logout(): void {
        this.authService.logout()
    }

    isCoordinador():boolean{
        return localStorage.getItem("role") == "COORDINADOR";
    }

    isTecnico():boolean{
        return localStorage.getItem("role") == "TECNICO";
    }

    isEmpleado():boolean{
        return localStorage.getItem("role") == "EMPLEADO";
    }

    isAdmin():boolean{
        return localStorage.getItem("role") == "ADMIN";
    }

    getId():string{
        return localStorage.getItem('id');
    }

}





