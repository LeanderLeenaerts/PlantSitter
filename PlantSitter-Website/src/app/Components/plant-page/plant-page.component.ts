import { Component, OnInit } from '@angular/core';
import { ReadService } from "../../services/read.service";
import { Plant } from "../../models/Plant";
import {Router} from '@angular/router';

@Component({
  selector: 'app-plant-page',
  templateUrl: './plant-page.component.html',
  styleUrls: ['./plant-page.component.css']
})
export class PlantPageComponent implements OnInit {

  plants!:Plant[];
  
  constructor(private readService:ReadService, private route:Router) { }

  ngOnInit(): void {
    this.readService.getPlants().subscribe(getBack =>{
      console.log(getBack);
      this.plants = getBack;
    })
  }

  onButtonClick(){
    console.log(this.plants);
  }

  goBack()
  {
    this.route.navigate(['/greenhouse-path']);
  }

}