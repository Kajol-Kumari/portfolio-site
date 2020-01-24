import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogData } from '../models/blog.model';

@Component({
  selector: 'app-admin-bloglist',
  templateUrl: './admin-bloglist.component.html',
  styleUrls: ['./admin-bloglist.component.css']
})
export class AdminBloglistComponent implements OnInit {

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

    deleteblog(blogId: string) {
        console.log(blogId);
        this.http.post('http://localhost:3000/api/blog/admin@harsh@1403/delete/:id', blogId).subscribe(() => {
            console.log('deleted');
        });
    }

}
