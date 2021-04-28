import { Component, OnInit } from '@angular/core';
import { ReadService } from "../../services/read.service";
import { Greenhouse } from "../../models/Greenhouse";
import {Router} from '@angular/router';

@Component({
  selector: 'app-greenhouse-page',
  templateUrl: './greenhouse-page.component.html',
  styleUrls: ['./greenhouse-page.component.css']
})
export class GreenhousePageComponent implements OnInit {

  greenhouses!:Greenhouse[];
  
  constructor(private readService:ReadService, private route:Router) { }

  ngOnInit(): void {
    this.readService.getGreenhouses().subscribe(getBack =>{
      console.log(getBack);
      this.greenhouses = getBack;
    })
  }

  onButtonClick(){
    console.log(this.greenhouses);
  }

  goPlants()
  {
    this.route.navigate(['/plant-path']);
  }
}
