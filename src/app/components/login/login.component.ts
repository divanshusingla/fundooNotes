import { Component, OnInit, Inject } from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';
import { Login } from '../../models/login.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response: any;
  result: any;
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
    this.result=this.svc.post(this.userObj,"login")
      this.result.subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }

}
