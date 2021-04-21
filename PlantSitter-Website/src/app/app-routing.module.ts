import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreenhousePageComponent } from './Components/greenhouse-page/greenhouse-page.component';
import { PlantPageComponent } from './Components/plant-page/plant-page.component';


const routes: Routes = [
  {path:'greenhouse-path',component:GreenhousePageComponent},
  {path:'plant-path',component:PlantPageComponent},
  {path: '',   redirectTo: '/greenhouse-path', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
