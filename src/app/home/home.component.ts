import { Component, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = [
   
    
    'assets/D3.jpg',
    'assets/Mauu.jpg',
    'assets/Maaufigma.JPG'
  ];
  currentIndex: number = 0;
  currentImage: string = '';

  constructor() { }

  ngOnInit(): void {
    // Initialize slideshow
   
    this.showSlide();
    
  }

  showSlide(): void {
    this.currentImage = this.images[this.currentIndex];
    setInterval(() => {
      this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
      this.currentImage = this.images[this.currentIndex];
    }, 4000); 
  }
 


}

