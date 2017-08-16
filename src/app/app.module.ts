import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewCommentsComponent } from './new-comments/new-comments.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    NewCommentsComponent,
    ListCommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
