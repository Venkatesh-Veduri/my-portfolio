import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PorjectComponent } from '../porject/porject.component';
import { PorjectCreateComponent } from '../porject-create/porject-create.component';
import { PorjectListComponent } from '../porject-list/porject-list.component';
import { PorjectUpdateComponent } from '../porject-update/porject-update.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../verify-email/verify-email.component';
import { AdminGuard } from '../admin.guard';


const childRoutes: Routes=[
  {
    path:'admin',
    component:PorjectComponent,
    children:[
      { path: 'list', component:  PorjectListComponent,canActivate: [AdminGuard]},
      { path: 'create', component:  PorjectCreateComponent,canActivate: [AdminGuard]},
      { path: 'update', component:  PorjectUpdateComponent,canActivate: [AdminGuard]},
      { path: 'login',component:  LoginComponent},
      { path: 'register', component:  RegisterComponent },
      { path: 'forgot-password', component:  ForgotPasswordComponent },
      { path: 'verify-email', component:  VerifyEmailComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(childRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { 

}
