import { Component, OnInit } from '@angular/core';
import { Popup } from '../popup';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  modelOfPopup = new Popup('','','');

  isdisabled:boolean =true;

  ngOnInit(): void {
    console.log(this.modelOfPopup)
  }

  onSubmit(){
    console.log(this.modelOfPopup);
  }

}
