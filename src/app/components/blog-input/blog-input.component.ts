import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { BlogPost } from '../../core/blogpost.model';
import { NavComponent } from '../nav/nav.component';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NavComponent],
  templateUrl: './blog-input.component.html',
  styleUrl: './blog-input.component.css',
})
export class BlogInputComponent {
  @Output() onAddPost = new EventEmitter<BlogPost>();
  @Input() blogPosts: BlogPost[] = [];
  formBuilder: FormBuilder;
  blogForm: FormGroup;

  constructor(formBuilder: FormBuilder, private blogService: BlogService) {
    this.formBuilder = formBuilder;
    this.blogForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      content: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  addPost() {
    if (this.blogForm.valid) {
      const newPost: BlogPost = {
        id: uuidv4(),
        title: this.blogForm.value.title ?? '',
        content: this.blogForm.value.content ?? '',
        email: this.blogForm.value.email ?? '',
      };
      this.blogService.addPost(newPost).subscribe((post) => {
        this.blogPosts.push(post);
      });
      this.blogForm.reset();
    }
  }
}
