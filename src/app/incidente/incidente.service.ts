import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Incidente } from "./incidente";
import { Observable } from "rxjs";

const API_URL = "../../assets/";

const incidentes = "incidentes.json";

const incidentesDetail = "incidentes-detail.json";

@Injectable()
export class IncidenteService {
  constructor(private http: HttpClient) {}

  getIncidentes(): Observable<Incidente[]> {
    return this.http.get<Incidente[]>(API_URL + incidentes);
  }

  getIncidentesDetail(): Observable<Incidente[]> {
    return this.http.get<Incidente[]>(API_URL + incidentesDetail);
  } 
}