import { Component, OnInit } from '@angular/core';
import { ReadService } from "../../services/read.service";
import { Plant } from "../../models/Plant";
import {Router} from '@angular/router';
import { PlantDialogComponent, PlantDialogResult } from 'src/app/plant-dialog/plant-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-plant-page',
  templateUrl: './plant-page.component.html',
  styleUrls: ['./plant-page.component.css']
})
export class PlantPageComponent implements OnInit {

  plantCollection!: AngularFirestoreCollection<Plant>;
  plants!:Plant[];
  
  constructor(private readService:ReadService, private route:Router, private dialog: MatDialog, public afs: AngularFirestore)
  { }

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

  addPlant(): void {
    const dialogRef = this.dialog.open(PlantDialogComponent, {
      width: '450px',
      data: {
        plant: {},
      }
    });

    dialogRef.afterClosed().subscribe((result: PlantDialogResult) => {
      if (!result.plant.Name) return; //Don't add blank entries

      this.plants.push(result.plant); //insert locally

      //insert to firebase
      this.plantCollection = this.afs.collection('users/oWWajW5e8paKINCNuW5WuPN7lhJ2/Greenhouses/FlW10npLhWBABvxUp0Fg/Plants');
      this.plantCollection.add(result.plant);
    });
  }
}