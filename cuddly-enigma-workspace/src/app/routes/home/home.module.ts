import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { MeComponent } from './me/me.component';

const routes: Routes = [ {
  path: '', component: HomeComponent
}];

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
