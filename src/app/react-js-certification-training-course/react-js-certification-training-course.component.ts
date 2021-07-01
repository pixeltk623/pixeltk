import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-react-js-certification-training-course',
  templateUrl: './react-js-certification-training-course.component.html',
  styleUrls: ['./react-js-certification-training-course.component.css']
})
export class ReactJsCertificationTrainingCourseComponent implements OnInit {
  public baseUrl:string = environment.firebase.baseUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
