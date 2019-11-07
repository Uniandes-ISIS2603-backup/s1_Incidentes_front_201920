import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';
import { EmpleadoDetail } from './empleado-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/"
const empleados = 'empleados.json';

@Injectable()
export class EmpleadoService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getEmpleados() : Observable<Empleado[]> {
        return this.http.get<Empleado[]>(API_URL + empleados);
    }
/**
 * para cuando se conecte con el back
 * 
    getEmpleadoDetail(empleadoId): Observable<EmpleadoDetail> {
      return this.http.get<EmpleadoDetail>(API_URL + empleados + '/' + empleadoId);
    }
*/
    getEmpleadoDetail(empleadoId): Observable<EmpleadoDetail> {
      return this.http.get<EmpleadoDetail>(API_URL + "empleados-detail.json");
    }
}