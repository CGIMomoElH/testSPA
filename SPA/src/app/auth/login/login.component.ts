import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password?:any;
  email?:any;
  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('')
  });
  invalidEm:boolean = true;
  message!:string;
 

  isValid!:boolean;

  constructor( private router: Router, private formBuilder: FormBuilder, private http: HttpClient,private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    this.authService.login(this.email,this.password).subscribe(
      res=>{
      const user = res.find ((a:any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        this.loginForm.reset();
        this.router.navigate(['users'])
      }
    })
    

  }

}
