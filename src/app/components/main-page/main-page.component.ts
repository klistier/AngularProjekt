import { Component } from '@angular/core';
import { BlogInputComponent } from './blog-input/blog-input.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [BlogInputComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
