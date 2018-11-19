import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider
} from "angular-6-social-login";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {GalleryComponent} from './gallery/gallery.component';
import {LoginComponent} from './login/login.component';
import {UserService} from './contact/contact.service';
import { RegisteredusersComponent } from './registeredusers/registeredusers.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("251677061548-uqpq5lbvoqqf6nc6nlr5jmcnoth8ldcg.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
  return config;
}


@NgModule({
declarations:[
  AppComponent,
  HomeComponent,
  AboutComponent,
  ContactComponent,
  GalleryComponent,
  LoginComponent,
  RegisteredusersComponent
],
imports:[
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpModule,
  HttpClientModule,
  SocialLoginModule
],
providers:[
UserService,
  {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
],
bootstrap:[AppComponent]

})

export class AppModule{}
