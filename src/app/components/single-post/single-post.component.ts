import { Component, OnInit, inject } from '@angular/core';
import { BlogPost } from '../../core/blogpost.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { v4 as uuidv4 } from 'uuid';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BlogComment } from '../../core/blogcomment.model';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    NavComponent,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent
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
    this.commentForm = this.formBuilder.group({
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

  comments: BlogComment[] = [];

  submitComment() {
    const newComment: BlogComment = {
      id: uuidv4(),
      content: this.commentForm.value.comment,
      name: this.commentForm.value.name,
      date: new Date().toLocaleString('sv-SE'),
    };
    this.comments.push(newComment);
    this.commentForm.reset();
  }
}
