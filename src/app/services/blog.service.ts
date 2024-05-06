import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../core/blogpost.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  fetchBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.url);
  }

  addPost(newPost: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.url, newPost);
  }

  deletePost(id: number): Observable<BlogPost> {
    return this.http.delete<BlogPost>(`${this.url}/${id}`);
  }
}
