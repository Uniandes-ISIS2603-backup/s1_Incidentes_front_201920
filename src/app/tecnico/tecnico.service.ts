import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Tecnico } from "./tecnico";
import { TecnicoDetail } from "./tecnico-detail";
import { Observable } from "rxjs";

import { tap } from "rxjs/operators";
import { environment } from "../../environments/environment";


const API_URL = environment.apiURL;

const tecnicos = '/tecnico';

@Injectable({ providedIn: "root" })
export class TecnicoService {

  constructor(private http: HttpClient) { }

  getTecnicos(): Observable<Tecnico[]> {
    //return this.http.get<Tecnico[]>(this.tecnicoUrl);
    return this.http.get<Tecnico[]>(API_URL + tecnicos);
  }

  getDetail(tecnicoId): Observable<TecnicoDetail> {
    //const url = `${this.tecnicoUrl}/${tecnicoId}`;
    //return this.http.get<TecnicoDetail>(url);
    return this.http.get<TecnicoDetail>(API_URL + "/tecnico/" + tecnicoId );
  }

}
