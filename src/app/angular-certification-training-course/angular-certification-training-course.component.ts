import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-angular-certification-training-course',
  templateUrl: './angular-certification-training-course.component.html',
  styleUrls: ['./angular-certification-training-course.component.css']
})
export class AngularCertificationTrainingCourseComponent implements OnInit {

  public baseUrl:string = environment.firebase.baseUrl;
  // public baseUrl:string = "https://shreetuitioncenter.com/";
  constructor() { }

  ngOnInit(): void {
  }

}
