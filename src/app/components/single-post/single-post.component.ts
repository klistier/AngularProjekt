import { Component, OnInit, inject } from '@angular/core';
import { BlogPost } from '../../core/blogpost.model';
import { BlogComment } from '../../core/blogcomment.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { v4 as uuidv4 } from 'uuid';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    NavComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent implements OnInit {
  post: BlogPost | undefined;
  formBuilder: FormBuilder;
  commentForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    formBuilder: FormBuilder
  ) {
    this.formBuilder = formBuilder;
    this.commentForm = formBuilder.group({
      comment: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params['id'];
    this.blogService.getPostById(id).subscribe((post) => {
      this.post = post;
    });
  }

  submitComment() {
    if (this.commentForm.valid && this.post?.id) {
      const newComment: BlogComment = {
        id: uuidv4(),
        content: this.commentForm.value.comment,
        name: this.commentForm.value.name,
        date: new Date().toLocaleString('sv-SE'),
      };

      this.blogService
        .addComment(this.post, newComment)
        .subscribe((comment) => {
          if (this.post && this.post.comments) {
            this.post.comments.push(comment);
          }
        });
    }
  }
}
