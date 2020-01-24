import { Component, OnInit } from '@angular/core';
import {NgForm, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactData } from './contact.models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }
  processForm(form: NgForm) {
    const allInfo =
      `My name is ${form.value.name}.
    My email is ${form.value.email}.
    My message is ${form.value.message}`;
    alert(allInfo);
    // Store the details in firebase
    if (form.valid) {
    const {name, email, message} = form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    const data: ContactData = {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message,
    html,
    date
    };
    // this.firebaseService.addmessage(data).then(res => {
    //   form.reset();
    // });

    // this.http.sendEmail('https://harsh-kumar.com/sendmail', data).subscribe(
    //   doc => {
    //     const res: any = doc;
    //     console.log(
    //       `${data.name} is successfully register and mail has been sent!`
    //     );
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }
    this.router.navigate(['/']);
    // console.log('Form Submitted!');
    }
}
