import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitReadyHttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) { }

  getUnits() {
    return this._http.get('http://localhost:5000/deploy-dev-unit')
  }

  getDeploymentUnit() {
    return this._http.get('http://localhost:5000/get/deployment-unit')
  }

  deployDevUnit(data) {
    return this._http.post(
      'http://localhost:5000/deploy-dev-unit',
      JSON.stringify(data)/*,
      this.httpOptions*/
    )
  }
}
