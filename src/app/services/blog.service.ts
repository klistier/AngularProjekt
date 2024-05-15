import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../core/blogpost.model';
import { BlogComment } from '../core/blogcomment.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private url = 'http://localhost:3000/posts';
  blogPosts: BlogPost[] = [];

  constructor(private http: HttpClient) {}

  fetchBlogPosts() {
    return this.http.get<BlogPost[]>(this.url);
  }

  addPost(newPost: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.url, newPost);
  }

  deletePost(id: string): Observable<BlogPost> {
    return this.http.delete<BlogPost>(`${this.url}/${id}`);
  }

  getPostById(id: string): Observable<BlogPost | undefined> {
    return this.http.get<BlogPost>(`${this.url}/${id}`);
  }

  addComment(post: BlogPost, newComment: BlogComment): Observable<BlogComment> {
    return this.http.post<BlogComment>(`${this.url}/${post.id}`, {
      comments: [...(post.comments || []), newComment],
    });
  }
}
