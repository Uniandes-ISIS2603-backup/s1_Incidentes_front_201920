import { Injectable } from "@angular/core"; 
import { HttpClient } from "@angular/common/http";
import { Incidente } from "./incidente";
import { IncidenteDetail } from "./incidente-detail";
import { Observable } from "rxjs";

const API_URL = "../../assets/";

const incidentes = "incidentes.json";

@Injectable()
export class IncidenteService {
  constructor(private http: HttpClient) {}

  getIncidentes(): Observable<Incidente[]> { 
    return this.http.get<Incidente[]>(API_URL + incidentes);
  }

  getIncidentesDetail(incidenteId): Observable<IncidenteDetail> {
    return this.http.get<IncidenteDetail>(API_URL + "incidente" + incidenteId + ".json");
  } 
}