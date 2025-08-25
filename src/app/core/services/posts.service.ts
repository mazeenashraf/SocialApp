
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private httpClient:HttpClient) { }
  CreatePost(data:object):Observable<any>{
    return this.httpClient.post('https://linked-posts.routemisr.com/posts' , data)
  }
  GetAllPosts():Observable<any>{
    return this.httpClient.get('https://linked-posts.routemisr.com/posts' )
  }
  GetMyPosts():Observable<any>{
    return this.httpClient.get('https://linked-posts.routemisr.com/users/664bcf3e33da217c4af21f00/posts' )
  }
  updatepost(postId:string , data:object):Observable<any>{
    return this.httpClient.put(`https://linked-posts.routemisr.com/posts/${postId}`, data )
  }
  deletepost(postId:string ):Observable<any>{
    return this.httpClient.delete(`https://linked-posts.routemisr.com/posts/${postId}` )
  }



}
