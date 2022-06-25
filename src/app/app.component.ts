import { Component } from '@angular/core';
import { faCubes, faRocket, faRobot, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { GoogleApiService, UserInfo } from './google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userInfo?: UserInfo

  constructor(private readonly googleApi: GoogleApiService) {
    googleApi.userProfileSubject.subscribe( info => {
      this.userInfo = info
      this.googleApi.userInfo = info;
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }
  
}
