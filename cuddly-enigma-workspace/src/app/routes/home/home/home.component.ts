import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('titleToFade') titleToFade: ElementRef | undefined;
  @ViewChild('title2ToFade') title2ToFade: ElementRef | undefined;
  @ViewChild('elementToFade') elementToFade: ElementRef | undefined;
  showSpinner = true;
  constructor(private el: ElementRef, private router: Router) { }

  ngOnInit(): void {
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async ngAfterViewInit() {

    this.el.nativeElement.ownerDocument.body.style.backgroundColor = 'black';

    while (this.showSpinner){
      this.elementToFade!.nativeElement.classList.add('fade-in');
      this.titleToFade!.nativeElement.classList.add('fade-in');
      this.title2ToFade!.nativeElement.classList.add('fade-in');
      await this.delay (2500); //COMMENT THESE IN TO HAVE THE ELEMENTS FADE OUT
      //this.titleToFade!.nativeElement.classList.remove('fade-in');
      //this.title2ToFade!.nativeElement.classList.remove('fade-in');
      //this.elementToFade!.nativeElement.classList.remove('fade-in');
      //this.titleToFade!.nativeElement.classList.add('fade-out');
      //this.title2ToFade!.nativeElement.classList.add('fade-out');
      //this.elementToFade!.nativeElement.classList.add('fade-out');
      this.showSpinner = false;
      await this.delay (2500);
    }
    
    
    
  }

  routeToPhotos(){
    console.log('routing');
    this.router.navigate(['/photography/gallery']);

  }

}
