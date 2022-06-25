import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '284173022311-q1jr8q5h59d708krghvurn3h13ld4oou.apps.googleusercontent.com',
  scope: 'openid profile email'
}

export interface UserInfo {
  info: {
    sub: string,
    email: string,
    name: string,
    picture: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  userInfo?: UserInfo

  userProfileSubject = new Subject<UserInfo>()

  constructor(private oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig)
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if(!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow()
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {
            //console.log(JSON.stringify(userProfile))
            this.userProfileSubject.next(userProfile as UserInfo)
          })
        }
      })
    })
    
   }

   isLoggedIn(): boolean {
     return this.oAuthService.hasValidAccessToken()
   }

   signOut() {
     this.oAuthService.logOut()
   }
}
