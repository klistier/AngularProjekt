import { Component } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-blog-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './blog-input.component.html',
  styleUrl: './blog-input.component.css',
})
export class BlogInputComponent {
  formBuilder: FormBuilder;
  blogForm;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.blogForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      content: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    console.log(this.blogForm.value);
  }
}
