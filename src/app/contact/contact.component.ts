import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './contact.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  btnText: String='submit';
successText:String;
userName:String;
user: User = new User();

constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  storeUserData(): void {
      this.userService.addUser(this.user)
          .subscribe( data => {
            this.successText='Hello, '+ this.user.name+', thank you for your interest. I will contact you shortly.';
          });


    };

}
