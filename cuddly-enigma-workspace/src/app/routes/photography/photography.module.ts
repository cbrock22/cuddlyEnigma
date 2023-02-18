import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'gallery', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent }
];


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PhotographyModule { }
