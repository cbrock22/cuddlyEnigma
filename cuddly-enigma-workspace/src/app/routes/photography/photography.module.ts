import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', redirectTo: 'gallery', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent }
];


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    RouterModule.forChild(routes),
  ],
  
})
export class PhotographyModule { }
