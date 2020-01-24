import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogDetailComponent } from './public/blog-detail/blog-detail.component';
import { BlogListComponent } from './public/blog-list/blog-list.component';
import { HomeComponent } from './public/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './public/contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { AboutComponent } from './public/about/about.component';
import { BlogregComponent } from './admin/blogreg/blogreg.component';
import { AdminBloglistComponent } from './admin/admin-bloglist/admin-bloglist.component';
import { AdminContactlistComponent } from './admin/admin-contactlist/admin-contactlist.component';
import { AdminAddpicComponent } from './admin/admin-addpic/admin-addpic.component';
import { AdminViewpicComponent } from './admin/admin-viewpic/admin-viewpic.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    BlogDetailComponent,
    BlogListComponent,
    HomeComponent,
    AdminComponent,
    ContactComponent,
    AboutComponent,
    BlogregComponent,
    AdminBloglistComponent,
    AdminContactlistComponent,
    AdminAddpicComponent,
    AdminViewpicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
