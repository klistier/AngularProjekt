import { Routes } from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BlogInputComponent } from './components/blog-input/blog-input.component';

export const routes: Routes = [
    {
        path: "",
        component: MainPageComponent
    },
    {
        path: "posts/:id",
        component: SinglePostComponent
    },
    {
        path: "create",
        component: BlogInputComponent
    }
];
