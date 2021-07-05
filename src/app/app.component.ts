import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pixeltk';
  spinnerType: any;
  spinnerName: any;

  
  constructor(private spinner: NgxSpinnerService) {
    
    
    this.spinnerName= 'sp1';
    this.spinnerType= 'ball-clip-rotate-single';


    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

}
