import { Component, OnInit, inject } from '@angular/core';
import { BlogPost } from '../../core/blogpost.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [RouterLink, CommonModule, NavComponent],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent implements OnInit {
  post: BlogPost | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params['id'];
    this.blogService.getPostById(id).subscribe((post) => {
      this.post = post;
    });
  }
}
