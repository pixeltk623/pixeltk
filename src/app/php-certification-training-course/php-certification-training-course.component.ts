import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-php-certification-training-course',
  templateUrl: './php-certification-training-course.component.html',
  styleUrls: ['./php-certification-training-course.component.css']
})
export class PhpCertificationTrainingCourseComponent implements OnInit {
  public baseUrl:string = environment.firebase.baseUrl;
  constructor() { }

  ngOnInit(): void {
  }

}