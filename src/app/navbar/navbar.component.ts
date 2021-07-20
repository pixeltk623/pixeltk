import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public baseUrl:string = environment.firebase.baseUrl;
    //public baseUrl:string = "https://shreetuitioncenter.com/";
    Phone:string = "+91-8160410477";
  constructor() { }

  ngOnInit(): void {
    console.log("data")
  }

}
