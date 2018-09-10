import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Comment } from '../../comment.model';
import { CommentService } from '../../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit, OnDestroy {

  comments: Comment[] = [];
  private commentsSub: Subscription;

  constructor(public commentsService: CommentService) {}
  ngOnInit() {

  }


}
