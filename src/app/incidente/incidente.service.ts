import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Incidente } from "./incidente";
import { IncidenteDetail } from "./incidente-detail";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

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
    return this.http.post<Incidente>(API_URL+ "/incidentes", incidente).pipe(
      tap((incidente: Incidente) => console.log(`added incidente w/ ${incidente.descripcion} id=${incidente.observaciones}`)));
  }
}