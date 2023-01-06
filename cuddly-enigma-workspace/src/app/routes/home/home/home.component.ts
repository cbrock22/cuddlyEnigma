import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('titleToFade') titleToFade: ElementRef | undefined;
  @ViewChild('elementToFade') elementToFade: ElementRef | undefined;
  showSpinner = true;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async ngAfterViewInit() {

    while (true){
      this.elementToFade!.nativeElement.classList.add('fade-in');
      this.titleToFade!.nativeElement.classList.add('fade-in');
      await this.delay (2500); //only show spinner for 10 seconds
      this.titleToFade!.nativeElement.classList.remove('fade-in');
      this.elementToFade!.nativeElement.classList.remove('fade-in');
      this.titleToFade!.nativeElement.classList.add('fade-out');
      this.elementToFade!.nativeElement.classList.add('fade-out');
      await this.delay (2500);
    }
    
    
    
  }

}
