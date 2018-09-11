import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  getComments() {
    return this.http.get(`${this.uri}/comments`);
  }
  getCommentById (id) {
    return this.http.get(`${this.uri}/comments/${id}`);
  }
  addComment (title, responsible, content) {
    const comment = {
      title: title,
      responsible: responsible,
      content: content
    };
    return this.http.post(`${this.uri}/comments/add`, comment);
  }

  updateComment (id, title, responsible, description, content) {
    const comment = {
      title: title,
      responsible: responsible,
      description: description,
      content: content
    };
    return this.http.post(`${this.uri}/comments/update/${id}`, comment);
  }

  deleteComment (id) {
    return this.http.get(`${this.uri}/comments/delete/${id}`);
  }

}
