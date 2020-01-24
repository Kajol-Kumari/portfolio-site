import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactData} from '../models/contact.model';

@Component({
  selector: 'app-admin-contactlist',
  templateUrl: './admin-contactlist.component.html',
  styleUrls: ['./admin-contactlist.component.css']
})
export class AdminContactlistComponent implements OnInit {
  public data:Contact
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/blog/blog_list').subscribe((res: ContactData[]) => {
            // console.log(res);
            this.data = res;
        });
  }

}
