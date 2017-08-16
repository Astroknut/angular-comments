import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-comments',
  templateUrl: './new-comments.component.html',
  styleUrls: ['./new-comments.component.css']
})
export class NewCommentsComponent implements OnInit {

  comments = [];

  newCommentPost = function(){
  	this.comments.push({text: this.comment, author: this.author});
  };

  editComment = function(index){
  	this.comments[index].text = this.comment;
  	this.comments[index].author = this.author;
  };	


  constructor() { }

  ngOnInit() {
  }

}
