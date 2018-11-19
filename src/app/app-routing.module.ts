import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {GalleryComponent} from './gallery/gallery.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RegisteredusersComponent} from './registeredusers/registeredusers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  {path:'getUsers',component:RegisteredusersComponent},
  { path: '', component: HomeComponent }, // pathMatch: 'full' is optional if defined in this order
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
