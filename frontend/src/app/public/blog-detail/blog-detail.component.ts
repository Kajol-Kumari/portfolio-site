import { Component, OnInit } from '@angular/core';
import {BlogData} from '../../admin/models/blog.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  public data: BlogData[] = [];
  public BASE_URL = 'http://localhost:3000';
  constructor(public http: HttpClient) {}
  ngOnInit() {
      this.http.get('http://localhost:3000/api/blog/blog_list').subscribe((res: BlogData[]) => {
          // console.log(res);
          this.data = res;
      });
      // console.log(this.data);
  }

  linkImg(fileName) {
      // base_URL returns localhost:3000 or the production URL
          return `${this.BASE_URL}/Images/blog/${fileName}`;
        }

      detailBlog(blogId: string) {
      console.log(blogId);
      this.http.post('http://localhost:3000/api/blog/getblog/:id', blogId).subscribe(() => {
          console.log('deleted');
      });
  }
}
