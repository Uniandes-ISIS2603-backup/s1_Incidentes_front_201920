import { Injectable } from "@angular/core"; 
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Incidente } from "./incidente";
import { IncidenteDetail } from "./incidente-detail";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

const API_URL = "../../assets/";

const incidentes = "incidentes.json";
@Injectable({ providedIn: "root" })
export class IncidenteService {
  private incidentesUrl = "api/incidentes"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getIncidentes(): Observable<Incidente[]> { 
    return this.http.get<Incidente[]>(this.incidentesUrl);
  }

  getIncidentesDetail(incidenteId): Observable<IncidenteDetail> {
    const url = `${this.incidentesUrl}/${incidenteId}`;
    return this.http.get<IncidenteDetail>(url);
  } 
}