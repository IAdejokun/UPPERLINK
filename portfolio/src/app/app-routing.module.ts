import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectAndBlogComponent } from './project-and-blog/project-and-blog.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
  path:'',
  component:HomeComponent,
},
{
  path:'about',
  component:AboutComponent,
},
{
  path:'project-and-blog',
  component:ProjectAndBlogComponent,
},
{
  path:'contact',
  component:ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
