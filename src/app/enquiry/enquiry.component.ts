import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Enquiry } from '../enquiry';
import { InquiryService } from '../inquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(public dialog: MatDialog, private inquiryService:InquiryService) {}

  public courseState:boolean = false;
  public allCourses:any = [
    {
      "course_id": "Angular Certification Course",
      "course_name": "Angular Certification Course"
    },
    {
      "course_id": "React Js Certification Course",
      "course_name": "React Js Certification Course"
    },
    {
      "course_id": "Web Design Certification Course",
      "course_name": "Web Design Certification Course"
    },
    {
      "course_id": "Java Certification Course",
      "course_name": "Java Certification Course"
    },
    {
      "course_id": "PHP Certification Course",
      "course_name": "PHP Certification Course"
    },
    {
      "course_id": "Laravel Certification Course",
      "course_name": "Laravel Certification Course"
    },
] 

  modelOfEnquiry = new Enquiry('','','','','');
  isdisabled:boolean = true;

  ngOnInit(): void {
    console.log(this.modelOfEnquiry)
    //this.openDialog()
  }

//   ngAfterViewInit(){
//    setTimeout( ()=>{
//    this.openDialog()
//    }, 5000)
//  }

onSubmit() {
  //console.log(this.modelOfEnquiry);
  let formdata:any = {
    "FullName" : this.modelOfEnquiry.name,
    "ContactNumber": this.modelOfEnquiry.mobile,
    "Email": this.modelOfEnquiry.email,
    "Course_name": this.modelOfEnquiry.course
  };
  this.inquiryService.postInquiryFormData(formdata).subscribe(
    data => {
      console.log(data);
    }
  )
}


  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  checkCourse() {
    console.log(this.modelOfEnquiry.course)

    if(this.modelOfEnquiry.course=='') {
      this.courseState = true;
    } else {
      this.courseState = false;
    }
  }

}

