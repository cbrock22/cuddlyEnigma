import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('elementToFade') elementToFade: ElementRef | undefined;
  showSpinner = true;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async ngAfterViewInit() {
    this.elementToFade!.nativeElement.classList.add('fade-in');
    await this.delay (5000); //only show spinner for 10 seconds
    this.elementToFade!.nativeElement.classList.remove('fade-in');
    this.elementToFade!.nativeElement.classList.add('fade-out');
    
    
  }

}
