import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuickService {

  public apiUrl:string ="https://www.pixeltk.com/api/";
  
  constructor(private http:HttpClient) { }

  postQuickFormData(data:any){
    /* console.log(data); */
    return this.http.post<any>(this.apiUrl+"add_inquiry.php",data)
  }
}
