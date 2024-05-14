import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../core/blogpost.model';
import { BlogService } from '../../services/blog.service';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [BlogComponent, NavComponent, HttpClientModule, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.fetchBlogPosts();
  }

  fetchBlogPosts() {
    this.blogService.fetchBlogPosts().subscribe((posts) => {
      this.blogPosts = posts;
    });
  }

  deletePost(post: BlogPost) {
    this.blogService.deletePost(post.id).subscribe(() => {
      this.blogPosts = this.blogPosts.filter((p) => p.id !== post.id);
    });
  }
}
