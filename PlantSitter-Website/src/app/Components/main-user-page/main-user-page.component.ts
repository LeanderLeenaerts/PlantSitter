import { Component, OnInit } from '@angular/core';
import { ReadService } from "../../services/read.service";

@Component({
  selector: 'app-main-user-page',
  templateUrl: './main-user-page.component.html',
  styleUrls: ['./main-user-page.component.css']
})
export class MainUserPageComponent implements OnInit {

  constructor(private readService:ReadService) { }

  ngOnInit(): void {
    this.readService.getItems().subscribe(items =>{console.log(items);})
  }

  onButtonClick(){
    console.log("Clicked");
  }

}
