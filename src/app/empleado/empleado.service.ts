import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from './empleado';
import { EmpleadoDetail } from './empleado-detail';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

const API_URL = environment.apiURL;
const empleados = '/empleado';

@Injectable({ providedIn: "root" })
export class EmpleadoService {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(API_URL + empleados);
  }

  getEmpleadoDetail(empleadoId): Observable<EmpleadoDetail> {
    return this.http.get<EmpleadoDetail>(API_URL + "/empleado/" + empleadoId );
  }

  /** POST: add a new empleado to the server */
  createEmpleado(empleado: Empleado): Observable<Empleado> {
    empleado.numIncidentes=0;
    return this.http.post<Empleado>(API_URL+ empleados, empleado, this.httpOptions).pipe(
      tap((empleado: Empleado) => console.log(`added empleado w/ ${empleado.nombre} id=${empleado.id}`)));
  }
}