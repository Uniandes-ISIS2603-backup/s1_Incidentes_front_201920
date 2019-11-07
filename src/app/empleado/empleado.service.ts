import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Empleado } from './empleado';
import { EmpleadoDetail } from './empleado-detail';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

const API_URL = "../../assets/"
const empleados = 'empleados.json';

@Injectable()
export class EmpleadoService {
  private empleadoUrl = "api/empleados"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) { }

  /**
   * para cuando se conecte con el back
   * 
      getEmpleadoDetail(empleadoId): Observable<EmpleadoDetail> {
        return this.http.get<EmpleadoDetail>(API_URL + empleados + '/' + empleadoId);
      }
  */
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.empleadoUrl);
    //return this.http.get<Empleado[]>(API_URL + empleados);
  }

  getEmpleadoDetail(empleadoId): Observable<EmpleadoDetail> {
    const url = `${this.empleadoUrl}/${empleadoId}`;
    return this.http.get<EmpleadoDetail>(url);
    //return this.http.get<EmpleadoDetail>(API_URL + "empleados-detail.json");
  }

}