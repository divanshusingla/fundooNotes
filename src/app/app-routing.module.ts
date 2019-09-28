import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Route[] = [
  {path : '', redirectTo : '/registration' , pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'registration', component : RegisterComponent },
  {path : '**', component : PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
