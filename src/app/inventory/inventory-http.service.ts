import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { OrgsModel } from './orgs.model';
import { ProjectModel } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryHttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) { }

  getInventory() {         
    return this._http.get('http://localhost:8080/pulumi-orgs/')
  }

  createOrg(org: OrgsModel) {
    return this._http.post('http://localhost:8080/pulumi-orgs/', org)
  }

  createPrjInOrg(prj: ProjectModel, org: OrgsModel) {

    org.projects.push(prj)
    return this._http.post('http://localhost:8080/pulumi-orgs/', org)

  }


}
