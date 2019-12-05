import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Actuacion } from './actuacion';

import { Observable, of } from "rxjs";

import { catchError, map, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root"})
export class ActuacionService {

  private actuacionUrl = `${environment.apiURL}/incidentes/`
  private actuacionUrl2 = `/actuacion`;
  //Este recurso es dependiente de incidente
  //Para poder realizar las actividades, me fue necesario referenciar al incidente
  //Con id 0 como si este existiera

  httpOptions = {
    headers: new HttpHeaders({"Content-type":"application/json"})
  };

  constructor(private http: HttpClient) {}

  getActuaciones(idIncidente:number): Observable<Actuacion[]> {
    return this.http.get<Actuacion[]>(this.actuacionUrl + idIncidente + this.actuacionUrl2);
  }

  getActuacion(id:number):Observable<Actuacion> {
    const url = `${this.actuacionUrl}/${id}}`;
    return this.http.get<Actuacion>(url);
  }

  createActuacion(actuacion: Actuacion): Observable<Actuacion> {
    return this.http.post<Actuacion>(this.actuacionUrl + actuacion.incidente.id + this.actuacionUrl2, 
      actuacion, this.httpOptions).pipe(tap((actuacion:Actuacion) =>
      console.log(`added actuacion w/ ${actuacion.descripcion} , ${actuacion.fechaHora} id = ${actuacion.id} incidente = ${actuacion.incidente}`)));
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
