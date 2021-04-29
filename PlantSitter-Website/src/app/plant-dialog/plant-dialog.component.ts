import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Plant } from '../models/Plant';

@Component({
  selector: 'app-plant-dialog',
  templateUrl: './plant-dialog.component.html',
  styleUrls: ['./plant-dialog.component.css']
})
export class PlantDialogComponent {
  private backup: Partial<Plant> = { ...this.data.plant };

  constructor(
    public dialogRef: MatDialogRef<PlantDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlantDialogData
  ) 
  {
    this.data.plant.Light_Intensity = "Not recorded yet";
    this.data.plant.Soil_Humidity = "Not recorded yet";
    this.data.plant.Humidity = "Not recorded yet";
    this.data.plant.Temperature = 0;
  }

  cancel(): void {
    //this.data.plant.Name = this.backup.Name;
    //this.data.gh.Description = this.backup.;
    this.dialogRef.close(this.data);
  }
}

export interface PlantDialogData {
  plant: Partial<Plant>;
  enableDelete: boolean;
}

export interface PlantDialogResult {
  plant: Plant;
  delete?: boolean;
}