import { Component, OnInit } from '@angular/core';
import { QuickPopup } from '../quick-popup';

@Component({
  selector: 'app-quick-popup',
  templateUrl: './quick-popup.component.html',
  styleUrls: ['./quick-popup.component.css']
})
export class QuickPopupComponent implements OnInit {

  public status=true;
  constructor() { }

  
  modelOfQuick = new QuickPopup('','');

  isdisabled:boolean =true;

  ngOnInit(): void {
  }

  close(){
    this.status=false;
  }

  onSubmit(){
    
  }

  
}
