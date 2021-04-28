import { Component, OnInit } from '@angular/core';
import { ReadService } from "../../services/read.service";
import { Greenhouse } from "../../models/Greenhouse";
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { GhDialogComponent, GhDialogResult } from "../../gh-dialog//gh-dialog.component";
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-greenhouse-page',
  templateUrl: './greenhouse-page.component.html',
  styleUrls: ['./greenhouse-page.component.css'],
  providers:  [ AuthService ]
})
export class GreenhousePageComponent implements OnInit {

  greenhouses: Greenhouse[] = [];
  greenhouseCollection!: AngularFirestoreCollection<Greenhouse>;
  
  constructor(
    private readService:ReadService, 
    private route:Router,
    private dialog: MatDialog,
    public auth: AuthService,
    private  afs: AngularFirestore
  ) 
  { 
  }

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

    dialogRef.afterClosed().subscribe((result: GhDialogResult) => {
      if (!result.gh.Name) return; //Don't add blank entries

      this.greenhouses.push(result.gh); //insert locally

      //insert to firebase
      this.greenhouseCollection = this.afs.collection('users/oWWajW5e8paKINCNuW5WuPN7lhJ2/Greenhouses');
      this.greenhouseCollection.add(result.gh);
    });
  }

  deleteGreenhouse() {

  }
}
