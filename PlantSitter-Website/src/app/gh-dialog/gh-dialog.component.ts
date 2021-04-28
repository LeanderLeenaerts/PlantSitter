import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Greenhouse } from '../models/Greenhouse';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent {
  private backup: Partial<Greenhouse> = { ...this.data.gh };

  constructor(
    public dialogRef: MatDialogRef<GhDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GhDialogData
  ) {}

  cancel(): void {
    this.data.gh.Name = this.backup.Name;
    this.data.gh.Description = this.backup.Description;
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