import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnitReadyHttpService } from './unit-ready-http.service';
import { UnitReady } from './unit-ready.model';

@Component({
  selector: 'app-prod-unit',
  templateUrl: './prod-unit.component.html',
  styleUrls: ['./prod-unit.component.scss']
})
export class ProdUnitComponent implements OnInit {

  panelOpenState = false;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  codeLocation: 'github' | 'local' = 'github';
  pipelineOptions: FormGroup;

  data = {
    'location': 'http://gitlab',
    'type': 'gitlab'
  };

  public deployedList: UnitReady[] = [];
  public deployedHistoryList: UnitReady[] = [];

  constructor(private _unitReadyHttpService: UnitReadyHttpService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this._unitReadyHttpService.getDeploymentUnit().subscribe((response) => {
      let temp: any = response;
      this.deployedList = temp.list.filter((value) => value.readyForDeploy === true);
      this.deployedHistoryList = temp.list.filter((value) => value.readyForDeploy === false);
    }, (error) => {
      console.log('error is ', error)
    });
  }

}
