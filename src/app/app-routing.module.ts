import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { ExploreBlogComponent } from './modules/explore-blog/explore-blog.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blogs',
    component: GalleryComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'explore-blogs',
    component: ExploreBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
