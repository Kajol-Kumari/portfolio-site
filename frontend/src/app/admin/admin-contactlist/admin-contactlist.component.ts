import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactData} from '../models/contact.model';

@Component({
  selector: 'app-admin-contactlist',
  templateUrl: './admin-contactlist.component.html',
  styleUrls: ['./admin-contactlist.component.css']
})
export class AdminContactlistComponent implements OnInit {
  public data: ContactData[] = [];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/contact//admin@harsh@1403/contact_list').subscribe((res: ContactData[]) => {
            // console.log(res);
            this.data = res;
        });
  }

}
