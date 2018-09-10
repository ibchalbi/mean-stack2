import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from '../../comment.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create-component.css']
})
export class CommentCreateComponent {

  constructor(public commentService: CommentService) {}


}
