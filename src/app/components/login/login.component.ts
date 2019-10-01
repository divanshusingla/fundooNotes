import { Component, OnInit, Inject } from '@angular/core';
import {AppServiceService} from '../../app-service.service';
import { Login } from '../../models/login.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  reponse: any;
  userObj: Login = new Login();

  constructor(@Inject(AppServiceService)private svc: AppServiceService) { }
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required]);

  getEmailInvalidMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordInvalidMessage() {
    if (this.password.hasError("required")) {
      return ("Password is required");
    }
  }

  ngOnInit() {
  }


  onLogin() {
    this.userObj = {
      email: this.email.value,
      password: this.password.value,
      service: "basic"
    }
    this.svc.login(this.userObj)
      .subscribe((response) => {
        response = response;
        console.log(response);
      })
  }

}
