import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../core/blogpost.model';
import { BlogService } from '../../services/blog.service';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { BlogInputComponent } from './blog-input/blog-input.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    BlogComponent,
    NavComponent,
    HttpClientModule,
    CommonModule,
    FooterComponent,
    BlogInputComponent,
  ],
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
    this.blogService.fetchBlogPosts().subscribe({
      next: (posts: BlogPost[]) => {
        this.blogPosts = posts;
      },
      error: (error: any) => {
        alert('Något gick fel! Försök igen!');
        console.log(error);
      },
    });
  }

  deletePost(post: BlogPost) {
    this.blogService.deletePost(post.id).subscribe({
      next: () => {
        this.blogPosts = this.blogPosts.filter((p) => p.id !== post.id);
      },
      error: (error: any) => {
        alert('Något gick fel! Försök igen!');
        console.log(error);
      },
    });
  }

  onAddPost(newPost: BlogPost) {
    this.blogPosts.push(newPost);
  }
}
