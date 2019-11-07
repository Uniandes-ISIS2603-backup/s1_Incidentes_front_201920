import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Empleado } from './empleado';
import { EmpleadoDetail } from './empleado-detail';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

const API_URL = "http://localhost:8080/s1_incidentes-api/api/empleado"

@Injectable()
export class EmpleadoService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getEmpleados() : Observable<Empleado[]> {
        return this.http.get<Empleado[]>(API_URL);
    }

    getEmpleadoDetail(empleadoId): Observable<EmpleadoDetail> {
      return this.http.get<EmpleadoDetail>(API_URL + '/' + empleadoId);
    }
    
    /** cuando se conecta con un json
    getEmpleadoDetail(empleadoId): Observable<EmpleadoDetail[]> {
      return this.http.get<EmpleadoDetail[]>(API_URL + "empleados-detail.json");
    }*/
}