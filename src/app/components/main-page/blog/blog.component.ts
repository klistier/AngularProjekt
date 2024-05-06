import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../core/blogpost.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() blogPosts: BlogPost[] = [];


}
