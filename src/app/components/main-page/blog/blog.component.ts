import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogPost } from '../../../core/blogpost.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  @Input() blogPosts: BlogPost[] = [];
  @Output() deletePost = new EventEmitter<BlogPost>();

  onDeletePost(post: BlogPost) {
    this.deletePost.emit(post);
  }
}
