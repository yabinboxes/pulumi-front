import { Component, OnInit } from '@angular/core';

import { GoogleApiService, UserInfo } from '../google-api.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  public userInfo: UserInfo

  typesOfShoes: string[] = ['Profile', 'Set project'];

  constructor(private readonly googleApi: GoogleApiService) { 
    this.userInfo = this.googleApi.userInfo
  }

  ngOnInit(): void {
  }

}
