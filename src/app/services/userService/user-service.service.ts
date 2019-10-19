import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{AppServiceService}  from '../httpService/app-service.service'
import { HttpHeaders } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
response : any;

  constructor(@Inject(HttpClient)private http: HttpClient,@Inject(AppServiceService)private svc: AppServiceService) { }

  PostwithoutToken(userObj){
    return this.svc.post(userObj,"dfgfgdf","dfdsf");
  }


  login(data)
  {
   let url ='user/login';
   let auth = false;
    return this.svc.post(data,url,auth);
  }

  register(data)
  {
    let url = 'user/userSignUp';
    let auth = false;
    return this.svc.post(data,url,auth);
  }

  forgotPassword(data)
  {
    let url = 'user/reset';
    let auth = false;
    return this.svc.post(data,url,auth);
  }

  resetPassword(data)
  {
    let url = 'user/reset-password';
    let auth = true;
    return this.svc.post(data,url,auth);
  }

//   postwithToken(userObj)
// {
//   let httpOptions={
//     headers:new HttpHeaders({
//       'Content-type':'application/x-www-form-urlencoded',
//       'Authorization':localStorage.getItem('token')
//     })
//   }
//   return this.svc.postWithTokens(userObj,httpOptions);
// }

profileimageuserservice(Obj){
  let url= '/user/uploadProfileImage';
  return this.svc.postImage(Obj,url);
}


}
