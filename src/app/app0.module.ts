import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {GalleryComponent} from './gallery/gallery.component';

@NgModule({
declarations:[
],
imports:[
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  BrowserAnimationsModule
],
providers:[

],
bootstrap:[AppComponent]

})

export class AppModule{}
