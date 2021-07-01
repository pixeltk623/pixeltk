import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-java-certification-training-course',
  templateUrl: './java-certification-training-course.component.html',
  styleUrls: ['./java-certification-training-course.component.css']
})
export class JavaCertificationTrainingCourseComponent implements OnInit {
  public baseUrl:string = environment.firebase.baseUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
