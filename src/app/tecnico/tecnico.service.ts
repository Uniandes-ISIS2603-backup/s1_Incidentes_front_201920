import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tecnico } from './tecnico';
import { Observable } from 'rxjs';
import { TecnicoDetail } from './tecnico-detail';
import { catchError, map, tap } from "rxjs/operators";


const API_URL = "http://localhost:8080/s2_enforma-api/api/";

const tecnicos = 'tecnicos';

@Injectable()
export class TecnicoService {

  constructor(private http: HttpTecnico) { }    
  
    httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

    getTecnicos() : Observable<Tecnico[]> {
        return this.http.get<Tecnico[]>(API_URL + tecnicos)};


     getTecnicoDetail(tecnicoId): Observable<TecnicoDetail> {
     return this.http.get<TecnicoDetail>(API_URL+tecnicos+"/"+tecnicoId)
    }

    createTecnico(tecnico: Tecnico): Observable<Tecnico>
     {
    return this.http.post<Tecnico>("api/tecnicos", tecnico, this.httpOptions).pipe(tap((tecnico: Tecnico) => console.log(`added tecnico w/ ${tecnico.nombre} id=${tecnico.id}`)));
  }

}