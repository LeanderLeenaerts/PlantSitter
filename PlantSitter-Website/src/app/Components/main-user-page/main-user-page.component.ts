import { Component, OnInit } from '@angular/core';
import { ReadService } from "../../services/read.service";
import { User } from "../../models/User";

@Component({
  selector: 'app-main-user-page',
  templateUrl: './main-user-page.component.html',
  styleUrls: ['./main-user-page.component.css']
})
export class MainUserPageComponent implements OnInit {

  users!:User[];

  constructor(private readService:ReadService) { }

  ngOnInit(): void {
    this.readService.getUsers().subscribe(getBack =>{
      console.log(getBack);
      this.users = getBack;
    })
  }

  onButtonClick(){
    console.log("Clicked");
  }

}