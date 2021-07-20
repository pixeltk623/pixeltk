import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
<<<<<<< Updated upstream

import { LiveChatWidgetModel, LiveChatWidgetApiModel } from '@livechat/angular-widget';
import { Subscription } from 'rxjs';


=======
import { LiveChatWidgetModel, LiveChatWidgetApiModel } from '@livechat/angular-widget';
import { Subscription } from 'rxjs';

>>>>>>> Stashed changes
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('liveChatWidget')
  liveChatWidget!: LiveChatWidgetModel;
  liveChatWidget$: Subscription = new Subscription();
  liveChatApi!: LiveChatWidgetApiModel;

  title = 'pixeltk';
  spinnerType: any;
  spinnerName: any;
<<<<<<< Updated upstream
 
  licenseId:number= 12967557;

  constructor(private spinner: NgxSpinnerService) { }

=======
  licenseId:number = 12967557;

  // public visitor: { name: string; email: string };
  // public params: { name: string; value: string }[];


  // @ViewChild('liveChatWidget', {static: false}) public liveChatWidget: LiveChatWidgetModel;


  constructor(private spinner: NgxSpinnerService) {

    // this.visitor = {
    //   name: 'John Doe',
    //   email: 'john@doe.com',
    // };

    // this.params = [
    //   { name: 'Login', value: 'joe_public' },
    //   { name: 'Account ID', value: 'ABCD1234' },
    //   { name: 'Total order value', value: '$123' }
    // ];
  }

>>>>>>> Stashed changes
  onChatLoaded(api: LiveChatWidgetApiModel) {
    this.liveChatApi = api;
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);

    this.liveChatWidget$ = this.liveChatWidget.onChatLoaded.subscribe((api: LiveChatWidgetApiModel) => this.liveChatApi = api)
<<<<<<< Updated upstream

=======
  }

  ngOnDestroy(): void {
    this.liveChatWidget$.unsubscribe();
>>>>>>> Stashed changes
  }

  ngOnDestroy(): void {
    this.liveChatWidget$.unsubscribe();
}

}