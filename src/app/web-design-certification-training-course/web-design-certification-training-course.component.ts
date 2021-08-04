import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-web-design-certification-training-course',
  templateUrl: './web-design-certification-training-course.component.html',
  styleUrls: ['./web-design-certification-training-course.component.css']
})
export class WebDesignCertificationTrainingCourseComponent implements OnInit {
  public baseUrl:string = environment.firebase.baseUrl;
  constructor(private coursesService:CoursesService) { }

  modelOfCourses = new Courses('','');

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
