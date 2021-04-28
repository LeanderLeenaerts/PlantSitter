import { Component, OnInit } from '@angular/core';
import { ReadService } from "../../services/read.service";
import { Greenhouse } from "../../models/Greenhouse";
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GhDialogComponent, GhDialogResult } from 'src/app/gh-dialog/gh-dialog.component';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-greenhouse-page',
  templateUrl: './greenhouse-page.component.html',
  styleUrls: ['./greenhouse-page.component.css']
})
export class GreenhousePageComponent implements OnInit {

  greenhouses!:Greenhouse[];
  greenhouseCollection!: AngularFirestoreCollection<Greenhouse>;
  
  constructor(private readService:ReadService, private route:Router, private dialog: MatDialog, public afs: AngularFirestore) { 
  }

  ngOnInit(): void {
    this.readService.getGreenhouses().subscribe(getBack =>{
      console.log(getBack);
      this.greenhouses = getBack;
    })
  }

  addGreenhouse(): void {
    const dialogRef = this.dialog.open(GhDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: GhDialogResult) => {
        //this.greenhouses.push(result.gh);

        //also insert ig    
        this.greenhouseCollection = this.afs.collection('users/oWWajW5e8paKINCNuW5WuPN7lhJ2/Greenhouses');
        this.greenhouseCollection.add(result.gh).then(_ => alert("added!"));

      });
  }

  onButtonClick(){
    console.log(this.greenhouses);
  }

  goPlants()
  {
    this.route.navigate(['/plant-path']);
  }
}
