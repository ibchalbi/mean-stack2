import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { CommentCreateComponent } from './comments/comment-create/comment-create.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';
import { CommentListComponent } from './comments/';

import { RouterModule, Routes } from '@angular/router';

import { CommentService } from './comment.service';

const routes: Routes = [
  {path: 'create', component: CommentCreateComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CommentCreateComponent,
    HeaderComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
