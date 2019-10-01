import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class AppServiceService {

  constructor(@Inject(HttpClient)private http: HttpClient) {
    
   }
 
   registration(userObj){
   return this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', userObj);
 }

 login(userObj){
  return this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/login', userObj);
}


forgot(userObj){
  return this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/reset', userObj);
}

reset(userObj){
  return this.http.post(' http://fundoonotes.incubation.bridgelabz.com/api/user/resetpassword', userObj);
}
}
