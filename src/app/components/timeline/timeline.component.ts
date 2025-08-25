import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../core/services/posts.service';
import { Iposts } from '../../core/interfaces/iposts';
import { DatePipe } from '@angular/common';
import { CommentsComponent } from "../../shared/ui/comments/comments.component";
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-timeline',
  imports: [DatePipe, CommentsComponent , FormsModule  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit  {
  private postsService=inject(PostsService)
  postList:Iposts[]=[]
  ngOnInit(): void {
    this.postsService.GetAllPosts().subscribe( {
      next:(res)=>{
        console.log(res);
        this.postList=res.posts


      },
      error:(err)=>{
        console.log(err);


      },
    } )
  }
  content:string='' //body

  savedFile!:File //img select
  changeImage(e:Event):void{
    const input=e.target as HTMLInputElement;
    if(input.files && input.files.length>0){
      this.savedFile=input.files[0]
      console.log(this.savedFile);

    }



  }
  createPost():void{
    const formData = new FormData()
    formData.append('body' , this.content );
    formData.append('image' , this.savedFile )
    this.postsService.CreatePost(formData).subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);


      }
    })
  }


}
