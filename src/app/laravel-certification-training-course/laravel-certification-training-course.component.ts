import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';
import { Enquiry } from '../enquiry';

@Component({
  selector: 'app-laravel-certification-training-course',
  templateUrl: './laravel-certification-training-course.component.html',
  styleUrls: ['./laravel-certification-training-course.component.css']
})
export class LaravelCertificationTrainingCourseComponent implements OnInit {
  public baseUrl:string = environment.firebase.baseUrl;
  constructor(private coursesService:CoursesService) { }
  
  modelOfEnquiry = new Enquiry('','','','','');

  modelOfCourses:any = new Courses('','');

  alert:boolean = false;

  isdisabled:boolean = true;

  onSubmit(){
    console.log(this.modelOfCourses);

    let formdata:any ={
      
      "ContactNumber": this.modelOfCourses.mobile,
      "Email": this.modelOfCourses.email
      };

      this.coursesService.postCoursesFormData(formdata).subscribe(
        data => {
          console.log(data);
          this.alert =true;
          this.modelOfCourses ='';
        }
      )
  }

  ngOnInit(): void {
    console.log(this.modelOfCourses)
  }

  closeAlert(){
    this.alert=false;
  }

}
