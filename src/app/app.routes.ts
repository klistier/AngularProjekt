import { Routes } from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
    {
        path: "",
        component: MainPageComponent
    },
    {
        path: "posts/:id",
        component: SinglePostComponent
    }
];
