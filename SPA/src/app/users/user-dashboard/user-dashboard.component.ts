import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userList?: any[];

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      res=>{
        this.userList = res.data;
      }
    )
  }

  goToUserDetails(userId:number){
    this.router.navigate(['users',userId])
  }

}
