import { Component } from '@angular/core';
import { CommentService } from '../../comment.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create-component.css']
})
export class CommentCreateComponent {
  createForm: FormGroup;
  constructor(public commentService: CommentService, private router: Router) {

  }

  addComment(form: NgForm) {
    this.commentService.addComment(form.value.title, form.value.responsible, form.value.content).subscribe(() => {
      this.router.navigate(['list']);

    });
   }

}
