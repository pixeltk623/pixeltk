import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Courses } from '../courses';

@Component({
  selector: 'app-laravel-certification-training-course',
  templateUrl: './laravel-certification-training-course.component.html',
  styleUrls: ['./laravel-certification-training-course.component.css']
})
export class LaravelCertificationTrainingCourseComponent implements OnInit {
  public baseUrl:string = environment.firebase.baseUrl;
  constructor() { }

  modelOfCourses = new Courses('','');

  isdisabled:boolean = true;

  onSubmit(){
    console.log(this.modelOfCourses);
  }

  ngOnInit(): void {
    console.log(this.modelOfCourses)
  }

}
