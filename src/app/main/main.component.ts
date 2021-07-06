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
  constructor(private route:Router) { 
    //console.log(environment.baseUrl);
  }

  ngOnInit(): void {
  }

  angularCourse() {
    //console.log("Hello")
    this.route.navigate(['courses/angular-certification-training-course']);
  }

}
