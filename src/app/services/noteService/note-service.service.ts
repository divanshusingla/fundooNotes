  import { Injectable, Inject } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import{AppServiceService}  from '../httpService/app-service.service'
  import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  constructor(@Inject(HttpClient) private http : HttpClient, @Inject(AppServiceService) private svc : AppServiceService ) { }


  postwithToken(userObj)
  {
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('id')
      })
    }
    return this.svc.postWithTokensapi(userObj,httpOptions);
  }

  getWithTokens(userObj)
  {
    let httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('id')
      })
    }
    return this.svc.getWithTokensapi(userObj,httpOptions);
  }


}
