import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public baseUrl:string = environment.firebase.baseUrl;
  //constructor() { }

  ngOnInit(): void {
  }

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    email: [null, Validators.required],
    mobile: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }

}
