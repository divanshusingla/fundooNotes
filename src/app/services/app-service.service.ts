import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AppServiceService {

  constructor(@Inject(HttpClient)private http: HttpClient) {
    
   }

   post(userObj,url){
    return this.http.post(environment.base+url, userObj);
  }

reset(userObj){
  return this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/resetpassword', userObj);
}
}
