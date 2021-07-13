import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { AngularCertificationTrainingCourseComponent } from './angular-certification-training-course/angular-certification-training-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ClientsComponent } from './clients/clients.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { JavaCertificationTrainingCourseComponent } from './java-certification-training-course/java-certification-training-course.component';
import { ReactJsCertificationTrainingCourseComponent } from './react-js-certification-training-course/react-js-certification-training-course.component';
import { PhpCertificationTrainingCourseComponent } from './php-certification-training-course/php-certification-training-course.component';
import { WebDesignCertificationTrainingCourseComponent } from './web-design-certification-training-course/web-design-certification-training-course.component';
import { LaravelCertificationTrainingCourseComponent } from './laravel-certification-training-course/laravel-certification-training-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DialogComponent } from './dialog/dialog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// import { NgProgressModule } from 'ngx-progressbar';
// import { HttpClientModule } from '@angular/common/http';
  

<<<<<<< Updated upstream
// import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
=======
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
// import {Component} from '@angular/core';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    CustomerFeedbackComponent,
    AngularCertificationTrainingCourseComponent,
    ClientsComponent,
    EnquiryComponent,
    JavaCertificationTrainingCourseComponent,
    ReactJsCertificationTrainingCourseComponent,
    PhpCertificationTrainingCourseComponent,
    WebDesignCertificationTrainingCourseComponent,
    LaravelCertificationTrainingCourseComponent,
    NotFoundComponent,
    DialogComponent,
    ContactUsComponent
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    LayoutModule,
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,

    // NgProgressModule,
    // HttpClientModule,
    // LoadingBarRouterModule,

<<<<<<< Updated upstream
    // NgxSpinnerModule,
=======
    NgxSpinnerModule,
    // Component
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule  { 
  
 

  }
  // @Component({
  //   selector: 'progress-bar-indeterminate-example',
  //   templateUrl: 'progress-bar-indeterminate-example.html',
  // })
  // export class ProgressBarIndeterminateExample {}
