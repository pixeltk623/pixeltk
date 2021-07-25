import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpEvent,HttpHandler,HttpInterceptor,HttpRequest,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable,of,throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PopService {

  public apiUrl:string ="https://www.pixeltk.com/api/";
  constructor(private http:HttpClient) { }

  postPopupFormData(data:any){
    /* console.log(data); */
    return this.http.post<any>(this.apiUrl+"add_inquiry.php",data)
  }
}
