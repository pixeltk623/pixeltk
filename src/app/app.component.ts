import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { LiveChatWidgetModel, LiveChatWidgetApiModel } from '@livechat/angular-widget';
import { Subscription } from 'rxjs';


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
 
  licenseId:number= 12967557;

  constructor(private spinner: NgxSpinnerService) { }

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
  }

  ngOnDestroy(): void {
    this.liveChatWidget$.unsubscribe();
}

}