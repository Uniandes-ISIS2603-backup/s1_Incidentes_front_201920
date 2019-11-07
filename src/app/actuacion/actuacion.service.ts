import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Actuacion } from './actuacion';

import { Observable, of } from "rxjs";

import { catchError, map, tap } from "rxjs/operators";

@Injectable({ providedIn: "root"})
export class ActuacionService {

  private actuacionUrl = "api/incidentes/0/actuacion"
  //Este recurso es dependiente de incidente
  //Para poder realizar las actividades, me fue necesario referenciar al incidente
  //Con id 0 como si este existiera

  httpOptions = {
    headers: new HttpHeaders({"Content-type":"application/json"})
  };

  constructor(private http: HttpClient) {}

  getActuaciones(): Observable<Actuacion[]> {
    return this.http.get<Actuacion[]>(this.actuacionUrl);
  }

  getActuacion(id:number):Observable<Actuacion> {
    const url = `${this.actuacionUrl}/${id}}`;
    return this.http.get<Actuacion>(url);
  }

  createActuacion(actuacion: Actuacion): Observable<Actuacion> {
    return this.http.post<Actuacion>(this.actuacionUrl, actuacion, this.httpOptions).pipe(tap((actuacion:Actuacion) =>
      console.log(`added actuacion w/ ${actuacion.descripcion} id = ${actuacion.id}`)));
  }

  deleteActuacion(actuacion:Actuacion | number): Observable<Actuacion> {
    const id = typeof actuacion == "number"? actuacion:actuacion.id;
    const url = `${this.actuacionUrl}/${id}`;
    return this.http.delete<Actuacion>(url, this.httpOptions);
  }

  updateActuacion (actuacion: Actuacion):Observable<any> {
    return this.http.put(this.actuacionUrl, actuacion, this.httpOptions);
  }
}
