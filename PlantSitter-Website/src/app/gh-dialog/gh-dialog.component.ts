import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Greenhouse } from '../models/Greenhouse';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent {
  private backupGh: Partial<Greenhouse> = { ...this.data.gh };

  constructor(
    public dialogRef: MatDialogRef<GhDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GhDialogData
  ) {}

  cancel(): void {
    this.data.gh.Name = this.backupGh.Name;
    this.data.gh.Description = this.backupGh.Description;
    this.dialogRef.close(this.data);
  }
}

export interface GhDialogData {
  gh: Partial<Greenhouse>;
  enableDelete: boolean;
}

export interface GhDialogResult {
  gh: Greenhouse;
  delete?: boolean;
}