import { Component, OnInit } from '@angular/core';
import { Comment } from '../../comment.model';
import { CommentService } from '../../comment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {

  comments: Comment[];
  displayedColumns = ['title', 'responsible', 'content', 'date', 'actions'];
  constructor(private commentService: CommentService, private router: Router) { this.fetchComments(); }

  ngOnInit() {
    this.fetchComments();
  }
  fetchComments() {
    this.commentService.getComments().subscribe((data: Comment[]) => {
        this.comments = data;
        console.dir('data requested');
        console.dir(this.comments);
    });
  }
  editComment(id) {
    this.router.navigate([`/edit/${id}`]);
  }
  deleteComment(id) {
    this.commentService.deleteComment(id).subscribe(() => {
      this.fetchComments();
    });
  }




}
