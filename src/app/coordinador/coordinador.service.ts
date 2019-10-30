import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Coordinador } from "./coordinador";
import { Observable } from "rxjs";

const API_URL = "../../assets/";

const coordinadores = "coordinadores.json";

const coordinadoresDetail = "coordinadores-detail.json";

@Injectable()
export class CoordinadorService {
  constructor(private http: HttpClient) {}

  getCoordinadores(): Observable<Coordinador[]> {
    return this.http.get<Coordinador[]>(API_URL + coordinadores);
  }

  getCoordinadoresDetail(): Observable<Coordinador[]> {
    return this.http.get<Coordinador[]>(API_URL + coordinadoresDetail);
  }
}
