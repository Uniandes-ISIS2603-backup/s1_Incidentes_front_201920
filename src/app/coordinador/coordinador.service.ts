import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Coordinador } from "./coordinador";
import { CoordinadorDetail } from "./coordinador-detail";
import { Observable } from "rxjs";

import { tap } from "rxjs/operators";
import { environment } from "../../environments/environment";


const API_URL = environment.apiURL;

const coordinadores = '/coordinador';

@Injectable({ providedIn: "root" })
export class CoordinadorService {

  constructor(private http: HttpClient) { }

  getCoordinadores(): Observable<Coordinador[]> {
    //return this.http.get<Coordinador[]>(this.coordinadorUrl);
    return this.http.get<Coordinador[]>(API_URL + coordinadores);
  }

  getDetail(coordinadorId): Observable<CoordinadorDetail> {
    //const url = `${this.coordinadorUrl}/${coordinadorId}`;
    //return this.http.get<CoordinadorDetail>(url);
    return this.http.get<CoordinadorDetail>(API_URL + "/coordinador/" + coordinadorId );
  }

  /** POST: add a new client to the server */
  createCoordinador(coordinador: Coordinador): Observable<Coordinador> {
    return this.http.post<Coordinador>(API_URL, coordinador).pipe(
      tap((coordinador: Coordinador) => console.log(`added coordinador w/ ${coordinador.nombre} id=${coordinador.id}`)));
  }

}
