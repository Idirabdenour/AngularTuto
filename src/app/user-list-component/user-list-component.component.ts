import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';
import { Subscription } from 'rxjs';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.scss']
})
export class UserListComponentComponent implements OnInit {

  
  users: User[];
  userSbscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSbscription = this.userService.userSubject.subscribe(
       (users: User[]) => {
          this.users = users;
        }
      );
      this.userService.emitUsers();
  }

  OnDistroy(){
    this.userSbscription.unsubscribe();
  }
}
