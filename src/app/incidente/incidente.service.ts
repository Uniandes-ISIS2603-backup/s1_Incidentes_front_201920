import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Incidente } from "./incidente";
import { IncidenteDetail } from "./incidente-detail";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Empleado } from "../empleado/empleado";

import { pipe } from 'rxjs'; 

import { mergeMap, switchMap, retry, 
  map, catchError, filter, scan } from 'rxjs/operators';

const API_URL = environment.apiURL;

const incidentes = "/incidentes";
@Injectable({ providedIn: "root" })
export class IncidenteService { 
  emp: number;
  constructor(private http: HttpClient) { }
  setEmp(num:number){
    this.emp=num;
  }
  getEmp(){
    return this.emp;
  }
  getIncidentes(): Observable<Incidente[]> {
    return this.http.get<Incidente[]>(API_URL + incidentes);
  }

  getIncidentesDetail(incidenteId): Observable<IncidenteDetail> {
    return this.http.get<IncidenteDetail>(API_URL + "/incidentes/" + incidenteId ); 
  }
   /** POST: add a new client to the server */
   createIncidente(incidente: Incidente): Observable<Incidente> {
    return this.http.post<Incidente>(API_URL+ "/incidentes", incidente).pipe(filter(n=> n.id!=null));
  }
  
  asignarIncidenteaEmpleado(idIncidente:number, idEmpleado:number):Observable<Empleado>{
    return this.http.post<Empleado>(API_URL+ "/empleado/" + idEmpleado + "/incidentes/"+ idIncidente, null)
  }

  asignarIncidenteaCoordinador(idIncidente:number, idCoordinador:number):Observable<Empleado>{
    return this.http.post<Empleado>(API_URL+ "/coordinador/" + idCoordinador + "/incidentes/"+ idIncidente, null)
  }


}