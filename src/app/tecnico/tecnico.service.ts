import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tecnico } from "./tecnico";
import { TecnicoDetail } from "./tecnico-detail";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Incidente } from "../incidente/incidente";

const API_URL = environment.apiURL;

const tecnicos = "/tecnico";
@Injectable({ providedIn: "root" })
export class TecnicoService { 

  constructor(private http: HttpClient) { }

  getTecnicos(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(API_URL + tecnicos);
  }

  getTecnicoDetail(tecnicoId): Observable<TecnicoDetail> {
    return this.http.get<TecnicoDetail>(API_URL + "/tecnico/" + tecnicoId ); 
  }
   /** POST: add a new client to the server */
   createTecnico(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(API_URL+ "/tecnico", tecnico).pipe(
      tap((tecnico: Tecnico) => console.log(`added tecnico w/ id=${tecnico.id}`)));
  }

   /** PUT: modifie a tecnicor 
   updateTecnico(tecnicoId, tecnico: Tecnico): Observable<Tecnico> {
    return this.http.put<Tecnico>(API_URL + "/tecnicos/" + tecnicoId, tecnico).pipe(
      tap((tecnico: Tecnico) => console.log(`added tecnico w/ ${tecnico.id}`)));
}*/
cerrarIncidente(incidente: Incidente): Observable<Incidente> {
  incidente.solucionado='true';
  return this.http.put<Incidente>(API_URL + "/incidentes/" + incidente.id, incidente);
}
}