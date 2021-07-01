import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-web-design-certification-training-course',
  templateUrl: './web-design-certification-training-course.component.html',
  styleUrls: ['./web-design-certification-training-course.component.css']
})
export class WebDesignCertificationTrainingCourseComponent implements OnInit {
  public baseUrl:string = environment.firebase.baseUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
