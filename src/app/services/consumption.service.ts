import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {

  constructor(private http: HttpClient) { }

  getConsumptions() {
    return this.http.get(environment.api + 'consumptions');
  }
}
