import { Component, OnInit } from '@angular/core';
import { Forgot } from '../../models/forgot.model';
import { FormControl, Validators } from '@angular/forms';
import { AppServiceService } from '../../app-service.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  reponse: any;
  userObj: Forgot = new Forgot();

  constructor(@Inject(AppServiceService) private svc: AppServiceService) { };
  public email = new FormControl('', [Validators.required]);

  getEmailInvalidMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit() {
  }

  onForgot() {
    this.userObj = {
      email: this.email.value,
      service: "basic"
    }
    this.svc.forgot(this.userObj)
      .subscribe((response) => {
        response = response;
        console.log(response);
      })
  }

}
