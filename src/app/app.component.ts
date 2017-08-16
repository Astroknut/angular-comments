import { Component } from '@angular/core';
import { NewCommentsComponent } from './new-comments/new-comments.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	

  //Commented out functional code to build separate components
  // newCommentPost = function(){
  // 	this.comments.push({text: this.comment, author: this.author});
  // };

  // removeComment = function(index){
  // 	this.comments.splice(index, 1);
  // };

  // editComment = function(index){
  // 	this.comments[index].text = this.comment;
  // 	this.comments[index].author = this.author;
  // };
  	
  
}
