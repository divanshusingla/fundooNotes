import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{AppServiceService}  from '../httpService/app-service.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
response : any;

  constructor(@Inject(HttpClient)private http: HttpClient,@Inject(AppServiceService)private svc: AppServiceService) { }

  PostwithoutToken(userObj){
    return this.svc.post(userObj);
  }

  postwithToken(userObj)
{
  let httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/x-www-form-urlencoded',
      'Authorization':localStorage.getItem('token')
    })
  }
  return this.svc.postWithTokens(userObj,httpOptions);
}

}
