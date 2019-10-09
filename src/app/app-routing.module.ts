import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthGuardGuard} from './authGuard/auth-guard.guard'
import { NoteMainComponent } from './components/note-main/note-main.component';

const routes: Route[] = [
  {path : '', redirectTo : '/login' , pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'registration', component : RegisterComponent },
  {path : 'resetpassword/:token', component : ResetPasswordComponent},
  {path : 'forgot', component : ForgotPasswordComponent },
  {path : '', component : DashboardComponent, canActivate: [AuthGuardGuard],
children : [
  {path : 'note', component : NoteMainComponent}
] },
  {path : '**', component : PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
