import { Component, OnInit } from '@angular/core';
import { Popup } from '../popup';
import {PopService} from '../pop.service'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private popService:PopService) { }

  modelOfPopup = new Popup('','','',);

  alert:boolean = false;

  isdisabled:boolean =true;

  ngOnInit(): void {
    console.log(this.modelOfPopup)
  }

  onSubmit(){
    /* console.log(this.modelOfPopup); */
    let formdata:any ={
      "FullName" : this.modelOfPopup.name,
      "ContactNumber": this.modelOfPopup.mobile,
      "Email": this.modelOfPopup.email
      };
    this.popService.postPopupFormData(formdata).subscribe(
      data => {
        console.log(data);
        this.alert =true;
      }
    )
  }

  closeAlert(){
    this.alert=false;
  }

}