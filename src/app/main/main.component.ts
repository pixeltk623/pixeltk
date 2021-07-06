import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public baseUrl:string = environment.firebase.baseUrl;
  public status:boolean=false;
  constructor(private route:Router) { 
    //console.log(environment.baseUrl);
  }

  ngOnInit(): void {
  }

  angularCourse() {
    //console.log("Hello")
    this.route.navigate(['courses/angular-certification-training-course']);
  }

  submit(){
    this.status=false;
  }



login(){
   console.log('hello');
   this.status=true;
}

  logOut(){
    this.status=false;
 }
}
