import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  constructor(private httpClient:HttpClient) { }

  CreateComment(data:any):Observable<any>{
    return this.httpClient.post('https://linked-posts.routemisr.com/comments', data)
  }
  GetPostcomments( postId:any):Observable<any>{
    return this.httpClient.get(`https://linked-posts.routemisr.com/posts/${postId}/comments`)
  }
  UpdateComment( commentId:any, data:any):Observable<any>{
    return this.httpClient.put(`https://linked-posts.routemisr.com/comments/${commentId}` , data)
  }
  DeleteComment( commentId:any):Observable<any>{
    return this.httpClient.delete(`https://linked-posts.routemisr.com/comments/${commentId}` )
  }
}
