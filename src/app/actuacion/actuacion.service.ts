import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Actuacion } from './actuacion';
import { Observable, of } from "rxjs";

import { catchError, map, tap } from "rxjs/operators";

const API_URL = "../../assets/";

const actuaciones = "actuaciones.json";

@Injectable()
export class ActuacionService {
  constructor(private http: HttpClient) {}

  getActuaciones(): Observable<Actuacion[]> {
    return this.http.get<Actuacion[]>(API_URL + actuaciones);
  }

}
