import { Component, OnInit } from '@angular/core';
import { QuickPopup } from '../quick-popup';
import { QuickService } from '../quick.service';

@Component({
  selector: 'app-quick-popup',
  templateUrl: './quick-popup.component.html',
  styleUrls: ['./quick-popup.component.css']
})
export class QuickPopupComponent implements OnInit {

  public status=true;
  constructor(private quickService:QuickService) { }

  
  modelOfQuick = new QuickPopup('','');

  isdisabled:boolean =true;

  ngOnInit(): void {
  }

  close(){
    this.status=false;
  }

  onSubmit(){
    /* console.log(this.modelOfQuick); */
    this.quickService.postQuickFormData;

    let formdata:any ={
      
      "ContactNumber": this.modelOfQuick.mobile,
      "Email": this.modelOfQuick.email
      };
      this.quickService.postQuickFormData(formdata).subscribe(
        data => {
          console.log(data);
        }
      )
  }

  
}
