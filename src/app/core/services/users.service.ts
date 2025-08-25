import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient ) { }
  signup(data:object):Observable<any>{
    return this.httpClient.post('https://linked-posts.routemisr.com/users/signup' , data )
  }
  signIn(data:object):Observable<any>{
    return this.httpClient.post('https://linked-posts.routemisr.com/users/signin ' , data )
  }
  changepassword(data:object):Observable<any>{
    return this.httpClient.patch('https://linked-posts.routemisr.com/users/change-password ' , data )
  }
  uploadprofilephoto(data:object):Observable<any>{
    return this.httpClient.put('https://linked-posts.routemisr.com/users/upload-photo' , data )
  }
  GetloggedUserData():Observable<any>{
    return this.httpClient.get('https://linked-posts.routemisr.com/users/profile-data' )
  }
  
}
