import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { MeComponent } from './me/me.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'developing', pathMatch: 'full' },
  {path: 'developing', component: HomeComponent},
  {path: 'me', component: MeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    MeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialsModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
