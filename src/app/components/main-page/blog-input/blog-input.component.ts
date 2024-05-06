import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BlogPost } from '../../../core/blogpost.model';

@Component({
  selector: 'app-blog-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './blog-input.component.html',
  styleUrl: './blog-input.component.css',
})
export class BlogInputComponent {
  @Output() handleAddPost = new EventEmitter<BlogPost>();
  @Input() blogPosts: BlogPost[] = [];
  formBuilder: FormBuilder;
  blogForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.blogForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      content: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.blogForm.valid) {
      const newPost: BlogPost = {
        id: Math.floor(Math.random() * 10000),
        title: this.blogForm.value.title ?? '',
        content: this.blogForm.value.content ?? '',
        email: this.blogForm.value.email ?? '',
      };
      this.handleAddPost.emit(newPost);
    }
  }
}
