import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user?: any;
  constructor(private activatedRoute:ActivatedRoute, private userService: UserService, private router: Router) {  }

  ngOnInit(): void {
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    if(x){
      this.userService.getUser(x).subscribe(res =>{
        this.user = res.data;
      })
  }
}

  goToUsers(){
    this.router.navigate(['users'])
  }
}
