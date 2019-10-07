import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../services/httpService/app-service.service';
import { Reset } from '../../models/reset.model';
import { FormControl, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  reponse: any;
  userObj: Reset = new Reset();

  constructor(@Inject(AppServiceService) private svc: AppServiceService) { }

  public password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  public confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.password.value)]);


  getPasswordInvalidMessage() {
    if (this.password.hasError("required")) {
      return ("Password is required");
    }
    if (this.password.hasError("minlength")) {
      return "Password must be 8 characters"
    }
  }

  ConfirmPasswordInvalidMessage() {
    if (this.confirmPassword.hasError("required")) {
      return "Password is required"
    }
    if (this.confirmPassword.hasError("minlength")) {
      return "Password must be 8 characters"
    }
    if (this.confirmPassword.hasError("pattern")) {
      return "Password did not match"
    }
  }

  ngOnInit() {
  }

  onReset() {
    this.userObj = {
      password: this.password.value,
      confirmPassword : this.confirmPassword.value,
      service: "basic"
    }
    this.svc.reset(this.userObj)
      .subscribe((response) => {
        response = response;
        console.log(response);
      })
  }


}
