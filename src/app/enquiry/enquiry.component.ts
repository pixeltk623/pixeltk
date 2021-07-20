import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Enquiry } from '../enquiry';


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  modelOfEnquiry = new Enquiry('','','');
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
  console.log(this.modelOfEnquiry);
}


  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

