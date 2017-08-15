import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [
      {text: 'first comment!', author: 'NaN'},
      {text: 'nice work!', author: 'MaybeaN'},
      {text: 'I would also like to congratulate you!', author: 'DefinitelyaN'}
  ];

  newCommentPost = function(){
  	this.comments.push({text: this.comment, author: this.author});
  };

  removeComment = function(index){
  	this.comments.splice(index, 1);
  };

  editComment = function(index){
  	this.comments[index].text = this.comment;
  	this.comments[index].author = this.author;
  };
  	
  
}
