import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from '../contact/contact.service';
@Component({
  selector: 'app-registeredusers',
  templateUrl: './registeredusers.component.html',
  styleUrls: ['./registeredusers.component.scss']
})
export class RegisteredusersComponent implements OnInit {

 users: User[];
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;

      });
  }
  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}
