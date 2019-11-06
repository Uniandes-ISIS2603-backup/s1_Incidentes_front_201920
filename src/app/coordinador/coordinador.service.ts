import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Coordinador } from "./coordinador";
import { CoordinadorDetail } from "./coordinador-detail";
import { Observable } from "rxjs";

const API_URL = "../../assets/";

const coordinadores = "coordinadores.json";

@Injectable()
export class CoordinadorService {
  constructor(private http: HttpClient) {}

  getCoordinadores(): Observable<Coordinador[]> {
    return this.http.get<Coordinador[]>(API_URL + coordinadores);
  }

  getDetail(coordinadorId): Observable<CoordinadorDetail> {
    return this.http.get<CoordinadorDetail>(API_URL + "coordinador" + coordinadorId + ".json");
  }
}
