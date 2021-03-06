import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PopupComponent } from '../popup/popup.component';
import { QuickPopupComponent } from '../quick-popup/quick-popup.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public baseUrl:string = environment.firebase.baseUrl;
  public status:boolean=false;
  constructor(private route:Router,public dialog: MatDialog, private spinner:NgxSpinnerService) { 
    //console.log(environment.baseUrl);
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  ngAfterViewInit(){
    setTimeout( ()=>{
    this.openDialog()
    }, 5000)
  }
 
 
   openDialog() {
     const dialogRef = this.dialog.open(PopupComponent);
 
     dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result}`);
     });
   }

  

  angularCourse() {
    //console.log("Hello")
    this.route.navigate(['courses/angular-certification-training-course']);
  }

  submit(){
    this.status=false;
  }


  quickOpenDialog() {
    const dialogRef = this.dialog.open(QuickPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }




login(){
   console.log('hello');
   this.status=true;
}

  logOut(){
    this.status=false;
 }
}