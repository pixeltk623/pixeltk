import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AngularCertificationTrainingCourseComponent } from './angular-certification-training-course/angular-certification-training-course.component';
import { LaravelCertificationTrainingCourseComponent } from './laravel-certification-training-course/laravel-certification-training-course.component';
import { ReactJsCertificationTrainingCourseComponent } from './react-js-certification-training-course/react-js-certification-training-course.component';
import { JavaCertificationTrainingCourseComponent } from './java-certification-training-course/java-certification-training-course.component';
import { WebDesignCertificationTrainingCourseComponent } from './web-design-certification-training-course/web-design-certification-training-course.component';
import { PhpCertificationTrainingCourseComponent } from './php-certification-training-course/php-certification-training-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'courses/angular-certification-training-course', component: AngularCertificationTrainingCourseComponent },
  { path: 'courses/react-js-certification-training-course', component: ReactJsCertificationTrainingCourseComponent },
  { path: 'courses/web-design-certification-training-course', component: WebDesignCertificationTrainingCourseComponent },
  { path: 'courses/java-certification-training-course', component: JavaCertificationTrainingCourseComponent },
  { path: 'courses/php-certification-training-course', component: PhpCertificationTrainingCourseComponent },
  { path: 'courses/laravel-certification-training-course', component: LaravelCertificationTrainingCourseComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
