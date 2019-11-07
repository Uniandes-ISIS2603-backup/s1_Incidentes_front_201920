import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Coordinador } from "./coordinador";
import { CoordinadorDetail } from "./coordinador-detail";
import { Observable, of } from "rxjs";

import { catchError, map, tap } from "rxjs/operators";

const API_URL = "localhost:8080/s1_incidentes-api/api/";


const coordinadores = "coordinador";

@Injectable({ providedIn: "root" })
export class CoordinadorService {
  private coordinadorUrl = "api/coordinadores"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  getCoordinadores(): Observable<Coordinador[]> {
    return this.http.get<Coordinador[]>(this.coordinadorUrl);
    //return this.http.get<Coordinador[]>(API_URL + coordinadores);
  }

  getDetail(coordinadorId): Observable<CoordinadorDetail> {
    const url = `${this.coordinadorUrl}/${coordinadorId}`;
    return this.http.get<CoordinadorDetail>(url);
    //return this.http.get<CoordinadorDetail>(API_URL + "coordinador" + coordinadorId + ".json");
  }

  /** POST: add a new client to the server */
  createCoordinador(coordinador: Coordinador): Observable<Coordinador> {
    return this.http.post<Coordinador>(this.coordinadorUrl, coordinador, this.httpOptions).pipe(
      tap((coordinador: Coordinador) => console.log(`added coordinador w/ ${coordinador.name} id=${coordinador.id}`)));
  }

  /** DELETE: delete the client from the server */
  deleteCoordinador(coordinador: Coordinador | number): Observable<Coordinador> {
    const id = typeof coordinador === "number" ? coordinador : coordinador.id;
    const url = `${this.coordinadorUrl}/${id}`;

    return this.http.delete<Coordinador>(url, this.httpOptions);
  }

  /** PUT: update the client on the server */
  updateCoordinador(coordinador: Coordinador): Observable<any> {
    return this.http.put(this.coordinadorUrl, coordinador, this.httpOptions);
  }
}
