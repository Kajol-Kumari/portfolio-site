import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-addpic',
  templateUrl: './admin-addpic.component.html',
  styleUrls: ['./admin-addpic.component.css']
})
export class AdminAddpicComponent implements OnInit {

  constructor(public http: HttpClient, public router: Router) { }
  selectedFile: File = null;
  ngOnInit() {
  }
  selectedImage(event) {
    if (event.target.files.length > 0) {
       this.selectedFile = event.target.files[0] as File;

      }
  }

  Picreg(form: NgForm) {
    const fd = new FormData();
    fd.append('Heading', form.value.heading);
    fd.append('Subheading', form.value.subheading );
    fd.append('image', this.selectedFile, this.selectedFile.name);


    this.http.post('http://localhost:3000/api/gallary/admin@harsh@1403/picregister', fd).subscribe(() => {
        }, error => {
          console.log(error);
        });
    this.router.navigate(['/admin@harsh@1403/gallary']);
  }
}
