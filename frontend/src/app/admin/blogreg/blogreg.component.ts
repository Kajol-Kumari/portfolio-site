import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blogreg',
  templateUrl: './blogreg.component.html',
  styleUrls: ['./blogreg.component.css']
})
export class BlogregComponent implements OnInit {

  constructor(public http: HttpClient, public router: Router) { }
  selectedFile: File = null;

  ngOnInit() {
  }
  selectedImage(event) {
    if (event.target.files.length > 0) {
       this.selectedFile = event.target.files[0] as File;

      }
  }

  Blogreg(form: NgForm) {
    const fd = new FormData();
    fd.append('Heading', form.value.heading);
    fd.append('Subheading', form.value.subheading );
    fd.append('Text', form.value.content );
    fd.append('image', this.selectedFile, this.selectedFile.name);


    this.http.post('http://localhost:3000/api/blog/admin@harsh@1403/blogregister', fd).subscribe(() => {
        }, error => {
          console.log(error);
        });
    this.router.navigate(['/admin@harsh@1403/blog_list']);
  }
}
