import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { NgxSpinnerService } from 'ngx-spinner';
import { Courses } from '../courses';

import { CoursesService } from '../courses.service';
import { Enquiry } from '../enquiry';

@Component({
  selector: 'app-angular-certification-training-course',
  templateUrl: './angular-certification-training-course.component.html',
  styleUrls: ['./angular-certification-training-course.component.css']
})
export class AngularCertificationTrainingCourseComponent implements OnInit {

  public baseUrl:string = environment.firebase.baseUrl;
  spinnerType: any;
  spinnerName: any;
  Courses:any;
  alert!: boolean;
  // public baseUrl:string = "https://shreetuitioncenter.com/";
  
  
  constructor(private spinner: NgxSpinnerService,private coursesService:CoursesService, ) { }

  modelOfEnquiry = new Enquiry('','','','','');
  
  modelOfCourses :any= new Courses('','');
  isdisabled:boolean = true;

  

  onSubmit(){
    console.log(this.modelOfCourses);
    
    

    let formdata:any ={
      
      "ContactNumber": this.modelOfCourses.mobile,
      "Email": this.modelOfCourses.email,

      

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
    console.log(this.modelOfEnquiry)
    this.spinner.show();
    console.log(this.modelOfCourses)

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

 

  closeAlert(){
    this.alert=false;
  }

  

  

}