import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppServiceService {
  baseUrl= environment.base;
  // baseUrl1=environment.base1;

  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':localStorage.getItem('id')
    })
  } 

  httpOptionsGetNoteList={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':localStorage.getItem('id')
    })
  }



  constructor(@Inject(HttpClient)private http: HttpClient) { }
   
   post(userObj,url,auth){
     if(auth == false)
     {
    return this.http.post(this.baseUrl+url, userObj);
     }
     else{
       return this.http.post(this.baseUrl+url,userObj,this.httpOptions);
     }
  }

  get(url,auth){
    if(auth == false)
    {
   return this.http.get(this.baseUrl+url);
    }
    else{
      return this.http.get(this.baseUrl+url ,this.httpOptions);
    }
 }




 deleteCall(url)
 {
   return this.http.delete(this.baseUrl+url,this.httpOptions)
 }

 getNoteList(url){
    return this.http.get(this.baseUrl+url ,this.httpOptionsGetNoteList);
}
  


  postWithTokens(userObj,options)
  {
    return this.http.post(this.baseUrl+userObj.url, this.getEncodedData(userObj.data),options);
  }

//getting the notes data

getWithTokensapi(userObj,options)
{
  return this.http.get(this.baseUrl+userObj.url,options);
}



//adding note in the api 

postWithTokensapi(userObj,options)
{
  return this.http.post(this.baseUrl+userObj.url, userObj.data, options);

}



  getEncodedData(data)
  {
    const formBody=[];
    for(const property in data )
    {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
}
