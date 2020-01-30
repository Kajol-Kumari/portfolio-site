import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GallaryData} from '../models/gallary.model';

@Component({
  selector: 'app-admin-viewpic',
  templateUrl: './admin-viewpic.component.html',
  styleUrls: ['./admin-viewpic.component.css']
})
export class AdminViewpicComponent implements OnInit {

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

deletepic(picId: string) {
    const url = 'http://localhost:3000/api/gallary/admin@harsh@1403/delete/' + picId;
    this.http.post(url, picId).subscribe(() => {
        console.log('deleted!');
    });
}

}
