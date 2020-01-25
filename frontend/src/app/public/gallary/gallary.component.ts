import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GallaryData} from './../../admin/models/gallary.model';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  constructor(public http: HttpClient) { }
  public data: GallaryData[] = [];
  public BASE_URL = 'http://localhost:3000';

  ngOnInit() {
    this.http.get('http://localhost:3000/api/gallary/all_pics').subscribe((res: GallaryData[]) => {
            // console.log(res);
            this.data = res;
        });
  }
  linkImg(fileName) {
    // base_URL returns localhost:3000 or the production URL
        return `${this.BASE_URL}/Images/gallary/${fileName}`;
      }

}
