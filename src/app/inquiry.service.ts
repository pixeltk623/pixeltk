import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  public apiUrl:string = "http://pixeltk.com/api/add_inquiry.php";
  constructor(private http:HttpClient) { }

  postInquiryFormData(data:any) {
    console.log(data);
    return this.http.post<any>(this.apiUrl, data)
  }
}

// HTML 

// block level element 

// Inline Level element
