import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { CommentCreateComponent } from './comments/comment-create/comment-create.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';
import { CommentListComponent } from './comments/comment-list/comment-list.component';

import { RouterModule, Routes } from '@angular/router';

import { CommentService } from './comment.service';

const routes: Routes = [
  {path: 'create', component: CommentCreateComponent},
  {path: 'list', component: CommentListComponent}
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
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
