import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
