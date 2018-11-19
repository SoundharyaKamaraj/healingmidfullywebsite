import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular-6-social-login';

import { UserService } from '../contact/contact.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   constructor(private router: Router, private socialAuthService: AuthService) {}

   public socialSignIn(socialPlatform : string) {
       let socialPlatformProvider;
       if(socialPlatform == "google"){
         socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
       }

       this.socialAuthService.signIn(socialPlatformProvider).then(
         (userData) => {
           console.log(socialPlatform+" sign in data : " , userData);
           if(userData.email=="innercontour@gmail.com" &&
              userData.name=="Innercontour Mindfulness"){
                console.log(userData.email);
             this.router.navigate(['/', 'getUsers']);


           }
           // ...

         }
       );
     }
  ngOnInit() {
  }

}
