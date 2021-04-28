import { Component, OnInit } from '@angular/core';
import { ReadService } from "../../services/read.service";
import { Greenhouse } from "../../models/Greenhouse";
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { GhDialogComponent, GhDialogData, GhDialogResult } from "../../gh-dialog//gh-dialog.component";

@Component({
  selector: 'app-greenhouse-page',
  templateUrl: './greenhouse-page.component.html',
  styleUrls: ['./greenhouse-page.component.css']
})
export class GreenhousePageComponent implements OnInit {

  greenhouses: Greenhouse[] = [];
  
  constructor(
    private readService:ReadService, 
    private route:Router,
    private dialog: MatDialog
  ) 
  { }

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

  onCreateNewGreenhouse(): void {
    const dialogRef = this.dialog.open(GhDialogComponent, {
      width: '270px',
      data: {
        gh: {},
      }
    });

    dialogRef.afterClosed().subscribe((result: GhDialogResult) => this.greenhouses.push(result.gh));
  }
}
