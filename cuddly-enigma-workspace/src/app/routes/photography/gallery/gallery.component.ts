import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit{

  allImageData: any;
  bucket: any;
  tesAlbumFilePath = 'testalbum2'
  imageKeys = [ 'boys_in_dallas.jpg', 'DSC00001.JPG', 'DSC00781.JPG'];
  readonly baseURL = 'https://photosbuckettest.s3.us-east-2.amazonaws.com/testalbum2/';
  imageURLArray: any[] = [];

  constructor(private elementRef: ElementRef, private http: HttpClient) { console.log('in gallery constructor') }

  ngOnInit(): void {

    this.getImagesURLS();
    // this.getImagesFromAWS();

    
    


  }

  getImagesURLS(){

    this.imageURLArray = [];

    for (var i = 0; i < this.imageKeys.length; i++){
      this.imageURLArray.push(this.baseURL + this.imageKeys[i]);
    }

    console.log(this.imageURLArray);

  }

  

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f5f0e1';
  }

}


