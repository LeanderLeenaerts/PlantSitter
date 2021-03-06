import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { MainUserPageComponent } from './Components/main-user-page/main-user-page.component';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { ReadService } from './services/read.service';
import { GreenhousePageComponent } from './Components/greenhouse-page/greenhouse-page.component';
import { PlantPageComponent } from './Components/plant-page/plant-page.component';      //L
import { Routes } from '@angular/router';
import { GhDialogComponent } from './gh-dialog/gh-dialog.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { PlantDialogComponent } from './plant-dialog/plant-dialog.component';
import { MatSliderModule } from '@angular/material/slider'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainUserPageComponent,
    GreenhousePageComponent,
    PlantPageComponent,
    GhDialogComponent,
    PlantDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatInputModule
  ],
  providers: [ReadService],     //L
  bootstrap: [AppComponent]
})
export class AppModule { }
