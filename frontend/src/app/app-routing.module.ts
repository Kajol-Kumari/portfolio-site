import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { BlogListComponent } from './public/blog-list/blog-list.component';
import { BlogDetailComponent } from './public/blog-detail/blog-detail.component';
import { ContactComponent } from './public/contact/contact.component';
import { AboutComponent } from './public/about/about.component';
import { AdminComponent } from './admin/admin.component';
import { BlogregComponent } from './admin/blogreg/blogreg.component';
import { AdminBloglistComponent } from './admin/admin-bloglist/admin-bloglist.component';
import { AdminContactlistComponent } from './admin/admin-contactlist/admin-contactlist.component';
import { AdminAddpicComponent } from './admin/admin-addpic/admin-addpic.component';
import { AdminViewpicComponent } from './admin/admin-viewpic/admin-viewpic.component';


const routes: Routes = [
  {path: 'harsh@admin@harsh1403@12213', component: AdminComponent},
  {path: 'admin@harsh@1403/blog_Reg', component: BlogregComponent},
  {path: 'admin@harsh@1403/blog_list', component: AdminBloglistComponent},
  {path: 'admin@harsh@1403/contact_list', component: AdminContactlistComponent},
  {path: 'admin@harsh@1403/add_pic', component: AdminAddpicComponent},
  {path: 'admin@harsh@1403/gallary', component: AdminViewpicComponent},
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog_list', component: BlogListComponent},
  {path: 'blog_detail', component: BlogDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
