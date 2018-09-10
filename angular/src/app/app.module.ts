import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { PostCreateComponent } from './posts/post-create/post-create.component';

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
import { PostListComponent } from './posts/post-list/post-list.component';

import { RouterModule, Routes } from '@angular/router';

import { PostService } from './post.service';

const routes: Routes = [
  {path: 'create', component: PostCreateComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
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
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
