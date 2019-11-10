import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';
import { EmpleadoDetail } from './empleado-detail';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

const API_URL = environment.apiURL;
const empleados = '/empleado';

@Injectable({ providedIn: "root" })
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(API_URL + empleados);
  }

  getEmpleadoDetail(empleadoId): Observable<EmpleadoDetail> {
    return this.http.get<EmpleadoDetail>(API_URL + "/empleado/" + empleadoId );
  }

  /** POST: add a new client to the server */
  createEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(API_URL+ empleados, empleado).pipe(
      tap((empleado: Empleado) => console.log(`added empleado w/ ${empleado.nombre} id=${empleado.id}`)));
  }
}