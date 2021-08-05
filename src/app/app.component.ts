import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Route, Router } from '@angular/router';
import { LiveChatWidgetModel, LiveChatWidgetApiModel } from '@livechat/angular-widget';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public href: string = "";

  @ViewChild('liveChatWidget')
  liveChatWidget!: LiveChatWidgetModel;
  liveChatWidget$: Subscription = new Subscription();
  liveChatApi!: LiveChatWidgetApiModel;

  title = 'pixeltk';
  spinnerType: any;
  spinnerName: any;
 
  licenseId:any= "60f13155d6e7610a49ab8a47"

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  onChatLoaded(api: LiveChatWidgetApiModel) {
    this.liveChatApi = api;
  }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
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