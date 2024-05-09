import { Component, inject } from '@angular/core';
import { BlogPost } from '../../core/blogpost.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent {
  post: BlogPost | undefined;

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  BlogService: BlogService = inject(BlogService);

  constructor() {
    const id: string = this.activatedRoute.snapshot.params['id'];
    this.post = this.BlogService.getPostById(id);
    console.log(this.post);
  }
}
