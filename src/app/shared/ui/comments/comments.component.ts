import { Component, inject,  Input,  OnInit } from '@angular/core';
import { CommentsService } from '../../../core/services/comments.service';
import { Icomment } from '../../../core/interfaces/icomment';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-comments',
  imports: [DatePipe, ReactiveFormsModule ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  private readonly commentsService=inject(CommentsService)
  @Input() postId!:string
  commentList:Icomment[]=[]
  commentGroup!:FormGroup
  ngOnInit(): void {


   this.commentGroup =new FormGroup({
      content:new FormControl(null),
      post:new FormControl(this.postId)
    })

    this.commentsService.GetPostcomments(this.postId).subscribe({
      next:(res)=>{
        console.log( `post Id ${this.postId}`, res.comments);
        this.commentList=res.comments.reverse()

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }


  sendcomment():void{
    this.commentsService.CreateComment(this.commentGroup.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.commentList=res.comments.reverse()
        this.commentGroup.get('content')?.reset()


      },
      error:(err)=>{
        console.log(err);
      }
        })
  }

}
