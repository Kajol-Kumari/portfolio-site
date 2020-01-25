import { Component, OnInit } from '@angular/core';
import {NgForm, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactData } from './contact.models';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit() {
  }
  ContactReg(form: NgForm) {
    const allInfo =
      `My name is ${form.value.name}.
    My email is ${form.value.email}.
    My message is ${form.value.message}`;
    alert(allInfo);
    if (form.valid) {
    const {name, email, message} = form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    const fd = new FormData();
    fd.append('name', form.value.name);
    fd.append('email', form.value.email );
    fd.append('message', form.value.message );

    this.http.post('http://localhost:3000/api/contact/contact_register', fd).subscribe(() => {
        }, error => {
          console.log(error);
        });
    this.router.navigate(['/']);
    }
  }
}
