import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  comments = [
      {text: 'first comment!', author: 'NaN'},
      {text: 'nice work!', author: 'MaybeaN'},
      {text: 'I would also like to congratulate you!', author: 'DefinitelyaN'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
