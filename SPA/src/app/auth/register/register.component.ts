import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmedPass } from '../confirmed.validator';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  submitted = false;
  email?:any;
  password?:any;

  constructor(private formBuilder: FormBuilder, private http:HttpClient,private router:Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      password:['',[Validators.required,Validators.minLength(4),Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      confirm_password:['',[Validators.required]]
    },{

    validator: confirmedPass('password','confirm_password')
    }) ;
  }

  get f():any{
    return this.registerForm.controls;
  }

  register(){

    this.authService.register(this.email,this.password).subscribe(
      data=>{
      this.authService.storeToken(data.token)
      }
    )


  }

}
